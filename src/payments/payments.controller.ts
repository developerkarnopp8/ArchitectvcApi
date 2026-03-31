import {
  Controller, Post, Get, Body, Headers,
  UseGuards, Req,
} from '@nestjs/common';
import { Request } from 'express';
import { PaymentsService } from './payments.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get('plans')
  getPlans() {
    return this.paymentsService.getPlans();
  }

  @UseGuards(JwtAuthGuard)
  @Post('checkout')
  createCheckout(
    @Body() dto: CreateCheckoutDto,
    @Req() req: Request & { user: { id: string } },
  ) {
    const frontendUrl = process.env['FRONTEND_URL'] ?? 'http://localhost:4200';
    return this.paymentsService.createCheckoutSession(req.user.id, dto, frontendUrl);
  }

  @Post('webhook')
  async webhook(
    @Body() body: any,
    @Headers('x-signature') sig: string,
    @Headers('x-request-id') requestId: string,
  ) {
    return this.paymentsService.handleWebhook(body, sig, requestId);
  }
}
