import express, { Express } from "express";
import { dontSleep } from "./funcs";
import router from "./router";

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
