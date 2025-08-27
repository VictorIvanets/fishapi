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
exports.PostsCommentsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const postComments_model_1 = require("./postComments.model");
let PostsCommentsService = class PostsCommentsService {
    constructor(postCommentsModel) {
        this.postCommentsModel = postCommentsModel;
    }
    async createComment(dto, user) {
        const newComment = new this.postCommentsModel({
            login: user.login,
            useId: user._id,
            postId: dto.postId,
            comment: dto.comment,
        });
        const res = await newComment.save();
        return res;
    }
    async getCommentBySetId(postId) {
        return this.postCommentsModel.find({ postId }).exec();
    }
    async delCommById(_id) {
        const res = await this.postCommentsModel.deleteOne({ _id }).exec();
        if (res.deletedCount === 1)
            return { success: true, id: _id };
        return { success: false, message: 'Коментарія з таким ID не знайдено' };
    }
    async delCommBySetId(postId) {
        const res = await this.postCommentsModel.deleteMany({ postId }).exec();
        return {
            success: res.deletedCount > 0,
            id: postId,
            message: `Видалено коментарів: ${res.deletedCount}`,
        };
    }
};
exports.PostsCommentsService = PostsCommentsService;
exports.PostsCommentsService = PostsCommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(postComments_model_1.PostCommentsModel)),
    __metadata("design:paramtypes", [Object])
], PostsCommentsService);
//# sourceMappingURL=postComments.service.js.map