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
exports.CoinPaprikaData = void 0;
const axios_1 = __importDefault(require("axios"));
const coins_1 = require("../coins");
const funcs_1 = require("../funcs");
const getCoinsFromCoinPaprika = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataArray = [];
    yield axios_1.default
        .get("https://api.coinpaprika.com/v1/tickers", {})
        .then((result) => {
        const data = result.data;
        const filteredData = data.filter((el) => {
            if (el.rank <= 100) {
                return el;
            }
        });
        let value;
        for (value in coins_1.coins) {
            let coin = coins_1.coins[value];
            filteredData.map((el) => {
                let symbol = el.symbol;
                let price = el.quotes.USD.price;
                let fullPrice = price.toFixed(8);
                if (symbol === coin) {
                    let price30m = (0, funcs_1.getOriginPrice)(price, el.quotes.USD.percent_change_30m);
                    let price1h = (0, funcs_1.getOriginPrice)(price, el.quotes.USD.percent_change_1h);
                    let price6h = (0, funcs_1.getOriginPrice)(price, el.quotes.USD.percent_change_6h);
                    let price12h = (0, funcs_1.getOriginPrice)(price, el.quotes.USD.percent_change_12h);
                    let price24h = (0, funcs_1.getOriginPrice)(price, el.quotes.USD.percent_change_24h);
                    dataArray.push({
                        symbol,
                        fullPrice,
                        price30m,
                        price1h,
                        price6h,
                        price12h,
                        price24h,
                    });
                }
            });
        }
    })
        .catch((err) => {
        console.log(err);
    });
    return dataArray;
});
exports.CoinPaprikaData = getCoinsFromCoinPaprika();
