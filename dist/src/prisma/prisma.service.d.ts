import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    private readonly client;
    constructor();
    get user(): import("../../generated/prisma/models").UserDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get resume(): import("../../generated/prisma/models").ResumeDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get template(): import("../../generated/prisma/models").TemplateDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
