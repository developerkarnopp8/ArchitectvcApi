"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mercadopago_1 = require("mercadopago");
const crypto = __importStar(require("crypto"));
const prisma_service_1 = require("../prisma/prisma.service");
let PaymentsService = class PaymentsService {
    prisma;
    config;
    mp;
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
        this.mp = new mercadopago_1.MercadoPagoConfig({
            accessToken: this.config.get('MP_ACCESS_TOKEN'),
        });
    }
    getPlanDetails(plan) {
        const plans = {
            monthly: { title: 'Plano Mensal', price: 19.90 },
            annual: { title: 'Plano Anual', price: 119.00 },
            single: { title: 'Pagamento Único', price: 2.00 },
        };
        return plans[plan];
    }
    async createCheckoutSession(userId, dto, frontendUrl) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.BadRequestException('Usuário não encontrado.');
        if (user.plan === 'pro')
            throw new common_1.BadRequestException('Você já é PRO.');
        const planDetails = this.getPlanDetails(dto.plan);
        if (!planDetails)
            throw new common_1.BadRequestException('Plano inválido.');
        const backendUrl = this.config.get('BACKEND_URL');
        const isLocalhost = frontendUrl.includes('localhost');
        const preference = new mercadopago_1.Preference(this.mp);
        const response = await preference.create({
            body: {
                items: [{
                        id: dto.plan,
                        title: planDetails.title,
                        quantity: 1,
                        unit_price: planDetails.price,
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
        const isSandbox = this.config.get('MP_ACCESS_TOKEN').startsWith('TEST-');
        const url = isSandbox ? response.sandbox_init_point : response.init_point;
        return { url };
    }
    async handleWebhook(body, xSignature, xRequestId) {
        const secret = this.config.get('MP_WEBHOOK_SECRET');
        if (secret && body?.data?.id && xSignature) {
            const ts = xSignature.match(/ts=([^,]+)/)?.[1];
            const v1 = xSignature.match(/v1=([^,]+)/)?.[1];
            if (ts && v1) {
                const message = `id:${body.data.id};request-id:${xRequestId};ts:${ts};`;
                const hash = crypto.createHmac('sha256', secret).update(message).digest('hex');
                if (hash !== v1)
                    throw new common_1.BadRequestException('Webhook inválido.');
            }
        }
        if (body?.type === 'payment' && body?.data?.id) {
            const paymentClient = new mercadopago_1.Payment(this.mp);
            const payment = await paymentClient.get({ id: body.data.id });
            if (payment.status === 'approved') {
                const meta = payment.metadata;
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
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map