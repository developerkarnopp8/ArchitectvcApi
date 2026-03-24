import { Controller, Get, Query } from '@nestjs/common';
import { TemplatesService } from './templates.service';

@Controller('templates')
export class TemplatesController {
  constructor(private templates: TemplatesService) {}

  @Get()
  findAll(@Query('category') category?: string) {
    return this.templates.findAll(category);
  }
}
