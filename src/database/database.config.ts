import { registerAs } from '@nestjs/config';
import { MongoConfig } from './database.type';
import * as Joi from 'joi';

export const mongoConfig = registerAs('database', (): MongoConfig => {
  const values: MongoConfig = {
    connection: process.env.MONGO_CONNECTION,
    databaseName: process.env.MONGO_DBNAME,
  };

  const schema = Joi.object<MongoConfig, true>({
    connection: Joi.string().required(),
    databaseName: Joi.string().required(),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    const messageError = `Validation failed - Is there a Mongo environment variable missing?
      ${error.message}`;

    throw new Error(messageError);
  }

  return values;
});
