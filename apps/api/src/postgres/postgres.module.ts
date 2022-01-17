import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot(getSequelizeModuleOptions())],
})
export class PostgresModule {}

function getSequelizeModuleOptions(): SequelizeModuleOptions {
  const options: SequelizeModuleOptions = {
    synchronize: true,
    autoLoadModels: true,
    models: [],
  };

  if (process.env.NODE_ENV === 'development') {
    options.dialect = 'sqlite';
    options.storage = './apps/api/src/postgres/db.sqlite';
    return options;
  }

  const match = new RegExp(
    '^' +
      'postgres://(?<username>.+?)' +
      ':(?<password>.+?)' +
      '@(?<host>.+?)' +
      ':(?<port>.+?)' +
      '/(?<database>.+?)' +
      '$'
  ).exec(process.env.DATABASE_URL);

  if (match !== null) {
    options.dialect = 'postgres';
    options.username = match.groups.username;
    options.password = match.groups.password;
    options.host = match.groups.host;
    options.port = Number(match.groups.port);
    options.database = match.groups.database;
  }

  return options;
}
