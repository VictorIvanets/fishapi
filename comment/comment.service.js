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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const comment_model_1 = require("./comment.model");
let CommentService = class CommentService {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
    async createComment(dto) {
        const newComment = new this.commentModel({
            login: dto.login,
            setId: dto.setId,
            db: 'comment',
            comment: dto.comment,
            commId: dto.commId,
        });
        console.log(newComment);
        return newComment.save();
    }
    async getCommentBySetId(setId) {
        return this.commentModel.find({ setId }).exec();
    }
    async delCommById(commId) {
        const res = this.commentModel.findOneAndDelete({ commId }).exec();
        return `delete ${commId}`;
    }
    async delCommBySetId(setId) {
        const result = await this.commentModel.find({ setId }).exec();
        result.forEach((i) => {
            const setId = i.setId;
            this.commentModel.findOneAndDelete({ setId }).exec();
        });
        return `del comment for ${setId}`;
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(comment_model_1.CommentModel)),
    __metadata("design:paramtypes", [Object])
], CommentService);
//# sourceMappingURL=comment.service.js.map