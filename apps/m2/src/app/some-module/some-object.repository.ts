import { CRUDRepository, SomeObject } from '@green-api-test/shared-types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SomeObjectModel } from './some-object.model';
import { SomeObjectEntity } from './some-object.entity';

export class SomeObjectRepository implements CRUDRepository<SomeObjectEntity, string, SomeObject> {
  constructor(
    @InjectModel(SomeObjectModel.name) private readonly someObjectModel: Model<SomeObjectModel>,
  ) {}

  create(item: SomeObjectEntity): Promise<SomeObject> {
    return Promise.resolve(undefined);
  }

  destroy(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById(id: string): Promise<SomeObject | null> {
    return Promise.resolve(undefined);
  }

  update(id: string, item: SomeObjectEntity): Promise<SomeObject> {
    return Promise.resolve(undefined);
  }
}
