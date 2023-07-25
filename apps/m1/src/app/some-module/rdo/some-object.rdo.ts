import { Expose, Transform } from 'class-transformer';

export class SomeObjectRdo {
  @Expose({name: '_id'})
  @Transform(({obj}) => obj._id.toString())
  public id: string;

  @Expose()
  public field1: string;

  @Expose()
  public field2: number;

  @Expose()
  public field3: string;
}
