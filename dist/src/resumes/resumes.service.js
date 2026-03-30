"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ResumesService = class ResumesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(userId) {
        return this.prisma.resume.findMany({
            where: { userId },
            orderBy: { updatedAt: 'desc' },
            select: {
                id: true,
                title: true,
                templateId: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async findOne(id, userId) {
        const resume = await this.prisma.resume.findUnique({ where: { id } });
        if (!resume)
            throw new common_1.NotFoundException('Currículo não encontrado.');
        if (resume.userId !== userId)
            throw new common_1.ForbiddenException();
        return resume;
    }
    async create(userId, dto) {
        const template = await this.prisma.template.findUnique({ where: { id: dto.templateId } });
        if (template?.isPremium) {
            const user = await this.prisma.user.findUnique({ where: { id: userId } });
            if (user?.plan !== 'pro')
                throw new common_1.ForbiddenException('Este template é exclusivo para assinantes PRO.');
        }
        return this.prisma.resume.create({
            data: {
                title: dto.title ?? 'Meu Currículo',
                templateId: dto.templateId,
                data: dto.data,
                status: dto.status ?? 'draft',
                userId,
            },
        });
    }
    async update(id, userId, dto) {
        await this.findOne(id, userId);
        return this.prisma.resume.update({
            where: { id },
            data: { ...dto },
        });
    }
    async remove(id, userId) {
        await this.findOne(id, userId);
        await this.prisma.resume.delete({ where: { id } });
        return { message: 'Currículo removido com sucesso.' };
    }
};
exports.ResumesService = ResumesService;
exports.ResumesService = ResumesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ResumesService);
//# sourceMappingURL=resumes.service.js.map