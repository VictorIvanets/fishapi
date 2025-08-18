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
exports.PhotoService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const sharp = require("sharp");
const fishings_model_1 = require("../fishings/fishings.model");
let PhotoService = class PhotoService {
    constructor(fishingsModel) {
        this.fishingsModel = fishingsModel;
    }
    async savePhoto(files, setid, imgId) {
        const res = [];
        for (const file of files) {
            const fishset = await this.fishingsModel.findOne({ _id: setid }).exec();
            const checkDouble = fishset.img.find((i) => i.url === `${setid}/${file.originalname}`);
            if (!checkDouble) {
                fishset.img.unshift({
                    url: `${setid}/${file.originalname}`,
                    imgId,
                });
            }
            const resultLoad = await this.fishingsModel
                .findByIdAndUpdate(fishset._id, fishset, { new: true })
                .exec();
            res.push({
                url: `${setid}/${file.originalname}`,
                name: file.originalname,
                _id: resultLoad._id.toString(),
            });
        }
        return res;
    }
    convertToWebp(file) {
        return sharp(file).webp().toBuffer();
    }
};
exports.PhotoService = PhotoService;
exports.PhotoService = PhotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(fishings_model_1.FishingsModel)),
    __metadata("design:paramtypes", [Object])
], PhotoService);
//# sourceMappingURL=photo.service.js.map