import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Drug extends Document {
  @Prop()
  drugName: string;

  @Prop()
  price: string;

  @Prop()
  manufacturer: string;

  @Prop()
  expiryDate: string;

  @Prop()
  dosage: string;
}

export const DrugSchema = SchemaFactory.createForClass(Drug);
