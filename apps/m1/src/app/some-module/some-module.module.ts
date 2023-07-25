import { Module } from '@nestjs/common';
import { SomeModuleService } from './some-module.service';
import { SomeModuleController } from './some-module.controller';

@Module({
  providers: [SomeModuleService],
  controllers: [SomeModuleController],
})
export class SomeModuleModule {}
