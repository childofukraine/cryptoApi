"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const database_1 = require("./database");
const db_funcs_1 = require("./db_funcs");
const CoinMarketCap_1 = require("./api/CoinMarketCap");
const CoinBase_1 = require("./api/CoinBase");
const CoinStats_1 = require("./api/CoinStats");
const Kucoin_1 = require("./api/Kucoin");
const CoinPaprika_1 = require("./api/CoinPaprika");
let connection = database_1.dataBase.initialize();
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    connection
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        const CoinMarketCapDataArray = yield CoinMarketCap_1.CoinMarketCapData; // array with coins from CoinMarketCap
        const CoinBaseDataArray = yield CoinBase_1.CoinBaseData; //array with coins from CoinBase
        const CoinStatsArray = yield CoinStats_1.CoinStatsData; //array with coins from CoinStats
        const KuCoinArray = yield Kucoin_1.KuCoinData; //array with coins from Kucoin
        const CoinPaprikaArray = yield CoinPaprika_1.CoinPaprikaData; //array with coins from CoinPaprika
        (0, db_funcs_1.updateCoinMarketCap)(CoinMarketCapDataArray).then(() => console.log("CoinMarketCap db updated."));
        (0, db_funcs_1.updateCoinBase)(CoinBaseDataArray).then(() => console.log("CoinBase db updated."));
        (0, db_funcs_1.updateCoinStats)(CoinStatsArray).then(() => console.log("CoinStats db updated."));
        (0, db_funcs_1.updateKuCoin)(KuCoinArray).then(() => console.log("Kucoin db updated."));
        (0, db_funcs_1.updateCoinPaprika)(CoinPaprikaArray).then(() => console.log("CoinPaprika db updated."));
    }))
        .catch((error) => console.log(error));
});
exports.getData = getData;
