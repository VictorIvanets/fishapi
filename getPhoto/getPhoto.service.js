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
exports.GetPhotoService = void 0;
const common_1 = require("@nestjs/common");
const fs_extra_1 = require("fs-extra");
const app_root_path_1 = require("app-root-path");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const getPhoto_model_1 = require("./getPhoto.model");
const sharp = require("sharp");
let GetPhotoService = class GetPhotoService {
    constructor(getPhotoModel) {
        this.getPhotoModel = getPhotoModel;
    }
    async getFoto(folder) {
        const fotoBySetId = await this.getPhotoModel.find({ setid: folder }).exec();
        const res = [];
        const uploadFolder = `${app_root_path_1.path}/upload/${folder}`;
        if (fotoBySetId.length) {
            await (0, fs_extra_1.ensureDir)(uploadFolder);
            fotoBySetId.forEach(async (photoitem) => {
                const originalname = photoitem.filename;
                const buffer = photoitem.imgBuffer;
                res.push({ originalname, _id: photoitem._id.toString() });
                await (0, fs_extra_1.writeFile)(`${uploadFolder}/${originalname}`, buffer);
            });
            return res;
        }
        else
            return res;
    }
    convertToJpegMin(file) {
        const size = file.byteLength;
        if (size <= 200000) {
            return sharp(file).jpeg().toBuffer();
        }
        if (size > 200000 && size <= 500000) {
            return sharp(file).jpeg({ quality: 75 }).toBuffer();
        }
        if (size > 500000 && size <= 2000000) {
            return sharp(file).resize(1000).jpeg({ quality: 75 }).toBuffer();
        }
        if (size > 2000000) {
            return sharp(file).resize(1500).jpeg({ quality: 75 }).toBuffer();
        }
    }
    async savePhotoBd(files, folder) {
        for (const file of files) {
            const minbuffer = await this.convertToJpegMin(file.buffer);
            const filename = file.originalname;
            const fotoset = await this.getPhotoModel.find({ setid: folder }).exec();
            const exist = fotoset.filter((i) => i.filename === filename);
            if (!exist.length) {
                const res = new this.getPhotoModel({
                    setid: folder,
                    filename: file.originalname,
                    imgBuffer: minbuffer,
                });
                res.save();
                return res;
            }
            else {
                return null;
            }
        }
    }
    async getAllPhotoBySetId(setid) {
        const fotoByset = await this.getPhotoModel.find({ setid }).exec();
        return fotoByset;
    }
    async delBySetId(setid) {
        try {
            const fotoByset = await this.getPhotoModel.find({ setid }).exec();
            const filePath = `${app_root_path_1.path}/upload/${setid}`;
            await (0, fs_extra_1.remove)(filePath);
            await (0, fs_extra_1.ensureDir)(`${app_root_path_1.path}/upload`);
            fotoByset.forEach(async (i) => {
                await this.getPhotoModel.findByIdAndDelete({ _id: setid }).exec();
            });
            return `DEL ${setid}`;
        }
        catch (e) {
            console.log(e);
        }
    }
    async delPhotoById(_id) {
        const getPhoto = await this.getPhotoModel.findOne({ _id });
        try {
            const filePath = `${app_root_path_1.path}/upload/${getPhoto.setid}/${getPhoto.filename}`;
            await (0, fs_extra_1.remove)(filePath);
        }
        catch (e) {
            console.log(e);
        }
        const fotoByset = await this.getPhotoModel.deleteOne({ _id }).exec();
        if (fotoByset.deletedCount === 1)
            return { success: true, id: _id };
        return { success: false, message: 'Фото з таким ID не знайдено' };
    }
    async delBy_Id(id) {
        return await this.getPhotoModel.findOneAndDelete({ _id: id }).exec();
    }
};
exports.GetPhotoService = GetPhotoService;
exports.GetPhotoService = GetPhotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(getPhoto_model_1.GetPhotoModel)),
    __metadata("design:paramtypes", [Object])
], GetPhotoService);
//# sourceMappingURL=getPhoto.service.js.map