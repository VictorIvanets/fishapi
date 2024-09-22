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
exports.FotosetController = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const fotoset_service_1 = require("./fotoset.service");
const common_1 = require("@nestjs/common");
const mfile_class_1 = require("./mfile.class");
let FotosetController = class FotosetController {
    constructor(fotosetService) {
        this.fotosetService = fotosetService;
    }
    async uploadFoto(file, folder) {
        if (file) {
            console.log('upload', file);
            const saveArr = [];
            if (file.mimetype.includes('image')) {
                const buffer = await this.fotosetService.convertToWebp(file.buffer);
                saveArr.push(new mfile_class_1.MFile({
                    originalname: `${file.originalname.split('.')[0]}.webp`,
                    buffer,
                }));
            }
            return this.fotosetService.saveFoto(saveArr, folder);
        }
    }
};
exports.FotosetController = FotosetController;
__decorate([
    (0, common_1.Post)('upload/:folder'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('files')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FotosetController.prototype, "uploadFoto", null);
exports.FotosetController = FotosetController = __decorate([
    (0, common_1.Controller)('fotoset'),
    __metadata("design:paramtypes", [fotoset_service_1.FotosetService])
], FotosetController);
//# sourceMappingURL=fotoset.controller.js.map