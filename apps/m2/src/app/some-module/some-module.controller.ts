import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { SomeObject, SomeObjectEvent } from '@green-api-test/shared-types';
import { SomeModuleService } from './some-module.service';

@Controller('some-module')
export class SomeModuleController {
  constructor(private readonly someModuleService: SomeModuleService) {}

  @MessagePattern({ cmd: SomeObjectEvent.Create })
  public async create(@Payload() { dto }: { dto: SomeObject }) {
    return this.someModuleService.create(dto)
  }

  @MessagePattern({ cmd: SomeObjectEvent.Get })
  public async get(@Payload() { id }: { id: string }) {
    return this.someModuleService.get(id);
  }

  @MessagePattern({ cmd: SomeObjectEvent.GetAll })
  public async getAll() {
    return this.someModuleService.getAll();
  }
}

