import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(getTypeOrmModuleOptions())],
})
export class PostgresModule {}

function getTypeOrmModuleOptions(): TypeOrmModuleOptions {
  const isDev = process.env.NODE_ENV === 'development';

  const options: TypeOrmModuleOptions & {
    ssl: { rejectUnauthorized: boolean };
  } = {
    type: isDev ? 'sqlite' : 'postgres',
    database: isDev ? './apps/api/src/postgres/db.sqlite' : '',
    url: isDev ? '' : process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    synchronize: true,
    autoLoadEntities: true,
  };

  return options;
}
