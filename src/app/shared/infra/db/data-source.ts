import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "tuffi.db.elephantsql.com",
    port: 5432,
    username: "qldodcdd",
    password: "e5f-hw1-H-Bt1AtOxDn-FrQIFSkk9ieG",
    database: "qldodcdd",
    logging: true,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
});
