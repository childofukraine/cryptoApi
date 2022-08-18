"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get("/coinmarketcap/:coin", controller_1.Controller.getCoinFromCoinMarketCap);
router.get("/coinbase/:coin", controller_1.Controller.getCoinFromCoinBase);
router.get("/coinpaprika/:coin", controller_1.Controller.getCoinFromCoinPaprika);
router.get("/coinstats/:coin", controller_1.Controller.getCoinFromCoinStats);
router.get("/kucoin/:coin", controller_1.Controller.getCoinFromKucoin);
router.get("/coinpaprika", controller_1.Controller.getAllFromCoinPaprika);
exports.default = router;
