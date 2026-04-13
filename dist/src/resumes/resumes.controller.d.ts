import { ResumesService } from './resumes.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Request } from 'express';
interface AuthRequest extends Request {
    user: {
        id: string;
        email: string;
        name: string;
        plan: string;
    };
}
export declare class ResumesController {
    private resumes;
    constructor(resumes: ResumesService);
    findAll(req: AuthRequest): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        templateId: string;
        status: string;
    }[]>;
    findOne(id: string, req: AuthRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        templateId: string;
        status: string;
        userId: string;
    }>;
    create(dto: CreateResumeDto, req: AuthRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        templateId: string;
        status: string;
        userId: string;
    }>;
    update(id: string, dto: UpdateResumeDto, req: AuthRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        templateId: string;
        status: string;
        userId: string;
    }>;
    remove(id: string, req: AuthRequest): Promise<{
        message: string;
    }>;
}
export {};
