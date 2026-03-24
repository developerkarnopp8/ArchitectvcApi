import { PrismaService } from '../prisma/prisma.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
export declare class ResumesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        templateId: string;
        status: string;
    }[]>;
    findOne(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        templateId: string;
        status: string;
        userId: string;
    }>;
    create(userId: string, dto: CreateResumeDto): import("../../generated/prisma/models").Prisma__ResumeClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        templateId: string;
        status: string;
        userId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, userId: string, dto: UpdateResumeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        templateId: string;
        status: string;
        userId: string;
    }>;
    remove(id: string, userId: string): Promise<{
        message: string;
    }>;
}
