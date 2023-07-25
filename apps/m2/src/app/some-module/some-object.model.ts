import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { SomeObject } from '@green-api-test/shared-types';

@Schema({
  collection: 'users',
})
export class SomeObjectModel extends Document implements SomeObject {
  @Prop({required: true})
  field1: string;

  @Prop({required: true})
  field2: number;

  @Prop({required: true})
  field3: Date;
}

export const SomeObjectSchema = SchemaFactory.createForClass(SomeObjectModel);
