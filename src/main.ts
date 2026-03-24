import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS — permite chamadas do Angular (dev + prod)
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'http://localhost:4201',
      process.env.FRONTEND_URL,
    ].filter(Boolean) as string[],
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
