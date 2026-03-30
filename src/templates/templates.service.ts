import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const TEMPLATES_SEED = [
  { id: 'criativo-01',    name: 'Criativo Minimalista',   category: 'criativo',    isPremium: false, description: 'Layout clean e ousado para profissionais de comunicação.' },
  { id: 'criativo-02',    name: 'Criativo Dark',           category: 'criativo',    isPremium: true,  description: 'Visual escuro e vibrante com destaque em neon.' },
  { id: 'executivo-01',   name: 'Executivo Profissional',  category: 'executivo',   isPremium: true,  description: 'Sóbrio e elegante para cargos de liderança.' },
  { id: 'executivo-02',   name: 'Executivo Moderno',       category: 'executivo',   isPremium: true,  description: 'Destaque azul corporativo com foto e dois painéis.' },
  { id: 'minimalista-01', name: 'Minimalista Claro',       category: 'minimalista', isPremium: true,  description: 'Cabeçalho em cinza suave com foco no conteúdo.' },
  { id: 'minimalista-02', name: 'Minimalista Elegante',    category: 'minimalista', isPremium: true,  description: 'Tipografia espaçada e layout refinado.' },
  { id: 'moderno-01',     name: 'Moderno Magenta',         category: 'moderno',     isPremium: true,  description: 'Seções marcadas com pontos vibrantes em magenta.' },
  { id: 'moderno-02',     name: 'Moderno Geométrico',      category: 'moderno',     isPremium: true,  description: 'Elementos geométricos e linha do tempo de experiências.' },
];

@Injectable()
export class TemplatesService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  async onModuleInit() {
    await this.seed();
  }

  private async seed() {
    for (const t of TEMPLATES_SEED) {
      await this.prisma.template.upsert({
        where: { id: t.id },
        update: { name: t.name, category: t.category, isPremium: t.isPremium, description: t.description },
        create: t,
      });
    }
  }

  findAll(category?: string) {
    return this.prisma.template.findMany({
      where: category ? { category } : undefined,
      orderBy: [{ isPremium: 'asc' }, { category: 'asc' }],
    });
  }
}
