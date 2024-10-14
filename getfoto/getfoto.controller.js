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
exports.GetfotoController = void 0;
const common_1 = require("@nestjs/common");
const getfoto_service_1 = require("./getfoto.service");
const common_2 = require("@nestjs/common");
let GetfotoController = class GetfotoController {
    constructor(getfotoService) {
        this.getfotoService = getfotoService;
    }
    async getFotoById(folder) {
        return this.getfotoService.getFoto(folder);
    }
    async getAllFotoBySetId(folder) {
        return this.getfotoService.getAllFotoBySetId(folder);
    }
    async delBySetId(folder) {
        return this.getfotoService.delBySetId(folder);
    }
};
exports.GetfotoController = GetfotoController;
__decorate([
    (0, common_1.Get)('get/:folder'),
    (0, common_2.HttpCode)(200),
    __param(0, (0, common_2.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GetfotoController.prototype, "getFotoById", null);
__decorate([
    (0, common_1.Get)('getall/:folder'),
    (0, common_2.HttpCode)(200),
    __param(0, (0, common_2.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GetfotoController.prototype, "getAllFotoBySetId", null);
__decorate([
    (0, common_1.Delete)('del/:folder'),
    (0, common_2.HttpCode)(200),
    __param(0, (0, common_2.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GetfotoController.prototype, "delBySetId", null);
exports.GetfotoController = GetfotoController = __decorate([
    (0, common_1.Controller)('getfoto'),
    __metadata("design:paramtypes", [getfoto_service_1.GetfotoService])
], GetfotoController);
//# sourceMappingURL=getfoto.controller.js.map