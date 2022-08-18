import axios from "axios";

export const getOriginPrice = (price: number, percentChange: number) => {
  let result: number;
  if (Math.sign(percentChange) === 1) {
    result = price / ((100 + percentChange) / 100);
  } else {
    result = price / ((100 - percentChange) / 100);
  }
  return result.toFixed(8);
};

export const dontSleep = () => {
  axios.get("https://cryptoapilambda.herokuapp.com/coinpaprika").catch((err) => console.log(err))
  return;
}