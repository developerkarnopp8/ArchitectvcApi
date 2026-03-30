import { IsIn } from 'class-validator';

export class CreateCheckoutDto {
  @IsIn(['monthly', 'annual', 'single'])
  plan: 'monthly' | 'annual' | 'single';
}
