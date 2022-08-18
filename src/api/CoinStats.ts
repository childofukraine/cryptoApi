import axios from "axios";
import { coins } from "../coins";

const dataArray: any[] = [];

const getCoinsFromCoinStats = async () => {
  await axios
    .get("https://api.coinstats.app/public/v1/coins?skip=0", {})
    .then((result) => {
      const data = result.data.coins;
      let value: string;
      for (value in coins) {
        let coin = coins[value as keyof typeof coins];
        data.map((element: any) => {
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
};

export const CoinStatsData = getCoinsFromCoinStats();
