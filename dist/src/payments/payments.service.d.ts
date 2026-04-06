import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
export declare class PaymentsService {
    private prisma;
    private config;
    private stripe;
    constructor(prisma: PrismaService, config: ConfigService);
    private getPriceId;
    createCheckoutSession(userId: string, dto: CreateCheckoutDto, frontendUrl: string): Promise<{
        url: string | null;
    }>;
    confirmSession(userId: string, sessionId: string): Promise<{
        confirmed: boolean;
        plan?: undefined;
        templateId?: undefined;
    } | {
        confirmed: boolean;
        plan: string;
        templateId: string;
    }>;
    getUnlockedTemplates(userId: string): Promise<string[]>;
    consumeUnlock(userId: string, templateId: string): Promise<{
        consumed: boolean;
    }>;
    handleWebhook(rawBody: Buffer, signature: string): Promise<{
        received: boolean;
    }>;
    getPlans(): Promise<({
        id: string;
        name: string;
        price: number;
        currency: string;
        interval: string;
        description: string;
        badge?: undefined;
    } | {
        id: string;
        name: string;
        price: number;
        currency: string;
        interval: string;
        description: string;
        badge: string;
    })[]>;
}
