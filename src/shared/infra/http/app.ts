import "reflect-metadata"
import dotenv from "dotenv";
dotenv.config();

import { AppDataSource } from "../database/typeorm/data-source";
AppDataSource
.initialize()
.then(err => console.info('Database initialized.'))
.catch(err => console.error('Connection failed. Detail: ', err.message));

import express from "express";
import cors from "cors";

import { router } from "./routes";
import "../providers"

const app = express();

app.use(express.json());
app.use(cors({origin: process.env.ORIGIN_CORS ?? '*'}));

app.use(router);

export { app };

