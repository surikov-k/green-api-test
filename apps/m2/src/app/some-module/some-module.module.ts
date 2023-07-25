import { Module } from '@nestjs/common';
import { SomeModuleController } from './some-module.controller';
import { SomeModuleService } from './some-module.service';

@Module({
  controllers: [SomeModuleController],
  providers: [SomeModuleService],
})
export class SomeModuleModule {}
