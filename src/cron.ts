import { schedule } from "node-cron";
import { getData } from "./infoApi";

schedule("*/5 * * * *", async () => {
  getData();
});
