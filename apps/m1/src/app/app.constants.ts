export const ENV_FILE_PATH = 'environment/.m1.env';
export const RABBITMQ_ENV_FILE_PATH = 'environment/.rabbitmq.env';

export enum EnvValidationMessage {
  ApiPortRequired = 'Api port is required',
  RabbitMQUserRequired = 'RabbitMQ user is required',
  RabbitMQPasswordRequired = 'RabbitMQ password is required',
  RabbitMQHostRequired = 'RabbitMQ host is required',
  RabbitMQQueueRequired = 'RabbitMQ queue is required',
}
