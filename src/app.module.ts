import { Module } from '@nestjs/common';
import { TransactionModule } from './transactions/transaction.module';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from './database/database.config';

@Module({
  imports: [
    TransactionModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig],
    }),
  ],
})
export class AppModule {}
