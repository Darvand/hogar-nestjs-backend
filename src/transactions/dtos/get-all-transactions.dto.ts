import { TransactionDTO } from './transaction.dto';

export class GetAllTransactionsDTO {
  stores: string[];
  paymentMethods: string[];
  transactions: TransactionDTO[];
}
