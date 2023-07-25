import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import {ConfigService} from '@nestjs/config';

export function getMongoDbConfig(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => ({
      uri: getMongoConnectionString({
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        authDatabase: configService.get<string>('database.authBase'),
        databaseName: configService.get<string>('database.database'),
      })
    }),
    inject: [ConfigService]
  }
}

function getMongoConnectionString({username, password, host, port, databaseName, authDatabase}): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
