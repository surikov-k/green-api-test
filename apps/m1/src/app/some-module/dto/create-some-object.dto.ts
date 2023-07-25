import { IsDateString, IsInt, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

import { SomeObject } from '@green-api-test/shared-types';
import { Field1Length, Field2 } from '../some-module.constants';

export class CreateSomeObjectDto implements SomeObject {
  @IsString()
  @MinLength(Field1Length.MIN)
  @MaxLength(Field1Length.MAX)
  field1: string;

  @IsInt()
  @Min(Field2.MIN)
  @Max(Field2.MAX)
  field2: number;

  @IsDateString()
  field3: Date;
}
