import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
export declare class PaymentsService {
    private prisma;
    private config;
    private mp;
    constructor(prisma: PrismaService, config: ConfigService);
    private getPlanDetails;
    createCheckoutSession(userId: string, dto: CreateCheckoutDto, frontendUrl: string): Promise<{
        url: string | undefined;
    }>;
    handleWebhook(body: any, xSignature: string, xRequestId: string): Promise<{
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
