import 'reflect-metadata';

import dotenv from "dotenv";
dotenv.config();

import { AppDataSource } from "./src/shared/infra/database/typeorm/data-source";
AppDataSource
.initialize()
.then(err => console.info('Database initialized.'))
.catch(err => console.error('Connection failed. Detail: ', err.message));

import "./src/shared/infra/providers/index";
