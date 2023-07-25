import { Module } from '@nestjs/common';


import { SomeModuleModule } from './some-module/some-module.module';

@Module({
  imports: [SomeModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
