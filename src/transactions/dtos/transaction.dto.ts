import { CategoryEnum, TypeEnum } from '../schemas/transaction.schema';

export class TransactionDTO {
  id: string;
  title: string;
  store: string;
  formattedValue: string;
  formattedDate: string;
  value: number;
  type: TypeEnum;
  categoryIcon: string;
  category: CategoryEnum;
}
