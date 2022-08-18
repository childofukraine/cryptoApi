import axios from "axios";
import { coins } from "../coins";

const getCoinsFromCoinMarketCap = async () => {
  const headers: any = { "X-CMC_PRO_API_KEY": '75018fc7-b166-41c4-8066-ba1806045a4c' };
  const dataArray: any[] = [];

  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      { headers }
    )
    .then((resp) => {
      const data = resp.data.data;
      let value: string;
      for (value in coins) {
        let coin = coins[value as keyof typeof coins];
        data.map((element: any) => {
          let symbol: string = element.symbol;
          let price: number = element.quote.USD.price;
          let fullPrice = price.toFixed(8);
          let coinData = { symbol, fullPrice };

          if (element.symbol === coin) {
            dataArray.push(coinData);
          }
        });
      }
      return dataArray;
    })
    .catch((err) => {
      console.log(err);
    });
  return dataArray;
};

export const CoinMarketCapData = getCoinsFromCoinMarketCap();
