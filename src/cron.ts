import { schedule } from "node-cron";
import { dontSleep } from "./funcs";
import { getData } from "./infoApi";

schedule("* * * * *", async () => {
  dontSleep();
});

schedule("*/5 * * * *", async () => {
  getData();
});
