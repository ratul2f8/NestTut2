import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
const config: SqliteConnectionOptions = {
  database: 'db',
  type: 'sqlite',
  entities: ['dist/src/**/*.entity.js'],
  // entities: ['src/**/*.entity.ts'],
  synchronize: false,
  logging: true,
  migrations: [
    // 'src/db/migrations/*.ts'
    'dist/src/db/migrations/**/*.js'
  ],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
};
export default config;
