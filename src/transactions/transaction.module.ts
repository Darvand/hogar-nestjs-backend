import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './schemas/transaction.schema';
import { HogarTransactionController } from './transaction.controller';
import { HogarTransactionRepository } from './transaction.repository';
import { HogarTransactionService } from './transaction.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [HogarTransactionController],
  providers: [HogarTransactionRepository, HogarTransactionService],
})
export class TransactionModule {}
