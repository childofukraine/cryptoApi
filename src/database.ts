import "reflect-metadata";
import { DataSource } from "typeorm";
import { CoinMarketCap } from "./models/CoinMarketCap";
import { CoinBase } from "./models/CoinBase";
import { CoinStats } from "./models/CoinStats";
import { Kucoin } from "./models/Kucoin";
import { CoinPaprika } from "./models/CoinPaprika";

export const dataBase = new DataSource({
  type: "mysql",
  host: "database-1.cnz3wto1hwqt.eu-central-1.rds.amazonaws.com",
  port: 3306,
  username: "admin",
  password: "12345678",
  database: "my_db",
  synchronize: true,
  logging: false,
  entities: [CoinMarketCap, CoinBase, CoinStats, Kucoin, CoinPaprika],
  migrations: [],
  subscribers: [],
});