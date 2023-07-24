import express, { Express } from "express";
import routes from "./routes/index";

const dotenv = require("dotenv");
dotenv.config();

const app: Express = express();

app.use(express.json());

routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening in port ${port}...`);
});

export default app;
