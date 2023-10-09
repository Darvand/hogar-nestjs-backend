import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfig } from './database.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [mongoConfig.KEY],
      useFactory: async (configService: ConfigType<typeof mongoConfig>) => ({
        uri: configService.connection,
        dbName: configService.databaseName,
      }),
    }),
  ],
})
export class DatabaseModule {}
