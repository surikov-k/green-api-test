import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';

import { fillObject } from '@green-api-test/core';
import { SomeModuleService } from './some-module.service';
import { CreateSomeObjectDto } from './dto/create-some-object.dto';
import { SomeObjectRdo } from './rdo';

@Controller('some-object')
export class SomeModuleController {
  constructor(private readonly someModuleService: SomeModuleService) {}

  @Post()
  async create(@Body() dto: CreateSomeObjectDto) {
    const someObject = await this.someModuleService.create(dto);
    return fillObject(SomeObjectRdo, someObject);
  }

  @Get(':id')
  public async get(@Param('id') id: string) {
    try {
      const someObject = await this.someModuleService.get(id);
      return fillObject(SomeObjectRdo, someObject);
    } catch ({message, status}) {
      throw new HttpException(message, status);
    }
  }

  @Get()
  public async getAll() {
    const all = await this.someModuleService.getAll();
    return all.map((someObject) => fillObject(SomeObjectRdo, someObject));
  }
}
