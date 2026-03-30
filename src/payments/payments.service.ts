import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    this.stripe = new Stripe(this.config.get<string>('STRIPE_SECRET_KEY')!);
  }

  private getPriceId(plan: CreateCheckoutDto['plan']): string {
    const map: Record<string, string> = {
      monthly: this.config.get<string>('STRIPE_PRICE_MONTHLY')!,
      annual:  this.config.get<string>('STRIPE_PRICE_ANNUAL')!,
      single:  this.config.get<string>('STRIPE_PRICE_SINGLE')!,
      // test:    this.config.get<string>('STRIPE_PRICE_ONE_TEST')!,
    };
    return map[plan];
  }

  async createCheckoutSession(userId: string, dto: CreateCheckoutDto, frontendUrl: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('Usuário não encontrado.');
    if (user.plan === 'pro') throw new BadRequestException('Você já é PRO.');

    const priceId = this.getPriceId(dto.plan);
    const mode = (dto.plan === 'single' || dto.plan === 'test') ? 'payment' : 'subscription';

    let customerId = user.stripeCustomerId ?? undefined;
    if (!customerId) {
      const customer = await this.stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: { userId: user.id },
      });
      customerId = customer.id;
      await this.prisma.user.update({
        where: { id: userId },
        data: { stripeCustomerId: customerId },
      });
    }

    const session = await this.stripe.checkout.sessions.create({
      customer: customerId,
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/templates?canceled=true`,
      metadata: { userId },
    });

    return { url: session.url };
  }

  async handleWebhook(rawBody: Buffer, signature: string) {
    const webhookSecret = this.config.get<string>('STRIPE_WEBHOOK_SECRET')!;
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    } catch {
      throw new BadRequestException('Webhook inválido.');
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        if (!userId) break;

        await this.prisma.user.update({
          where: { id: userId },
          data: {
            plan: 'pro',
            stripeSubscriptionId: session.subscription as string ?? null,
          },
        });
        break;
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        await this.prisma.user.updateMany({
          where: { stripeSubscriptionId: sub.id },
          data: { plan: 'free', stripeSubscriptionId: null },
        });
        break;
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
      {
        id: 'test',
        name: 'Plano Teste',
        price: 0.50,
        currency: 'BRL',
        interval: 'once',
        description: 'Apenas para validação do fluxo de pagamento',
        badge: 'Teste',
      },
    ];
  }
}
