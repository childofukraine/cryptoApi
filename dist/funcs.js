"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dontSleep = exports.getOriginPrice = void 0;
const axios_1 = __importDefault(require("axios"));
const getOriginPrice = (price, percentChange) => {
    let result;
    if (Math.sign(percentChange) === 1) {
        result = price / ((100 + percentChange) / 100);
    }
    else {
        result = price / ((100 - percentChange) / 100);
    }
    return result.toFixed(8);
};
exports.getOriginPrice = getOriginPrice;
const dontSleep = () => {
    axios_1.default.get("https://cryptoapilambda.herokuapp.com/coinpaprika").catch((err) => console.log(err));
    return;
};
exports.dontSleep = dontSleep;
