import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';

import { fillObject } from '@green-api-test/core';
import { CheckMongoId } from '../../common/pipes';
import { CreateSomeObjectDto } from './dto';
import { SomeModuleService } from './some-module.service';
import { SomeObjectRdo } from './rdo';

@ApiTags('some-module')
@Controller('some-object')
export class SomeModuleController {
  constructor(private readonly someModuleService: SomeModuleService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    type: SomeObjectRdo,
    description: 'Create some object',
  })
  @Post()
  async create(@Body() dto: CreateSomeObjectDto) {
    const someObject = await this.someModuleService.create(dto);
    return fillObject(SomeObjectRdo, someObject);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: SomeObjectRdo,
    description: 'Get some object by id',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
  })
  @Get(':id')
  public async get(@Param('id', CheckMongoId) id: string) {
    try {
      const someObject = await this.someModuleService.get(id);
      return fillObject(SomeObjectRdo, someObject);
    } catch ({message, status}) {
      throw new HttpException(message, status);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: [SomeObjectRdo],
    description: 'Get a list of all objects',
  })
  @Get()
  public async getAll() {
    const all = await this.someModuleService.getAll();
    return all.map((someObject) => fillObject(SomeObjectRdo, someObject));
  }
}
