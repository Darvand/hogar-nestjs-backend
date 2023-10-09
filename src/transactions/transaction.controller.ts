import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { HogarTransactionService } from './transaction.service';
import { CreateTransactionDTO } from './dtos/create-transaction.dto';
import { GetAllTransactionsDTO } from './dtos/get-all-transactions.dto';
import { TransactionDTO } from './dtos/transaction.dto';

@Controller('transactions')
export class HogarTransactionController {
  private readonly logger = new Logger(HogarTransactionController.name);
  constructor(private readonly service: HogarTransactionService) {}

  @Get()
  getAll(): Promise<GetAllTransactionsDTO> {
    return this.service.getAll();
  }

  @Post()
  create(
    @Body() createTransactionDTO: CreateTransactionDTO,
  ): Promise<TransactionDTO> {
    this.logger.debug(
      'Create transaction request received with payload: ',
      createTransactionDTO,
    );
    return this.service.create(createTransactionDTO);
  }

  @Delete(':transaction_id')
  deleteById(@Param('transaction_id') transactionId: string): Promise<void> {
    return this.service.deleteById(transactionId);
  }
}
