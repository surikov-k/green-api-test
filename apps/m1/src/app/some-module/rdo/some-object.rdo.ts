import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SomeObjectRdo {
  @ApiProperty({
    description: 'Object id',
    example: '64131f325d6cbe769dc46ebd',
  })
  @Expose({ name: '_id' })
  @Transform(({ obj }) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'Field 1',
    example: 'Sit ex laboris ut cillum cillum sit',
  })
  @Expose()
  public field1: string;

  @ApiProperty({
    description: 'Field 2',
    example: 1320,
  })
  @Expose()
  public field2: number;

  @ApiProperty({
    description: 'Field 3',
    example: '1897-02-14T01:50:52.321Z',
  })
  @Expose()
  public field3: string;
}
