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
exports.allCoinsFromCoinPaprika = exports.find = exports.updateCoinPaprika = exports.updateKuCoin = exports.updateCoinStats = exports.updateCoinBase = exports.updateCoinMarketCap = void 0;
const CoinMarketCap_1 = require("./models/CoinMarketCap");
const CoinBase_1 = require("./models/CoinBase");
const database_1 = require("./database");
const CoinStats_1 = require("./models/CoinStats");
const Kucoin_1 = require("./models/Kucoin");
const CoinPaprika_1 = require("./models/CoinPaprika");
const updateCoinMarketCap = (array) => __awaiter(void 0, void 0, void 0, function* () {
    const coinRepo = database_1.dataBase.getRepository(CoinMarketCap_1.CoinMarketCap);
    array.forEach((coinObj) => __awaiter(void 0, void 0, void 0, function* () {
        let symbol;
        let fullPrice;
        ({ symbol, fullPrice } = coinObj);
        yield coinRepo.query(`UPDATE coin_market_cap SET price = ${fullPrice} WHERE name = "${symbol}";`);
    }));
});
exports.updateCoinMarketCap = updateCoinMarketCap;
const updateCoinBase = (array) => __awaiter(void 0, void 0, void 0, function* () {
    const coinRepo = database_1.dataBase.getRepository(CoinBase_1.CoinBase);
    array.forEach((coinObj) => __awaiter(void 0, void 0, void 0, function* () {
        let symbol;
        let fullPrice;
        ({ symbol, fullPrice } = coinObj);
        yield coinRepo.query(`UPDATE coin_base SET price = ${fullPrice} WHERE name = "${symbol}";`);
    }));
});
exports.updateCoinBase = updateCoinBase;
const updateCoinStats = (array) => __awaiter(void 0, void 0, void 0, function* () {
    const coinRepo = database_1.dataBase.getRepository(CoinStats_1.CoinStats);
    array.forEach((coinObj) => __awaiter(void 0, void 0, void 0, function* () {
        let symbol;
        let fullPrice;
        ({ symbol, fullPrice } = coinObj);
        yield coinRepo.query(`UPDATE coin_stats SET price = ${fullPrice} WHERE name = "${symbol}";`);
    }));
});
exports.updateCoinStats = updateCoinStats;
const updateKuCoin = (array) => __awaiter(void 0, void 0, void 0, function* () {
    const coinRepo = database_1.dataBase.getRepository(Kucoin_1.Kucoin);
    array.forEach((coinObj) => __awaiter(void 0, void 0, void 0, function* () {
        let symbol;
        let fullPrice;
        ({ symbol, fullPrice } = coinObj);
        yield coinRepo.query(`UPDATE kucoin SET price = ${fullPrice} WHERE name = "${symbol}";`);
    }));
});
exports.updateKuCoin = updateKuCoin;
const updateCoinPaprika = (array) => __awaiter(void 0, void 0, void 0, function* () {
    const coinRepo = database_1.dataBase.getRepository(CoinPaprika_1.CoinPaprika);
    array.forEach((coinObj) => __awaiter(void 0, void 0, void 0, function* () {
        let symbol;
        let fullPrice;
        let price30m;
        let price1h;
        let price6h;
        let price12h;
        let price24h;
        ({ symbol, fullPrice, price30m, price1h, price6h, price12h, price24h } =
            coinObj);
        yield coinRepo.query(`UPDATE coin_paprika SET price = ${fullPrice},price30m = ${price30m},price1h = ${price1h},price6h = ${price6h},price12h = ${price12h},price24h = ${price24h} WHERE name = "${symbol}";`);
    }));
});
exports.updateCoinPaprika = updateCoinPaprika;
const find = (table, symbol) => __awaiter(void 0, void 0, void 0, function* () {
    let coinRepo;
    switch (table) {
        case "coinbase":
            coinRepo = database_1.dataBase.getRepository(CoinBase_1.CoinBase);
            break;
        case "coinmarketcap":
            coinRepo = database_1.dataBase.getRepository(CoinMarketCap_1.CoinMarketCap);
            break;
        case "coinpaprika":
            coinRepo = database_1.dataBase.getRepository(CoinPaprika_1.CoinPaprika);
            break;
        case "coinstats":
            coinRepo = database_1.dataBase.getRepository(CoinStats_1.CoinStats);
            break;
        case "kucoin":
            coinRepo = database_1.dataBase.getRepository(Kucoin_1.Kucoin);
            break;
    }
    const coin = yield (coinRepo === null || coinRepo === void 0 ? void 0 : coinRepo.find({ where: { name: symbol } }).catch((err) => console.log(err)));
    return coin;
});
exports.find = find;
const allCoinsFromCoinPaprika = () => __awaiter(void 0, void 0, void 0, function* () {
    const coinRepo = database_1.dataBase.getRepository(CoinPaprika_1.CoinPaprika);
    const coins = yield coinRepo.query("SELECT * FROM coin_paprika WHERE name IS NOT NULL");
    return coins;
});
exports.allCoinsFromCoinPaprika = allCoinsFromCoinPaprika;
