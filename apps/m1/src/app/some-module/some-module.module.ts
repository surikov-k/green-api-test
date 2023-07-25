import { Module } from '@nestjs/common';

import { RmqModule } from '@green-api-test/core';
import { SomeModuleService } from './some-module.service';
import { SomeModuleController } from './some-module.controller';


@Module({
  imports: [
    RmqModule.registerRmq({
      name: 'GREEN_API_SERVICE',
    }),
  ],
  providers: [SomeModuleService],
  controllers: [SomeModuleController],
})
export class SomeModuleModule {}
