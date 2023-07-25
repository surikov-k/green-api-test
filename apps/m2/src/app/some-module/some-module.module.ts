import { Module } from '@nestjs/common';
import { SomeModuleController } from './some-module.controller';
import { SomeModuleService } from './some-module.service';
import { SomeObjectRepository } from './some-object.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { SomeObjectModel, SomeObjectSchema } from './some-object.model';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: SomeObjectModel.name,
      schema: SomeObjectSchema
    }])
  ],
  controllers: [SomeModuleController],
  exports: [SomeObjectRepository],
  providers: [SomeModuleService, SomeObjectRepository],
})
export class SomeModuleModule {}
