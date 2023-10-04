import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import {
  CategoryEnum,
  PaymentMethodEnum,
  TypeEnum,
} from '../schemas/transaction.schema';

export class CreateTransactionDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  store: string;

  @IsDateString()
  date: string;

  @IsNumber()
  @IsPositive()
  value: number;

  @IsString()
  @IsEnum(PaymentMethodEnum)
  paymentMethod: PaymentMethodEnum;

  @IsString()
  @IsEnum(TypeEnum)
  type: TypeEnum;

  @IsString()
  @IsEnum(CategoryEnum)
  category: CategoryEnum;

  @IsString()
  @IsOptional()
  description?: string;
}
