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
    return this.model.find().sort({ created_at: -1 });
  }

  create(transaction: Partial<Transaction>): Promise<Transaction> {
    return this.model.create(transaction);
  }

  async deleteById(id: string): Promise<boolean> {
    const result = await this.model.deleteOne({ _id: id });
    return result.acknowledged;
  }
}
