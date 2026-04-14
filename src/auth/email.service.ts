import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendPasswordReset(to: string, name: string, resetUrl: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: `"Architect CV" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
        to,
        subject: 'Redefinição de senha — Architect CV',
        html: `
          <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f9f9f9">
            <h2 style="color:#1A1A2E;margin-bottom:8px">Olá, ${name}</h2>
            <p style="color:#555;line-height:1.6">
              Recebemos uma solicitação para redefinir a senha da sua conta no <strong>Architect CV</strong>.
            </p>
            <p style="color:#555;line-height:1.6">
              Clique no botão abaixo para criar uma nova senha. O link é válido por <strong>1 hora</strong>.
            </p>
            <div style="text-align:center;margin:32px 0">
              <a href="${resetUrl}"
                 style="background:#C9A84C;color:#1A1A2E;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:bold;font-size:15px">
                Redefinir Senha
              </a>
            </div>
            <p style="color:#999;font-size:12px;line-height:1.6">
              Se você não solicitou a redefinição, ignore este e-mail. Sua senha permanece a mesma.
            </p>
            <hr style="border:none;border-top:1px solid #E0E0E0;margin:24px 0">
            <p style="color:#bbb;font-size:11px;text-align:center">Architect CV · ${process.env.FRONTEND_URL}</p>
          </div>
        `,
      });
    } catch (err) {
      this.logger.error('Erro ao enviar e-mail de reset', err);
      throw err;
    }
  }
}
