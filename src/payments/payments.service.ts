import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Injectable()
export class PaymentsService {
  private mp: MercadoPagoConfig;

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    this.mp = new MercadoPagoConfig({
      accessToken: this.config.get<string>('MP_ACCESS_TOKEN')!,
    });
  }

  private getPlanDetails(plan: string): { title: string; price: number } {
    const plans: Record<string, { title: string; price: number }> = {
      monthly: { title: 'Plano Mensal',       price: 19.90  },
      annual:  { title: 'Plano Anual',        price: 119.00 },
      single:  { title: 'Pagamento Único',    price: 2.00   },
    };
    return plans[plan];
  }

  async createCheckoutSession(userId: string, dto: CreateCheckoutDto, frontendUrl: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('Usuário não encontrado.');
    if (user.plan === 'pro') throw new BadRequestException('Você já é PRO.');

    const planDetails = this.getPlanDetails(dto.plan);
    if (!planDetails) throw new BadRequestException('Plano inválido.');

    const backendUrl  = this.config.get<string>('BACKEND_URL')!;
    const isLocalhost = frontendUrl.includes('localhost');

    const preference = new Preference(this.mp);
    const response = await preference.create({
      body: {
        items: [{
          id:          dto.plan,
          title:       planDetails.title,
          quantity:    1,
          unit_price:  planDetails.price,
          currency_id: 'BRL',
        }],
        payer: { email: user.email, name: user.name },
        back_urls: {
          success: `${frontendUrl}/success`,
          failure: `${frontendUrl}/templates?canceled=true`,
          pending: `${frontendUrl}/success?pending=true`,
        },
        ...(isLocalhost ? {} : { auto_return: 'approved' }),
        notification_url: `${backendUrl}/api/v1/payments/webhook`,
        metadata: { user_id: userId, plan: dto.plan },
      },
    });

    const isSandbox = this.config.get<string>('MP_ACCESS_TOKEN')!.startsWith('TEST-');
    const url = isSandbox ? response.sandbox_init_point : response.init_point;
    return { url };
  }

  async handleWebhook(body: any, xSignature: string, xRequestId: string) {
    const secret = this.config.get<string>('MP_WEBHOOK_SECRET');

    // Valida assinatura se o secret estiver configurado
    if (secret && body?.data?.id && xSignature) {
      const ts = xSignature.match(/ts=([^,]+)/)?.[1];
      const v1 = xSignature.match(/v1=([^,]+)/)?.[1];

      if (ts && v1) {
        const message = `id:${body.data.id};request-id:${xRequestId};ts:${ts};`;
        const hash = crypto.createHmac('sha256', secret).update(message).digest('hex');
        if (hash !== v1) throw new BadRequestException('Webhook inválido.');
      }
    }

    if (body?.type === 'payment' && body?.data?.id) {
      const paymentClient = new Payment(this.mp);
      const payment = await paymentClient.get({ id: body.data.id });

      if (payment.status === 'approved') {
        const meta = payment.metadata as { user_id?: string; plan?: string } | null;
        if (meta?.user_id) {
          await this.prisma.user.update({
            where: { id: meta.user_id },
            data: { plan: 'pro', mpPaymentId: String(payment.id) },
          });
        }
      }
    }

    return { received: true };
  }

  async getPlans() {
    return [
      {
        id: 'monthly',
        name: 'Mensal',
        price: 19.90,
        currency: 'BRL',
        interval: 'month',
        description: 'Acesso a todos os templates por mês',
      },
      {
        id: 'annual',
        name: 'Anual',
        price: 119.00,
        currency: 'BRL',
        interval: 'year',
        description: 'Acesso a todos os templates por um ano — economize 50%',
        badge: 'Mais popular',
      },
      {
        id: 'single',
        name: 'Pagamento Único',
        price: 2.00,
        currency: 'BRL',
        interval: 'once',
        description: 'Acesso completo a todos os templates com pagamento único',
        badge: 'Melhor custo-benefício',
      },
    ];
  }
}
