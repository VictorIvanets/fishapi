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
exports.PhotosetController = void 0;
const fotoset_service_1 = require("./fotoset.service");
const common_1 = require("@nestjs/common");
const getPhoto_service_1 = require("../getPhoto/getPhoto.service");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
let PhotosetController = class PhotosetController {
    constructor(photosetService, getfotoService) {
        this.photosetService = photosetService;
        this.getfotoService = getfotoService;
    }
};
exports.PhotosetController = PhotosetController;
exports.PhotosetController = PhotosetController = __decorate([
    (0, swagger_1.ApiTags)('Photoset'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('photoset'),
    __metadata("design:paramtypes", [fotoset_service_1.FotosetService,
        getPhoto_service_1.GetPhotoService])
], PhotosetController);
//# sourceMappingURL=fotoset.controller.js.map