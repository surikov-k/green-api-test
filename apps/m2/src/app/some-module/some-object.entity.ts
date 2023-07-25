import { SomeObject } from '@green-api-test/shared-types';

export class SomeObjectEntity implements SomeObject {
  _id: string;
  field1: string;
  field2: number;
  field3: Date;

  constructor(object: SomeObject) {
    this.fillEntity(object);
  }

  public toObject() {
    return { ...this }
  }

  public fillEntity(object: SomeObject) {
    this._id = object._id;
    this.field1 = object.field1;
    this.field2 = object.field2;
    this.field3 = object.field3;
  }
}
