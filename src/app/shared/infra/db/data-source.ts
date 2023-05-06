import "dotenv/config";
import { DataSource } from "typeorm";
import entities from "./entities";

export const appDataSource = new DataSource({
    type: "postgres",
    url: process.env.BD_URL,
    database: "qldodcdd",
    logging: true,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
    entities,
});
