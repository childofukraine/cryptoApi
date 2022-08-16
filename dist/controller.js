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
exports.Controller = void 0;
const database_1 = require("./database");
const db_funcs_1 = require("./db_funcs");
class Controller {
    static getCoinFromCoinMarketCap(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let connection = database_1.dataBase.initialize();
            const coin = req.params.coin;
            connection.then(() => __awaiter(this, void 0, void 0, function* () {
                const coinInfo = yield (0, db_funcs_1.find)("coinmarketcap", coin);
                yield (yield connection).destroy();
                if ((coinInfo === null || coinInfo === void 0 ? void 0 : coinInfo.length) === 0) {
                    return res.status(400).json({ message: `Монета ${coin} не найдена` });
                }
                else {
                    return res.json({ Coin_info: coinInfo });
                }
            }));
        });
    }
    static getCoinFromCoinBase(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const coin = req.params.coin;
            let connection = database_1.dataBase.initialize();
            connection.then(() => __awaiter(this, void 0, void 0, function* () {
                const coinInfo = yield (0, db_funcs_1.find)("coinbase", coin);
                yield (yield connection).destroy();
                if ((coinInfo === null || coinInfo === void 0 ? void 0 : coinInfo.length) === 0) {
                    return res.status(400).json({ message: `Монета ${coin} не найдена` });
                }
                else {
                    return res.json({ Coin_info: coinInfo });
                }
            }));
        });
    }
    static getCoinFromCoinPaprika(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const coin = req.params.coin;
            let connection = database_1.dataBase.initialize();
            connection.then(() => __awaiter(this, void 0, void 0, function* () {
                const coinInfo = yield (0, db_funcs_1.find)("coinpaprika", coin);
                yield (yield connection).destroy();
                if ((coinInfo === null || coinInfo === void 0 ? void 0 : coinInfo.length) === 0) {
                    return res.status(400).json({ message: `Монета ${coin} не найдена` });
                }
                else {
                    return res.json({ Coin_info: coinInfo });
                }
            }));
        });
    }
    static getCoinFromCoinStats(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const coin = req.params.coin;
            let connection = database_1.dataBase.initialize();
            connection.then(() => __awaiter(this, void 0, void 0, function* () {
                const coinInfo = yield (0, db_funcs_1.find)("coinstats", coin);
                yield (yield connection).destroy();
                if ((coinInfo === null || coinInfo === void 0 ? void 0 : coinInfo.length) === 0) {
                    return res.status(400).json({ message: `Монета ${coin} не найдена` });
                }
                else {
                    return res.json({ Coin_info: coinInfo });
                }
            }));
        });
    }
    static getCoinFromKucoin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const coin = req.params.coin;
            let connection = database_1.dataBase.initialize();
            connection.then(() => __awaiter(this, void 0, void 0, function* () {
                const coinInfo = yield (0, db_funcs_1.find)("kucoin", coin);
                yield (yield connection).destroy();
                if ((coinInfo === null || coinInfo === void 0 ? void 0 : coinInfo.length) === 0) {
                    return res.status(400).json({ message: `Монета ${coin} не найдена` });
                }
                else {
                    return res.json({ Coin_info: coinInfo });
                }
            }));
        });
    }
}
exports.Controller = Controller;
