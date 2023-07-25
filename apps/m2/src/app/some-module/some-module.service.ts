import { HttpStatus, Injectable } from '@nestjs/common';
import { SomeObjectRepository } from './some-object.repository';
import { SomeObject } from '@green-api-test/shared-types';
import { SomeObjectEntity } from './some-object.entity';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class SomeModuleService {
  constructor( private readonly someObjectRepository: SomeObjectRepository) {}

  async create(dto: SomeObject) {
    const entity = new SomeObjectEntity(dto);
    return  this.someObjectRepository.create(entity);
  }

  async get(id) {
    const someObject = await this.someObjectRepository.findById(id);

    if (!someObject) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: 'Not found'
      })
    }
    return someObject;
  }

  async getAll() {
    return this.someObjectRepository.findAll();
  }
}
