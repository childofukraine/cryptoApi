import axios from "axios";
import { coins } from "../coins";

const getCoinsFromCoinMarketCap = async () => {
  const dataArray: any[] = [];
  await axios
    .get("https://api.coinbase.com/v2/exchange-rates?currency=USD", {})
    .then((result) => {
      const data = result.data.data.rates;
      let coinBaseSymb: string;
      for (coinBaseSymb in data) {
        let value: string;
        for (value in coins) {
          let coin = coins[value as keyof typeof coins];
          if (coinBaseSymb === coin) {
            let symbol = coinBaseSymb;
            let fullPrice = 1 / data[coinBaseSymb];
            fullPrice.toFixed(8);
            dataArray.push({ symbol, fullPrice });
          }
        }
      }
      return dataArray;
    })
    .catch((err) => {
      console.log(err);
    });
  return dataArray;
};

export const CoinBaseData = getCoinsFromCoinMarketCap();
