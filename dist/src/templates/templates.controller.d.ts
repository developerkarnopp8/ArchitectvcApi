import { TemplatesService } from './templates.service';
export declare class TemplatesController {
    private templates;
    constructor(templates: TemplatesService);
    findAll(category?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        category: string;
        isPremium: boolean;
        description: string;
    }[]>;
}
