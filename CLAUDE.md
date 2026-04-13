# CLAUDE.md — Architect CV API (Backend)

> **OBRIGATÓRIO:** Este arquivo deve ser atualizado sempre que houver alteração estrutural no projeto (novos módulos, endpoints, modelos Prisma, variáveis de ambiente, regras de negócio) e commitado junto com a alteração.

---

## Visão Geral

**Produto:** API REST do SaaS Architect CV  
**Stack:** NestJS, Prisma ORM, PostgreSQL, Stripe, JWT  
**URL Produção:** https://api.architectvc.aevon.online/api/v1  
**Repositório:** `/home/gustavo-karnopp/cvCreate/architect-cv-api`  
**Gerenciador de processos (VPS):** PM2

---

## Comandos Essenciais

```bash
npm run start:dev          # dev com watch → localhost:3000
npm run build              # compila para dist/
npm run start:prod         # inicia compilado

# Prisma
npx prisma db push         # sincroniza schema com o banco (sem migrations)
npx prisma studio          # GUI do banco
```

**Deploy produção (VPS):**
```bash
# 1. Subir novo código e buildar
npm run build

# 2. Copiar .env.production como .env e reiniciar PM2
pm2 restart architect-cv-api --update-env
```

---

## Variáveis de Ambiente

| Variável                | Descrição                                     |
|-------------------------|-----------------------------------------------|
| `DATABASE_URL`          | PostgreSQL connection string                  |
| `JWT_SECRET`            | Chave secreta JWT (mín. 32 chars)             |
| `JWT_EXPIRES_IN`        | Expiração do token (ex: `7d`)                 |
| `PORT`                  | Porta da API (padrão: 3000)                   |
| `FRONTEND_URL`          | https://architectvc.aevon.online              |
| `FRONTEND_URL_WWW`      | https://www.architectvc.aevon.online          |
| `STRIPE_SECRET_KEY`     | `sk_live_...` ou `sk_test_...`                |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` do Stripe Dashboard               |
| `STRIPE_PRICE_MONTHLY`  | price_... do plano mensal (live)              |
| `STRIPE_PRICE_ANNUAL`   | price_... do plano anual (live)               |
| `STRIPE_PRICE_SINGLE`   | price_... do template único (live)            |

**Arquivos:** `.env` (dev) e `.env.production` (VPS) — ambos no `.gitignore`.

---

## Estrutura de Arquivos

```
src/
├── main.ts                        # Bootstrap NestJS — CORS, ValidationPipe, prefixo /api/v1
├── app.module.ts                  # Módulo raiz — importa todos os módulos
├── prisma/
│   ├── prisma.module.ts           # PrismaModule global
│   └── prisma.service.ts          # PrismaClient singleton
├── auth/
│   ├── auth.module.ts
│   ├── auth.controller.ts         # POST /auth/register, POST /auth/login, GET /auth/me
│   ├── auth.service.ts            # Cria usuário, valida senha, gera JWT
│   ├── strategies/
│   │   └── jwt.strategy.ts        # Extrai userId do token
│   ├── guards/
│   │   └── jwt-auth.guard.ts      # @UseGuards(JwtAuthGuard) — protege rotas
│   └── dto/
│       ├── login.dto.ts
│       └── register.dto.ts
├── resumes/
│   ├── resumes.module.ts
│   ├── resumes.controller.ts      # CRUD /resumes — todas rotas protegidas
│   ├── resumes.service.ts         # findAll, findOne, create, update, remove
│   └── dto/
│       ├── create-resume.dto.ts   # title?, templateId, data, status?
│       └── update-resume.dto.ts   # todos opcionais
├── templates/
│   ├── templates.module.ts
│   ├── templates.controller.ts    # GET /templates, GET /templates/:id
│   └── templates.service.ts       # Consulta tabela Template no banco
└── payments/
    ├── payments.module.ts
    ├── payments.controller.ts     # Endpoints de pagamento (ver abaixo)
    ├── payments.service.ts        # Lógica Stripe + unlock
    └── dto/
        └── create-checkout.dto.ts # plan, templateId?
