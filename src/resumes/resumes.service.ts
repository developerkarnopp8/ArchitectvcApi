import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Injectable()
export class ResumesService {
  constructor(private prisma: PrismaService) {}

  findAll(userId: string) {
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

  async findOne(id: string, userId: string) {
    const resume = await this.prisma.resume.findUnique({ where: { id } });
    if (!resume) throw new NotFoundException('Currículo não encontrado.');
    if (resume.userId !== userId) throw new ForbiddenException();
    return resume;
  }

  create(userId: string, dto: CreateResumeDto) {
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

  async update(id: string, userId: string, dto: UpdateResumeDto) {
    await this.findOne(id, userId);
    return this.prisma.resume.update({
      where: { id },
      data: { ...dto },
    });
  }

  async remove(id: string, userId: string) {
    await this.findOne(id, userId);
    await this.prisma.resume.delete({ where: { id } });
    return { message: 'Currículo removido com sucesso.' };
  }
}
