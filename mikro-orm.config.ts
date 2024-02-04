import { MikroOrmModuleAsyncOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleAsyncOptions = {
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  dbName: 'your_database_name',
  type: 'mysql',
  user: 'your_database_user',
  password: 'your_database_password',
  clientUrl: 'your_database_url', // Optional
};

export default config;
