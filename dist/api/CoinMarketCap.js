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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinMarketCapData = void 0;
const axios_1 = __importDefault(require("axios"));
const coins_1 = require("../coins");
const getCoinsFromCoinMarketCap = () => __awaiter(void 0, void 0, void 0, function* () {
    const headers = { "X-CMC_PRO_API_KEY": '75018fc7-b166-41c4-8066-ba1806045a4c' };
    const dataArray = [];
    yield axios_1.default
        .get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", { headers })
        .then((resp) => {
        const data = resp.data.data;
        let value;
        for (value in coins_1.coins) {
            let coin = coins_1.coins[value];
            data.map((element) => {
                let symbol = element.symbol;
                let price = element.quote.USD.price;
                let fullPrice = price.toFixed(8);
                let coinData = { symbol, fullPrice };
                if (element.symbol === coin) {
                    dataArray.push(coinData);
                }
            });
        }
        return dataArray;
    })
        .catch((err) => {
        console.log(err);
    });
    return dataArray;
});
exports.CoinMarketCapData = getCoinsFromCoinMarketCap();
