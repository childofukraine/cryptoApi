"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBase = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const CoinMarketCap_1 = require("./models/CoinMarketCap");
const CoinBase_1 = require("./models/CoinBase");
const CoinStats_1 = require("./models/CoinStats");
const Kucoin_1 = require("./models/Kucoin");
const CoinPaprika_1 = require("./models/CoinPaprika");
exports.dataBase = new typeorm_1.DataSource({
    type: "mysql",
    host: "database-1.cnz3wto1hwqt.eu-central-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "12345678",
    database: "my_db",
    synchronize: true,
    logging: false,
    entities: [CoinMarketCap_1.CoinMarketCap, CoinBase_1.CoinBase, CoinStats_1.CoinStats, Kucoin_1.Kucoin, CoinPaprika_1.CoinPaprika],
    migrations: [],
    subscribers: [],
});
