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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const posts_model_1 = require("./posts.model");
const static_1 = require("../STATIC/static");
const mongoose_1 = require("mongoose");
let PostsService = class PostsService {
    constructor(postsModel) {
        this.postsModel = postsModel;
    }
    async createPost(dto, user) {
        const newPost = new this.postsModel({
            userLogin: user.login,
            userId: user._id,
            description: dto.description,
            colorSchema: dto.colorSchema,
        });
        return await newPost.save();
    }
    async myPosts(user, limit, cursor, description) {
        try {
            const filter = { userId: user._id };
            if (cursor) {
                filter._id = { $lt: new mongoose_1.Types.ObjectId(cursor) };
            }
            if (description) {
                filter.description = { $regex: new RegExp(description, 'i') };
            }
            const results = await this.postsModel
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
    async allPosts(limit, cursor, description) {
        try {
            const filter = {};
            if (cursor) {
                filter._id = { $lt: new mongoose_1.Types.ObjectId(cursor) };
            }
            if (description) {
                filter.description = { $regex: new RegExp(description, 'i') };
            }
            const results = await this.postsModel
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
    async delById(id) {
        const res = await this.postsModel.deleteOne({ _id: id }).exec();
        if (res.deletedCount === 1)
            return { success: true, id };
        return { success: false, message: 'Коментарія з таким ID не знайдено' };
    }
    async getPostById(id) {
        try {
            return await this.postsModel.findOne({ _id: id }).exec();
        }
        catch (e) {
            throw new common_1.UnauthorizedException(static_1.INVALID_ID, e);
        }
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(posts_model_1.PostsModel)),
    __metadata("design:paramtypes", [Object])
], PostsService);
//# sourceMappingURL=posts.service.js.map