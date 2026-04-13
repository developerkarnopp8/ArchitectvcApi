import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });

  // CORS — permite chamadas do Angular (dev + prod)
  const allowedOrigins = [
    /^http:\/\/localhost:\d+$/,           // qualquer porta localhost
    process.env.FRONTEND_URL,             // domínio principal de produção
    process.env.FRONTEND_URL_WWW,         // www do domínio (opcional)
  ].filter(Boolean);

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // server-to-server
      const allowed = allowedOrigins.some(o =>
        o instanceof RegExp ? o.test(origin) : o === origin
      );
      callback(allowed ? null : new Error('Not allowed by CORS'), allowed);
    },
    credentials: true,
  });

  // Validação global via class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,      // remove campos não declarados no DTO
      forbidNonWhitelisted: true,
      transform: true,      // converte tipos automaticamente
    }),
  );

  // Prefixo global: /api/v1/...
  app.setGlobalPrefix('api/v1');

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Architect CV API rodando em http://localhost:${port}/api/v1`);
}
bootstrap();
