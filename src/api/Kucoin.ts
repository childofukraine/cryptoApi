import axios from "axios";
import { coins } from "../coins";

const getCoinsFromKuCoin = async () => {
  const dataArray: any[] = [];
  await axios
    .get("https://api.kucoin.com/api/v1/prices", {})
    .then((result) => {
      const data = result.data.data;
      let kuCoinSymb: string;
      for (kuCoinSymb in data) {
        let value: string;
        for (value in coins) {
          let coin = coins[value as keyof typeof coins];
          if (kuCoinSymb === coin) {
            let symbol = kuCoinSymb;
            let fullPrice: number = data[symbol];
            dataArray.push({ symbol, fullPrice });
          }
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return dataArray;
};

export const KuCoinData = getCoinsFromKuCoin();
