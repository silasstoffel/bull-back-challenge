import "reflect-metadata"

import path  from 'path';
import { DataSource } from "typeorm";
import { Account } from '../../../../modules/accounts/domain/account.entity';

const dist = path.resolve(__dirname, '..', '..', '..', '..', '..', 'dist');
const migrationDir = `${dist}/shared/infra/database/migrations/*.js`


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT) || 5432 ,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: process.env.DB_LOGGING === 'true',
    entities: [Account],
    migrations: [migrationDir],
    migrationsRun: true,
});
