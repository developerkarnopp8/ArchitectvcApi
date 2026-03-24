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
exports.TemplatesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const TEMPLATES_SEED = [
    { id: 'criativo-01', name: 'Criativo Minimalista', category: 'criativo', isPremium: false, description: 'Layout clean e ousado para profissionais de comunicação.' },
    { id: 'criativo-02', name: 'Criativo Dark', category: 'criativo', isPremium: false, description: 'Visual escuro e vibrante com destaque em neon.' },
    { id: 'executivo-01', name: 'Executivo Profissional', category: 'executivo', isPremium: false, description: 'Sóbrio e elegante para cargos de liderança.' },
    { id: 'executivo-02', name: 'Executivo Moderno', category: 'executivo', isPremium: false, description: 'Destaque azul corporativo com foto e dois painéis.' },
    { id: 'minimalista-01', name: 'Minimalista Claro', category: 'minimalista', isPremium: false, description: 'Cabeçalho em cinza suave com foco no conteúdo.' },
    { id: 'minimalista-02', name: 'Minimalista Elegante', category: 'minimalista', isPremium: false, description: 'Tipografia espaçada e layout refinado.' },
    { id: 'moderno-01', name: 'Moderno Magenta', category: 'moderno', isPremium: false, description: 'Seções marcadas com pontos vibrantes em magenta.' },
    { id: 'moderno-02', name: 'Moderno Geométrico', category: 'moderno', isPremium: false, description: 'Elementos geométricos e linha do tempo de experiências.' },
];
let TemplatesService = class TemplatesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async onModuleInit() {
        await this.seed();
    }
    async seed() {
        for (const t of TEMPLATES_SEED) {
            await this.prisma.template.upsert({
                where: { id: t.id },
                update: { name: t.name, category: t.category, isPremium: t.isPremium, description: t.description },
                create: t,
            });
        }
    }
    findAll(category) {
        return this.prisma.template.findMany({
            where: category ? { category } : undefined,
            orderBy: [{ isPremium: 'asc' }, { category: 'asc' }],
        });
    }
};
exports.TemplatesService = TemplatesService;
exports.TemplatesService = TemplatesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TemplatesService);
//# sourceMappingURL=templates.service.js.map