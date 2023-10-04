import { DateTime } from 'luxon';

import { CreateTransactionDTO } from './dtos/create-transaction.dto';
import { GetAllTransactionsDTO } from './dtos/get-all-transactions.dto';
import { TransactionDTO } from './dtos/transaction.dto';
import {
  CategoryEnum,
  PaymentMethodEnum,
  Transaction,
} from './schemas/transaction.schema';
import { HogarTransactionRepository } from './transaction.repository';
import { CurrencyUtil } from './utils/currency.util';
import { Injectable, Logger } from '@nestjs/common';

const categoryIcon: Record<CategoryEnum, string> = {
  [CategoryEnum.HouseFood]: 'local-grocery-store',
  [CategoryEnum.CatProducts]: 'pets',
  [CategoryEnum.CleanProducts]: 'cleaning-services',
  [CategoryEnum.FastFood]: 'fastfood',
  [CategoryEnum.HouseProducts]: 'tv',
  [CategoryEnum.Motorcycle]: 'motorcycle',
  [CategoryEnum.Subscriptions]: 'subscriptions',
  [CategoryEnum.VideoGames]: 'videogame-asset',
};

@Injectable()
export class HogarTransactionService {
  private readonly logger = new Logger(HogarTransactionService.name);
  constructor(private readonly repository: HogarTransactionRepository) {}

  private toTransactionsDTO(transaction: Transaction): TransactionDTO {
    return {
      id: transaction._id.toString(),
      categoryIcon: categoryIcon[transaction.category],
      formattedDate: DateTime.fromISO(transaction.date).toFormat('LLL dd'),
      formattedValue: CurrencyUtil.toCOP(transaction.value * -1),
      store: transaction.store,
      title: transaction.title,
      type: transaction.type,
      value: transaction.value,
      category: transaction.category,
    };
  }

  async getAll(): Promise<GetAllTransactionsDTO> {
    const transactions = await this.repository.getAll();
    return {
      stores: Array.from(new Set(transactions.map((t) => t.store))),
      paymentMethods: Object.values(PaymentMethodEnum),
      transactions: transactions.map(this.toTransactionsDTO),
    };
  }

  async create(transaction: CreateTransactionDTO): Promise<TransactionDTO> {
    this.logger.debug('Creating transaction');
    const transactionResponse = await this.repository.create({
      ...transaction,
    });
    this.logger.debug('Transaction successfull created', transactionResponse);
    return this.toTransactionsDTO(transactionResponse);
  }
}
