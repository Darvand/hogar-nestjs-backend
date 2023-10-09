import { Module } from '@nestjs/common';
import { TransactionModule } from './transactions/transaction.module';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from './database/database.config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    TransactionModule,
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig],
    }),
  ],
})
export class AppModule {}
