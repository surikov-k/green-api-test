import { IsDateString, IsInt, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

import { SomeObject } from '@green-api-test/shared-types';
import { Field1Length, Field2 } from '../some-module.constants';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSomeObjectDto implements SomeObject {

  @ApiProperty({
    description: 'Field 1',
    example: 'Sit ex laboris ut cillum cillum sit',
  })
  @IsString()
  @MinLength(Field1Length.MIN)
  @MaxLength(Field1Length.MAX)
  field1: string;

  @ApiProperty({
    description: 'Field 2',
    example: 1320,
  })
  @IsInt()
  @Min(Field2.MIN)
  @Max(Field2.MAX)
  field2: number;

  @ApiProperty({
    description: 'Field 3',
    example: '1897-02-14T01:50:52.321Z',
  })
  @IsDateString()
  field3: Date;
}
