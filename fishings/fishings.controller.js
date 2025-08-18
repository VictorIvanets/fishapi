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
exports.FishingsController = void 0;
const common_1 = require("@nestjs/common");
const fishings_service_1 = require("./fishings.service");
const fishings_dto_1 = require("./fishings.dto");
const comment_service_1 = require("../comment/comment.service");
const getPhoto_service_1 = require("../getPhoto/getPhoto.service");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../auth/auth.decorator");
let FishingsController = class FishingsController {
    constructor(fishingsService, commentService, getfotoService) {
        this.fishingsService = fishingsService;
        this.commentService = commentService;
        this.getfotoService = getfotoService;
    }
    async create(dto, user) {
        return await this.fishingsService.createFishing(dto, user);
    }
    async update(dto, id) {
        return await this.fishingsService.updateFishing(id, dto);
    }
    async dletePhoto(dto) {
        const deletedPhoto = await this.getfotoService.delPhotoById(dto.photoId);
        const updeteFishing = await this.fishingsService.deletePhotoInFishing(dto);
        if (deletedPhoto.success && updeteFishing) {
            return { success: true, id: dto.photoId };
        }
        else
            return { success: false, message: 'Фото з таким ID не знайдено' };
    }
    async getFishing(user, limit = '10', cursor, title, description) {
        return await this.fishingsService.findUserFishings(user, +limit, cursor, title, description);
    }
    async getAllFishings(limit = '10', cursor, title, description) {
        return await this.fishingsService.findAllFishing(+limit, cursor, title, description);
    }
    async getAllPaidFishings(limit = '10', cursor, title, description) {
        return await this.fishingsService.findAllPaidFishing(+limit, cursor, title, description);
    }
    async getAllFishingsForMap() {
        return await this.fishingsService.findAllFishingRorMap();
    }
    async delSet(id) {
        await this.getfotoService.delBySetId(id);
        await this.commentService.delCommBySetId(id);
        return await this.fishingsService.delById(id);
    }
    async getSetsById(id) {
        return await this.fishingsService.getFishingById(id);
    }
};
exports.FishingsController = FishingsController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fishings_dto_1.FishingsDto, Object]),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "create", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fishings_dto_1.FishingsDto, String]),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('deletephoto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "dletePhoto", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('user'),
    __param(0, (0, auth_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('cursor')),
    __param(3, (0, common_1.Query)('title')),
    __param(4, (0, common_1.Query)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String, String]),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "getFishing", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('cursor')),
    __param(2, (0, common_1.Query)('title')),
    __param(3, (0, common_1.Query)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "getAllFishings", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('paid'),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('cursor')),
    __param(2, (0, common_1.Query)('title')),
    __param(3, (0, common_1.Query)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "getAllPaidFishings", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('allformap'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "getAllFishingsForMap", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "delSet", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('onesets/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FishingsController.prototype, "getSetsById", null);
exports.FishingsController = FishingsController = __decorate([
    (0, swagger_1.ApiTags)('Fishings'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('fishings'),
    __metadata("design:paramtypes", [fishings_service_1.FishingsService,
        comment_service_1.CommentService,
        getPhoto_service_1.GetPhotoService])
], FishingsController);
//# sourceMappingURL=fishings.controller.js.map