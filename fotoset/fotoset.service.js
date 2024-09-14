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
exports.FotosetService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const app_root_path_1 = require("app-root-path");
const fs_extra_1 = require("fs-extra");
const sharp = require("sharp");
const fishsets_model_1 = require("../fishsets/fishsets.model");
let FotosetService = class FotosetService {
    constructor(fishModel) {
        this.fishModel = fishModel;
    }
    async saveFoto(files, folder) {
        const uploadFolder = `${app_root_path_1.path}/upload/${folder}`;
        await (0, fs_extra_1.ensureDir)(uploadFolder);
        const res = [];
        for (const file of files) {
            await (0, fs_extra_1.writeFile)(`${uploadFolder}/${file.originalname}`, file.buffer);
            res.push({
                url: `${folder}/${file.originalname}`,
                name: file.originalname,
            });
            const setID = folder;
            const fishset = await this.fishModel.findOne({ setID }).exec();
            if (fishset) {
                const notDouble = await this.fishModel.findOne({ setID }).exec();
                const checkDouble = notDouble.img.includes(`${folder}/${file.originalname}`);
                if (!checkDouble) {
                    fishset.img.unshift(`${folder}/${file.originalname}`);
                }
            }
            this.fishModel
                .findByIdAndUpdate(fishset._id, fishset, { new: true })
                .exec();
        }
        return res;
    }
    convertToWebp(file) {
        return sharp(file).webp().toBuffer();
    }
};
exports.FotosetService = FotosetService;
exports.FotosetService = FotosetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(fishsets_model_1.FishModel)),
    __metadata("design:paramtypes", [Object])
], FotosetService);
//# sourceMappingURL=fotoset.service.js.map