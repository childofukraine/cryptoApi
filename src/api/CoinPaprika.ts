import axios from "axios";
import { coins } from "../coins";
import { getOriginPrice } from "../funcs";
import { elementType } from "../types";

const getCoinsFromCoinPaprika = async () => {
  const dataArray: any[] = [];
  await axios
    .get("https://api.coinpaprika.com/v1/tickers", {})
    .then((result) => {
      const data = result.data;
      const filteredData = data.filter((el: elementType) => {
        if (el.rank <= 100) {
          return el;
        }
      });

      let value: string;
      for (value in coins) {
        let coin = coins[value as keyof typeof coins];
        filteredData.map((el: any) => {
          let symbol = el.symbol;
          let price: number = el.quotes.USD.price;
          let fullPrice = price.toFixed(8);
          if (symbol === coin) {
            let price30m = getOriginPrice(
              price,
              el.quotes.USD.percent_change_30m
            );
            let price1h = getOriginPrice(
              price,
              el.quotes.USD.percent_change_1h
            );
            let price6h = getOriginPrice(
              price,
              el.quotes.USD.percent_change_6h
            );
            let price12h = getOriginPrice(
              price,
              el.quotes.USD.percent_change_12h
            );
            let price24h = getOriginPrice(
              price,
              el.quotes.USD.percent_change_24h
            );
            dataArray.push({
              symbol,
              fullPrice,
              price30m,
              price1h,
              price6h,
              price12h,
              price24h,
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return dataArray;
};

export const CoinPaprikaData = getCoinsFromCoinPaprika();
