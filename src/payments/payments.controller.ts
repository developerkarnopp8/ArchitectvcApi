import {
  Controller, Post, Get, Body, Headers, Req,
  UseGuards, RawBodyRequest,
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

  @UseGuards(JwtAuthGuard)
  @Post('confirm-session')
  confirmSession(
    @Body('sessionId') sessionId: string,
    @Req() req: Request & { user: { id: string } },
  ) {
    return this.paymentsService.confirmSession(req.user.id, sessionId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('unlocked-templates')
  getUnlockedTemplates(@Req() req: Request & { user: { id: string } }) {
    return this.paymentsService.getUnlockedTemplates(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('consume-unlock')
  consumeUnlock(
    @Body('templateId') templateId: string,
    @Req() req: Request & { user: { id: string } },
  ) {
    return this.paymentsService.consumeUnlock(req.user.id, templateId);
  }

  @Post('webhook')
  async webhook(
    @Headers('stripe-signature') sig: string,
    @Req() req: RawBodyRequest<Request>,
  ) {
    return this.paymentsService.handleWebhook(req.rawBody!, sig);
  }
}
