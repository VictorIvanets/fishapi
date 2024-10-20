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
exports.GetfotoService = void 0;
const common_1 = require("@nestjs/common");
const fs_extra_1 = require("fs-extra");
const app_root_path_1 = require("app-root-path");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const getfoto_model_1 = require("./getfoto.model");
const sharp = require("sharp");
let GetfotoService = class GetfotoService {
    constructor(getFotoModel) {
        this.getFotoModel = getFotoModel;
    }
    async getFoto(folder) {
        const setid = folder;
        const fotoBySetId = await this.getFotoModel.find({ setid }).exec();
        const res = [];
        const uploadFolder = `${app_root_path_1.path}/upload/${folder}`;
        if (fotoBySetId.length) {
            await (0, fs_extra_1.ensureDir)(uploadFolder);
            fotoBySetId.forEach(async (fotoitem) => {
                const originalname = fotoitem.filename;
                const buffer = fotoitem.imgBuffer;
                res.push(originalname);
                const check = await (0, fs_extra_1.readFile)(`${uploadFolder}/${originalname}`);
                if (!check) {
                    await (0, fs_extra_1.writeFile)(`${uploadFolder}/${originalname}`, buffer);
                }
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
    async saveFotoBd(files, folder) {
        for (const file of files) {
            const minbuffer = await this.convertToJpegMin(file.buffer);
            const filename = file.originalname;
            const fotoset = await this.getFotoModel.findOne({ filename }).exec();
            const check = fotoset?.setid === folder ? true : false;
            const checkcheck = fotoset?.filename && check ? false : true;
            if (checkcheck) {
                const res = new this.getFotoModel({
                    setid: folder,
                    filename: file.originalname,
                    imgBuffer: minbuffer,
                });
                res.save();
            }
            else {
                return;
            }
        }
        return folder;
    }
    async getAllFotoBySetId(setid) {
        const fotoByset = await this.getFotoModel.find({ setid }).exec();
        return fotoByset;
    }
    async delBySetId(setid) {
        const fotoByset = await this.getFotoModel.find({ setid }).exec();
        fotoByset.forEach((i) => {
            const _id = i._id;
            this.getFotoModel.findByIdAndDelete({ _id }).exec();
            return i.filename;
        });
        return `DEL ${setid}`;
    }
};
exports.GetfotoService = GetfotoService;
exports.GetfotoService = GetfotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(getfoto_model_1.GetFotoModel)),
    __metadata("design:paramtypes", [Object])
], GetfotoService);
//# sourceMappingURL=getfoto.service.js.map