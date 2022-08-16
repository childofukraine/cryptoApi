import { CoinMarketCap } from "./models/CoinMarketCap";
import { CoinBase } from "./models/CoinBase";
import { dataBase } from "./database";
import { symbolPriceArray, coinPaprikaDataArray } from "./types";
import { CoinStats } from "./models/CoinStats";
import { Kucoin } from "./models/Kucoin";
import { CoinPaprika } from "./models/CoinPaprika";

export const updateCoinMarketCap = async (array: symbolPriceArray) => {
  const coinRepo = dataBase.getRepository(CoinMarketCap);

  array.forEach(async (coinObj) => {
    let symbol;
    let fullPrice;
    ({ symbol, fullPrice } = coinObj);

    await coinRepo.query(
      `UPDATE coin_market_cap SET price = ${fullPrice} WHERE name = "${symbol}";`
    );
  });
};

export const updateCoinBase = async (array: symbolPriceArray) => {
  const coinRepo = dataBase.getRepository(CoinBase);

  array.forEach(async (coinObj) => {
    let symbol;
    let fullPrice;
    ({ symbol, fullPrice } = coinObj);

    await coinRepo.query(
      `UPDATE coin_base SET price = ${fullPrice} WHERE name = "${symbol}";`
    );
  });
};

export const updateCoinStats = async (array: symbolPriceArray) => {
  const coinRepo = dataBase.getRepository(CoinStats);

  array.forEach(async (coinObj) => {
    let symbol;
    let fullPrice;
    ({ symbol, fullPrice } = coinObj);

    await coinRepo.query(
      `UPDATE coin_stats SET price = ${fullPrice} WHERE name = "${symbol}";`
    );
  });
};

export const updateKuCoin = async (array: symbolPriceArray) => {
  const coinRepo = dataBase.getRepository(Kucoin);

  array.forEach(async (coinObj) => {
    let symbol;
    let fullPrice;
    ({ symbol, fullPrice } = coinObj);

    await coinRepo.query(
      `UPDATE kucoin SET price = ${fullPrice} WHERE name = "${symbol}";`
    );
  });
};

export const updateCoinPaprika = async (array: coinPaprikaDataArray) => {
  const coinRepo = dataBase.getRepository(CoinPaprika);

  array.forEach(async (coinObj) => {
    let symbol;
    let fullPrice: number;
    let price30m: number;
    let price1h: number;
    let price6h: number;
    let price12h: number;
    let price24h: number;
    ({ symbol, fullPrice, price30m, price1h, price6h, price12h, price24h } =
      coinObj);

    await coinRepo.query(
      `UPDATE coin_paprika SET price = ${fullPrice},price30m = ${price30m},price1h = ${price1h},price6h = ${price6h},price12h = ${price12h},price24h = ${price24h} WHERE name = "${symbol}";`
    );
  });
};

export const find = async (table: string, symbol: string) => {
  let coinRepo;
  switch (table) {
    case "coinbase":
      coinRepo = dataBase.getRepository(CoinBase);
      break;
    case "coinmarketcap":
      coinRepo = dataBase.getRepository(CoinMarketCap);
      break;
    case "coinpaprika":
      coinRepo = dataBase.getRepository(CoinPaprika);
      break;
    case "coinstats":
      coinRepo = dataBase.getRepository(CoinStats);
      break;
    case "kucoin":
      coinRepo = dataBase.getRepository(Kucoin);
      break;
  }

  const coin = await coinRepo
    ?.find({ where: { name: symbol } })
    .catch((err) => console.log(err));
  return coin;
};
