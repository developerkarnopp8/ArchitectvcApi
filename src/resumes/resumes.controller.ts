import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Request } from 'express';

interface AuthRequest extends Request {
  user: { id: string; email: string; name: string; plan: string };
}

@UseGuards(JwtAuthGuard)
@Controller('resumes')
export class ResumesController {
  constructor(private resumes: ResumesService) {}

  @Get()
  findAll(@Req() req: AuthRequest) {
    return this.resumes.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: AuthRequest) {
    return this.resumes.findOne(id, req.user.id);
  }

  @Post()
  create(@Body() dto: CreateResumeDto, @Req() req: AuthRequest) {
    return this.resumes.create(req.user.id, dto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateResumeDto,
    @Req() req: AuthRequest,
  ) {
    return this.resumes.update(id, req.user.id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: AuthRequest) {
    return this.resumes.remove(id, req.user.id);
  }
}
