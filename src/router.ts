import express from "express";
import { Controller } from "./controller";
const router = express.Router();

router.get("/coinmarketcap/:coin", Controller.getCoinFromCoinMarketCap);
router.get("/coinbase/:coin", Controller.getCoinFromCoinBase);
router.get("/coinpaprika/:coin", Controller.getCoinFromCoinPaprika);
router.get("/coinstats/:coin", Controller.getCoinFromCoinStats);
router.get("/kucoin/:coin", Controller.getCoinFromKucoin);

export default router;
