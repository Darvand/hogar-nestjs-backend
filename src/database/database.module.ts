import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfig } from './database.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [mongoConfig.KEY],
      useFactory: async (configService: ConfigType<typeof mongoConfig>) => {
        const logger = new Logger('MongooseModule');
        logger.log(`Using databasname: ${configService.databaseName}`);
        return {
          uri: configService.connection,
          dbName: configService.databaseName,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
