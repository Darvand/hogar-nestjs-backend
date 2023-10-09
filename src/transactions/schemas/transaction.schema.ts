import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export enum PaymentMethodEnum {
  SaveAccount = 'save_account',
  CreditCard = 'credit_card',
  Cash = 'cash',
}

export enum TypeEnum {
  Basic = 'basic',
  Luxury = 'luxury',
}

export enum CategoryEnum {
  HouseFood = 'house_food',
  FastFood = 'fast_food',
  CleanProducts = 'clean_products',
  CatProducts = 'cat_products',
  VideoGames = 'video_games',
  Subscriptions = 'subscriptions',
  HouseProducts = 'house_products',
  Motorcycle = 'motorcycle',
}

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  _id: ObjectId;

  @Prop()
  title: string;

  @Prop()
  store: string;

  @Prop()
  date: string;

  @Prop()
  value: number;

  @Prop()
  paymentMethod: PaymentMethodEnum;

  @Prop()
  type: TypeEnum;

  @Prop()
  category: CategoryEnum;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  created_at: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
