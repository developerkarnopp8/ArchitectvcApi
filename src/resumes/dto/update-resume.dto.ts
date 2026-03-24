import { IsString, IsObject, IsOptional } from 'class-validator';

export class UpdateResumeDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  templateId?: string;

  @IsObject()
  @IsOptional()
  data?: Record<string, any>;

  @IsString()
  @IsOptional()
  status?: string;
}
