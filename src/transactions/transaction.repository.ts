import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './schemas/transaction.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HogarTransactionRepository {
  constructor(
    @InjectModel(Transaction.name) private readonly model: Model<Transaction>,
  ) {}

  getAll(): Promise<Transaction[]> {
    return this.model.find();
  }

  create(transaction: Partial<Transaction>): Promise<Transaction> {
    return this.model.create(transaction);
  }
}
