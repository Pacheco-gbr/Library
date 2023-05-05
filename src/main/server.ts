import app from "./config/app";
import "dotenv/config";

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("The server is running."));
