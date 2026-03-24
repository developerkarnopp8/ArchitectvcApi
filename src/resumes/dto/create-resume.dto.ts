import { IsString, IsObject, IsOptional, MinLength } from 'class-validator';

export class CreateResumeDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  templateId: string;

  @IsObject()
  data: Record<string, any>;

  @IsString()
  @IsOptional()
  status?: string;
}
