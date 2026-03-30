"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const stripe_1 = __importDefault(require("stripe"));
const prisma_service_1 = require("../prisma/prisma.service");
let PaymentsService = class PaymentsService {
    prisma;
    config;
    stripe;
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
        this.stripe = new stripe_1.default(this.config.get('STRIPE_SECRET_KEY'));
    }
    getPriceId(plan) {
        const map = {
            monthly: this.config.get('STRIPE_PRICE_MONTHLY'),
            annual: this.config.get('STRIPE_PRICE_ANNUAL'),
            single: this.config.get('STRIPE_PRICE_SINGLE'),
        };
        return map[plan];
    }
    async createCheckoutSession(userId, dto, frontendUrl) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.BadRequestException('Usuário não encontrado.');
        if (user.plan === 'pro')
            throw new common_1.BadRequestException('Você já é PRO.');
        const priceId = this.getPriceId(dto.plan);
        const mode = dto.plan === 'single' ? 'payment' : 'subscription';
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
    async handleWebhook(rawBody, signature) {
        const webhookSecret = this.config.get('STRIPE_WEBHOOK_SECRET');
        let event;
        try {
            event = this.stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
        }
        catch {
            throw new common_1.BadRequestException('Webhook inválido.');
        }
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                const userId = session.metadata?.userId;
                if (!userId)
                    break;
                await this.prisma.user.update({
                    where: { id: userId },
                    data: {
                        plan: 'pro',
                        stripeSubscriptionId: session.subscription ?? null,
                    },
                });
                break;
            }
            case 'customer.subscription.deleted': {
                const sub = event.data.object;
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
                name: 'Vitalício',
                price: 299.00,
                currency: 'BRL',
                interval: 'once',
                description: 'Acesso vitalício a todos os templates',
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