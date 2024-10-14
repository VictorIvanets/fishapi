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
exports.FishsetsController = void 0;
const common_1 = require("@nestjs/common");
const fishsets_service_1 = require("./fishsets.service");
const fishsets_dto_1 = require("./fishsets.dto");
const comment_service_1 = require("../comment/comment.service");
const getfoto_service_1 = require("../getfoto/getfoto.service");
let FishsetsController = class FishsetsController {
    constructor(fishService, commentService, getfotoService) {
        this.fishService = fishService;
        this.commentService = commentService;
        this.getfotoService = getfotoService;
    }
    async sets(dto) {
        return await this.fishService.createSets(dto);
    }
    async getSets(login) {
        return await this.fishService.findUserSets(login);
    }
    async getAllSets(db) {
        const res = await this.fishService.findAllSets(db);
        const output = res.map((i) => {
            const news = {
                title: i.title,
                description: i.description,
                score: i.score,
                coords: i.coords,
                date: i.date,
                setID: i.setID,
                img: i.img,
                weather: i.weather,
            };
            return news;
        });
        return output;
    }
    async delSet(id) {
        await this.getfotoService.delBySetId(id);
        await this.commentService.delCommBySetId(id);
        return await this.fishService.delById(id);
    }
    async getSetsById(id) {
        const { title, description, score, coords, date, setID, img, login, weather, } = await this.fishService.getSetsById(id);
        const output = {
            login: login,
            title: title,
            description: description,
            score: score,
            coords: coords,
            date: date,
            setID: setID,
            img: img,
            weather: weather,
        };
        return output;
    }
};
exports.FishsetsController = FishsetsController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('sets'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fishsets_dto_1.FishDto]),
    __metadata("design:returntype", Promise)
], FishsetsController.prototype, "sets", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':login'),
    __param(0, (0, common_1.Param)('login')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FishsetsController.prototype, "getSets", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('all/:db'),
    __param(0, (0, common_1.Param)('db')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FishsetsController.prototype, "getAllSets", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FishsetsController.prototype, "delSet", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('onesets/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FishsetsController.prototype, "getSetsById", null);
exports.FishsetsController = FishsetsController = __decorate([
    (0, common_1.Controller)('fishsets'),
    __metadata("design:paramtypes", [fishsets_service_1.FishsetsService,
        comment_service_1.CommentService,
        getfoto_service_1.GetfotoService])
], FishsetsController);
//# sourceMappingURL=fishsets.controller.js.map