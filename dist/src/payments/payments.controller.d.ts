import { RawBodyRequest } from '@nestjs/common';
import { Request } from 'express';
import { PaymentsService } from './payments.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
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
    createCheckout(dto: CreateCheckoutDto, req: Request & {
        user: {
            id: string;
        };
    }): Promise<{
        url: string | null;
    }>;
    webhook(sig: string, req: RawBodyRequest<Request>): Promise<{
        received: boolean;
    }>;
}
