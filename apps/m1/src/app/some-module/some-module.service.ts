import { firstValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SomeObject, SomeObjectEvent } from '@green-api-test/shared-types';

import { CreateSomeObjectDto } from './dto/create-some-object.dto';

@Injectable()
export class SomeModuleService {
  constructor(
    @Inject('GREEN_API_SERVICE') private readonly someModuleService: ClientProxy
  ) {}

  async create(dto: CreateSomeObjectDto) {
    return firstValueFrom(
      this.someModuleService.send<SomeObject>({ cmd: SomeObjectEvent.Create }, { dto })
    )
  }

  async get(id: string) {
    return firstValueFrom(
      this.someModuleService.send<SomeObject>(
        { cmd: SomeObjectEvent.Get },
        { id }
      )
    );
  }

  async getAll() {
    return firstValueFrom(
      this.someModuleService.send<SomeObject[]>(
        {cmd: SomeObjectEvent.GetAll}, {}
      )
    )
  }
}
