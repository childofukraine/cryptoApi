"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOriginPrice = void 0;
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