```

---

## Endpoints

### Auth — `/api/v1/auth`

| Método | Path        | Guard | Descrição                        |
|--------|-------------|-------|----------------------------------|
| POST   | `/register` | —     | Cria conta, retorna `{ user, accessToken }` |
| POST   | `/login`    | —     | Autentica, retorna `{ user, accessToken }` |
| GET    | `/me`       | JWT   | Retorna usuário autenticado      |

### Resumes — `/api/v1/resumes`

| Método | Path    | Guard | Descrição                        |
|--------|---------|-------|----------------------------------|
| GET    | `/`     | JWT   | Lista currículos do usuário      |
| GET    | `/:id`  | JWT   | Busca currículo por ID           |
| POST   | `/`     | JWT   | Cria novo currículo              |
| PATCH  | `/:id`  | JWT   | Atualiza currículo               |
| DELETE | `/:id`  | JWT   | Remove currículo                 |

### Templates — `/api/v1/templates`

| Método | Path    | Guard | Descrição             |
|--------|---------|-------|-----------------------|
| GET    | `/`     | —     | Lista todos templates |
| GET    | `/:id`  | —     | Busca template por ID |

### Payments — `/api/v1/payments`

| Método | Path                    | Guard | Descrição                                         |
|--------|-------------------------|-------|---------------------------------------------------|
| GET    | `/plans`                | —     | Retorna lista de planos com preços do Stripe       |
| POST   | `/checkout`             | JWT   | Cria Stripe Checkout Session — `{ plan, templateId? }` |
| POST   | `/confirm-session`      | JWT   | Confirma sessão Stripe — `{ sessionId }`          |
| GET    | `/unlocked-templates`   | JWT   | Lista templateIds desbloqueados pelo usuário      |
| POST   | `/consume-unlock`       | JWT   | Marca unlock como usado — `{ templateId }`        |
| POST   | `/webhook`              | —     | Webhook Stripe (raw body, valida assinatura)       |

---

## Banco de Dados (Prisma Schema)

### `User`
| Campo                 | Tipo      | Descrição                        |
|-----------------------|-----------|----------------------------------|
| `id`                  | cuid      | PK                               |
| `name`                | String    |                                  |
| `email`               | String    | único                            |
| `password`            | String    | hash bcrypt                      |
| `plan`                | String    | `"free"` \| `"pro"`              |
| `stripeCustomerId`    | String?   | único                            |
| `stripeSubscriptionId`| String?   |                                  |
| `createdAt/updatedAt` | DateTime  |                                  |

### `Resume`
| Campo       | Tipo     | Descrição                           |
|-------------|----------|-------------------------------------|
| `id`        | cuid     | PK                                  |
| `title`     | String   | padrão `"Meu Currículo"`            |
| `templateId`| String   | FK para Template                    |
| `data`      | Json     | ResumeData completo                 |
| `status`    | String   | `"draft"` \| `"complete"`           |
| `userId`    | String   | FK para User (cascade delete)       |

### `Template`
| Campo       | Tipo     | Descrição                           |
|-------------|----------|-------------------------------------|
| `id`        | String   | PK (ex: `"moderno-01"`)             |
| `name`      | String   |                                     |
| `category`  | String   | moderno / criativo / executivo / minimalista |
| `isPremium` | Boolean  |                                     |
| `description`| String  |                                     |

### `TemplateUnlock`
| Campo       | Tipo     | Descrição                            |
|-------------|----------|--------------------------------------|
| `id`        | cuid     | PK                                   |
| `userId`    | String   | FK User (cascade)                    |
| `templateId`| String   | ID do template desbloqueado          |
| `downloaded`| Boolean  | `false` até consumir o unlock        |
| @@unique    |          | `[userId, templateId]`               |

---

## Regras de Negócio

### Planos
| Plano     | PlanId     | Preço     | Acesso                                      |
|-----------|------------|-----------|---------------------------------------------|
| Gratuito  | —          | R$ 0      | Apenas templates `isPremium: false`         |
| Mensal    | `monthly`  | R$ 19,90  | Todos os templates (`plan = "pro"`)         |
| Anual     | `annual`   | R$ 119,00 | Todos os templates (`plan = "pro"`)         |
| Único     | `single`   | R$ 2,00   | 1 template específico (cria TemplateUnlock) |

### Validações do Checkout
- Plano `single` **obrigatoriamente** requer `templateId`
- Planos `monthly`/`annual` bloqueados se usuário já é `pro`
- Webhook valida assinatura Stripe com `STRIPE_WEBHOOK_SECRET`

### Templates Premium
- `ResumesService.create()` verifica se template é premium → bloqueia se `user.plan !== 'pro'` **e** não há `TemplateUnlock`
- `PaymentsService.consumeUnlock()` marca `downloaded: true`

---

## CORS

Configurado em `main.ts`. Origens permitidas:
- `http://localhost:*` (qualquer porta)
- `process.env.FRONTEND_URL`
- `process.env.FRONTEND_URL_WWW`

---

## Produção (VPS)

- **Servidor:** 187.77.253.78
- **OS:** Ubuntu (nginx/1.24.0)
- **PM2 app name:** `architect-cv-api`
- **Nginx frontend:** `/var/www/architectvc/` → domínio `architectvc.aevon.online`
- **Nginx API:** proxy para porta 3000 → subdomínio `api.architectvc.aevon.online`
- **SSL:** Let's Encrypt (Certbot) — apenas `architectvc.aevon.online` (sem www)
- **PostgreSQL:** local, banco `architect_cv_prod`, usuário `architect_user`
- **Prisma:** `npx prisma db push` (sem pasta migrations — usa push direto)

---

## Regras de Desenvolvimento

- Sempre usar `@UseGuards(JwtAuthGuard)` em rotas que precisam de autenticação
- `ValidationPipe` global com `whitelist: true` e `forbidNonWhitelisted: true`
- Novos modelos Prisma → rodar `npx prisma db push` + atualizar este CLAUDE.md
- Novos endpoints → documentar na tabela de endpoints deste arquivo
- Novas variáveis de ambiente → documentar na tabela de variáveis deste arquivo
- Webhook Stripe usa `rawBody: true` no NestFactory — não remover
- `STRIPE_PRICE_*` são IDs do modo **live** — para testes usar `.env` com chaves `test`
