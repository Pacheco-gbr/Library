import "dotenv/config";
import { appDataSource } from "../app/shared/infra/db/data-source";
import app from "./config/app";

const port = process.env.PORT || 8080;

appDataSource.initialize().then(() => {
    app.listen(port, () => console.log("The server is running."));
});
