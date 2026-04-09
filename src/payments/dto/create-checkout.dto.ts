import { IsIn, IsOptional, IsString } from 'class-validator';

export class CreateCheckoutDto {
  @IsIn(['monthly', 'annual', 'single', 'test'])
  plan: 'monthly' | 'annual' | 'single' | 'test';

  @IsOptional()
  @IsString()
  templateId?: string;
}
