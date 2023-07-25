import { IsNumber, IsString, Max, Min, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { EnvValidationMessage } from './app.constants';

const MIN_PORT = 0;
const MAX_PORT = 65535;

class EnvironmentsConfig {

  @IsNumber({}, {
    message: EnvValidationMessage.ApiPortRequired
  })
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  public PORT: number;

  @IsString({
    message: EnvValidationMessage.RabbitMQUserRequired
  })
  public RABBITMQ_USER: string;

  @IsString({
    message: EnvValidationMessage.RabbitMQPasswordRequired
  })
  public RABBITMQ_PASSWORD: string;

  @IsString({
    message: EnvValidationMessage.RabbitMQHostRequired
  })
  public RABBITMQ_HOST: string;

  @IsString({
    message: EnvValidationMessage.RabbitMQQueueRequired
  })
  public RABBITMQ_SERVICE_QUEUE: string;
}

export function validateEnvironment(config: Record<string, unknown>) {
  const environmentsConfig = plainToInstance(
    EnvironmentsConfig,
    config,
    { enableImplicitConversion: true  },
  );

  const errors = validateSync(
    environmentsConfig, {
      skipMissingProperties: false
    }
  );

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentsConfig;
}
