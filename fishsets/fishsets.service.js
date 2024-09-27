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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishsetsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const fishsets_model_1 = require("./fishsets.model");
let FishsetsService = class FishsetsService {
    constructor(fishModel) {
        this.fishModel = fishModel;
    }
    async createSets(dto) {
        const newSets = new this.fishModel({
            login: dto.login,
            title: dto.title,
            description: dto.description,
            score: dto.score,
            date: dto.date,
            coords: dto.coords,
            setID: dto.setID,
            db: 'database',
            img: [],
            weather: dto.weather,
        });
        console.log(newSets);
        return newSets.save();
    }
    async findUserSets(login) {
        return this.fishModel.find({ login }).exec();
    }
    async findAllSets(db) {
        return this.fishModel.find({ db }).exec();
    }
    async delById(setID) {
        const res = this.fishModel.find({ setID }).exec();
        if (res) {
            this.fishModel.findOneAndDelete({ setID }).exec();
            return `delete`;
        }
        else {
            return `error delete`;
        }
    }
    async getSetsById(setID) {
        return this.fishModel.findOne({ setID }).exec();
    }
};
exports.FishsetsService = FishsetsService;
exports.FishsetsService = FishsetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(fishsets_model_1.FishModel)),
    __metadata("design:paramtypes", [Object])
], FishsetsService);
//# sourceMappingURL=fishsets.service.js.map