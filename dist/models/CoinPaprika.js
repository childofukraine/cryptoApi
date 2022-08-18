"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinPaprika = void 0;
const typeorm_1 = require("typeorm");
let CoinPaprika = class CoinPaprika {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CoinPaprika.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CoinPaprika.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 20, scale: 8 }),
    __metadata("design:type", Number)
], CoinPaprika.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 20, scale: 8 }),
    __metadata("design:type", Number)
], CoinPaprika.prototype, "price30m", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 20, scale: 8 }),
    __metadata("design:type", Number)
], CoinPaprika.prototype, "price1h", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 20, scale: 8 }),
    __metadata("design:type", Number)
], CoinPaprika.prototype, "price6h", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 20, scale: 8 }),
    __metadata("design:type", Number)
], CoinPaprika.prototype, "price12h", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 20, scale: 8 }),
    __metadata("design:type", Number)
], CoinPaprika.prototype, "price24h", void 0);
CoinPaprika = __decorate([
    (0, typeorm_1.Entity)()
], CoinPaprika);
exports.CoinPaprika = CoinPaprika;
