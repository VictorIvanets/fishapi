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
exports.FishingsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const fishings_model_1 = require("./fishings.model");
const static_1 = require("../STATIC/static");
const mongoose_1 = require("mongoose");
let FishingsService = class FishingsService {
    constructor(fishingsModel) {
        this.fishingsModel = fishingsModel;
    }
    async createFishing(dto, user) {
        const newFishing = new this.fishingsModel({
            folderName: `${(Math.random() * 100000).toFixed()}`,
            userName: user.login,
            userId: user._id,
            title: dto.title,
            description: dto.description,
            score: dto.score,
            date: dto.date,
            coords: dto.coords,
            db: static_1.DB_STRING,
            img: [],
            weather: dto.weather,
            imgdb: [],
            paid: user.login === 'admin' ? dto.paid : undefined,
        });
        return await newFishing.save();
    }
    async updateFishing(id, dto) {
        try {
            return await this.fishingsModel
                .findByIdAndUpdate(id, dto, { new: true })
                .exec();
        }
        catch (e) {
            throw new common_1.UnauthorizedException(static_1.INVALID_ID, e);
        }
    }
    async deletePhotoInFishing(dto) {
        try {
            const oneFising = await this.fishingsModel
                .findOne({ _id: dto.setId })
                .exec();
            const newImg = oneFising.img.filter((i) => i.imgId !== dto.photoId);
            oneFising.img = newImg;
            return await this.fishingsModel
                .findByIdAndUpdate(dto.setId, oneFising, { new: true })
                .exec();
        }
        catch (e) {
            throw new common_1.UnauthorizedException(static_1.INVALID_ID, e);
        }
    }
    async findUserFishings(user, limit, cursor, title, description) {
        try {
            const filter = { userId: user._id };
            if (cursor) {
                filter._id = { $lt: new mongoose_1.Types.ObjectId(cursor) };
            }
            if (title) {
                filter.title = { $regex: new RegExp(title, 'i') };
            }
            if (description) {
                filter.description = { $regex: new RegExp(description, 'i') };
            }
            filter.paid = undefined;
            const results = await this.fishingsModel
                .find(filter)
                .sort({ _id: -1 })
                .limit(limit + 1)
                .exec();
            const hasNextPage = results.length > limit;
            const data = hasNextPage ? results.slice(0, -1) : results;
            const nextCursor = hasNextPage
                ? data[data.length - 1]._id.toString()
                : null;
            return { data, nextCursor };
        }
        catch (e) {
            throw new common_1.UnauthorizedException(e);
        }
    }
    async findAllFishing(limit, cursor, title, description) {
        try {
            const filter = {};
            if (cursor) {
                filter._id = { $lt: new mongoose_1.Types.ObjectId(cursor) };
            }
            if (title) {
                filter.title = { $regex: new RegExp(title, 'i') };
            }
            if (description) {
                filter.description = { $regex: new RegExp(description, 'i') };
            }
            filter.paid = undefined;
            const results = await this.fishingsModel
                .find(filter)
                .sort({ _id: -1 })
                .limit(limit + 1)
                .exec();
            const hasNextPage = results.length > limit;
            const data = hasNextPage ? results.slice(0, -1) : results;
            const nextCursor = hasNextPage
                ? data[data.length - 1]._id.toString()
                : null;
            return { data, nextCursor };
        }
        catch (e) {
            throw new common_1.UnauthorizedException(e);
        }
    }
    async findAllPaidFishing(limit, cursor, title, description) {
        try {
            const filter = {};
            if (cursor) {
                filter._id = { $lt: new mongoose_1.Types.ObjectId(cursor) };
            }
            if (title) {
                filter.title = { $regex: new RegExp(title, 'i') };
            }
            if (description) {
                filter.description = { $regex: new RegExp(description, 'i') };
            }
            filter.paid = { $exists: true, $ne: null };
            const results = await this.fishingsModel
                .find(filter)
                .sort({ _id: -1 })
                .limit(limit + 1)
                .exec();
            const hasNextPage = results.length > limit;
            const data = hasNextPage ? results.slice(0, -1) : results;
            const nextCursor = hasNextPage
                ? data[data.length - 1]._id.toString()
                : null;
            return { data, nextCursor };
        }
        catch (e) {
            throw new common_1.UnauthorizedException(e);
        }
    }
    async findAllFishingRorMap() {
        try {
            const filter = {};
            const results = await this.fishingsModel.find().exec();
            const response = results.map((i) => {
                return {
                    _id: i._id.toString(),
                    title: i.title,
                    coords: i.coords,
                    score: i.score,
                    description: i.description,
                    userId: i.userId.toString(),
                    paid: i.paid,
                };
            });
            return response;
        }
        catch (e) {
            throw new common_1.UnauthorizedException(e);
        }
    }
    async delById(id) {
        try {
            return await this.fishingsModel.findOneAndDelete({ _id: id }).exec();
        }
        catch (e) {
            throw new common_1.UnauthorizedException(static_1.INVALID_ID, e);
        }
    }
    async getFishingById(id) {
        try {
            return await this.fishingsModel.findOne({ _id: id }).exec();
        }
        catch (e) {
            throw new common_1.UnauthorizedException(static_1.INVALID_ID, e);
        }
    }
};
exports.FishingsService = FishingsService;
exports.FishingsService = FishingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(fishings_model_1.FishingsModel)),
    __metadata("design:paramtypes", [Object])
], FishingsService);
//# sourceMappingURL=fishings.service.js.map