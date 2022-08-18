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
exports.CoinStatsData = void 0;
const axios_1 = __importDefault(require("axios"));
const coins_1 = require("../coins");
const dataArray = [];
const getCoinsFromCoinStats = () => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default
        .get("https://api.coinstats.app/public/v1/coins?skip=0", {})
        .then((result) => {
        const data = result.data.coins;
        let value;
        for (value in coins_1.coins) {
            let coin = coins_1.coins[value];
            data.map((element) => {
                let symbol = element.symbol;
                let fullPrice = element.price.toFixed(8);
                if (symbol === coin) {
                    dataArray.push({ symbol, fullPrice });
                }
            });
        }
    })
        .catch((err) => {
        console.log(err);
    });
    return dataArray;
});
exports.CoinStatsData = getCoinsFromCoinStats();
