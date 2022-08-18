import { resolveSoa } from "dns";
import { Request, Response, NextFunction } from "express";
import { dataBase } from "./database";
import { allCoinsFromCoinPaprika, find } from "./db_funcs";
import { RequestBody } from "./types";

export class Controller {
  static async getCoinFromCoinMarketCap(
    req: Request<RequestBody>,
    res: Response,
    next: NextFunction
  ) {
    let connection = dataBase.initialize();
    const coin = req.params.coin;
    connection.then(async () => {
      const coinInfo = await find("coinmarketcap", coin);

      await (await connection).destroy();
      if (coinInfo?.length === 0) {
        return res.status(400).json({ message: `Монета ${coin} не найдена` });
      } else {
        return res.json({ Coin_info: coinInfo });
      }
    });
  }

  static async getCoinFromCoinBase(
    req: Request<RequestBody>,
    res: Response,
    next: NextFunction
  ) {
    const coin = req.params.coin;
    let connection = dataBase.initialize();
    connection.then(async () => {
      const coinInfo = await find("coinbase", coin);

      await (await connection).destroy();
      if (coinInfo?.length === 0) {
        return res.status(400).json({ message: `Монета ${coin} не найдена` });
      } else {
        return res.json({ Coin_info: coinInfo });
      }
    });
  }

  static async getCoinFromCoinPaprika(
    req: Request<RequestBody>,
    res: Response,
    next: NextFunction
  ) {
    const coin = req.params.coin;
    let connection = dataBase.initialize();
    connection.then(async () => {
      const coinInfo = await find("coinpaprika", coin);

      await (await connection).destroy();
      if (coinInfo?.length === 0) {
        return res.status(400).json({ message: `Монета ${coin} не найдена` });
      } else {
        return res.json({ Coin_info: coinInfo });
      }
    });
  }

  static async getCoinFromCoinStats(
    req: Request<RequestBody>,
    res: Response,
    next: NextFunction
  ) {
    const coin = req.params.coin;
    let connection = dataBase.initialize();
    connection.then(async () => {
      const coinInfo = await find("coinstats", coin);

      await (await connection).destroy();
      if (coinInfo?.length === 0) {
        return res.status(400).json({ message: `Монета ${coin} не найдена` });
      } else {
        return res.json({ Coin_info: coinInfo });
      }
    });
  }

  static async getCoinFromKucoin(
    req: Request<RequestBody>,
    res: Response,
    next: NextFunction
  ) {
    const coin = req.params.coin;
    let connection = dataBase.initialize();
    connection.then(async () => {
      const coinInfo = await find("kucoin", coin);

      await (await connection).destroy();
      if (coinInfo?.length === 0) {
        return res.status(400).json({ message: `Монета ${coin} не найдена` });
      } else {
        return res.json({ Coin_info: coinInfo });
      }
    });
  }

  static async getAllFromCoinPaprika(
    req: Request<RequestBody>,
    res: Response,
    next: NextFunction
  ) {
    let connection = dataBase.initialize();
    connection.then(async () => {
      const coins = await allCoinsFromCoinPaprika();
      await (await connection).destroy();
      return res.json({ all_coins: coins });
    });
  }
}
