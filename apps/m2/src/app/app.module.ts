import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SomeModuleModule } from './some-module/some-module.module';
import { ENV_FILE_PATH } from './app.constants';
import databaseConfig from '../config/database.config';
import { validateEnvironment } from './env.validation';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoDbConfig } from '../config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig],
      validate: validateEnvironment,
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig(),
    ),
    SomeModuleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
