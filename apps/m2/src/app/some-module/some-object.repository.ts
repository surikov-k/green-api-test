import { CRUDRepository, SomeObject } from '@green-api-test/shared-types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SomeObjectModel } from './some-object.model';
import { SomeObjectEntity } from './some-object.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SomeObjectRepository implements CRUDRepository<SomeObjectEntity, string, SomeObject> {
  constructor(
    @InjectModel(SomeObjectModel.name) private readonly someObjectModel: Model<SomeObjectModel>,
  ) {}

  create(entity: SomeObjectEntity): Promise<SomeObject> {
    const someObject = new this.someObjectModel(entity);
    return someObject.save();
  }

  destroy(id: string): void {
     this.someObjectModel.deleteOne({ id })
  }

  findById(id: string): Promise<SomeObject | null> {
    return this.someObjectModel.findOne({_id: id}).lean();
  }

  update(id: string, entity: SomeObjectEntity): Promise<SomeObject> {
    return this.someObjectModel
      .findByIdAndUpdate(id, entity.toObject(), {new: true});
  }

  public async findAll(): Promise<SomeObject[] | null> {
    return this.someObjectModel.find().exec();
  }
}
