import { dataBase } from "./database";
import {
  updateCoinBase,
  updateCoinMarketCap,
  updateCoinStats,
  updateKuCoin,
  updateCoinPaprika,
} from "./db_funcs";
import { CoinMarketCapData } from "./api/CoinMarketCap";
import { CoinBaseData } from "./api/CoinBase";
import { CoinStatsData } from "./api/CoinStats";
import { KuCoinData } from "./api/Kucoin";
import { CoinPaprikaData } from "./api/CoinPaprika";

let connection = dataBase.initialize();
export const getData = async () => {
  connection
    .then(async () => {
      const CoinMarketCapDataArray = await CoinMarketCapData; // array with coins from CoinMarketCap
      const CoinBaseDataArray = await CoinBaseData; //array with coins from CoinBase
      const CoinStatsArray = await CoinStatsData; //array with coins from CoinStats
      const KuCoinArray = await KuCoinData; //array with coins from Kucoin
      const CoinPaprikaArray = await CoinPaprikaData; //array with coins from CoinPaprika

      updateCoinMarketCap(CoinMarketCapDataArray).then(() =>
        console.log("CoinMarketCap db updated.")
      );
      updateCoinBase(CoinBaseDataArray).then(() =>
        console.log("CoinBase db updated.")
      );
      updateCoinStats(CoinStatsArray).then(() =>
        console.log("CoinStats db updated.")
      );
      updateKuCoin(KuCoinArray).then(() => console.log("Kucoin db updated."));
      updateCoinPaprika(CoinPaprikaArray).then(() =>
        console.log("CoinPaprika db updated.")
      );
    })
    .catch((error) => console.log(error));
};
