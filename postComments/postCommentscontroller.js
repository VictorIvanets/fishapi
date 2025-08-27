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
exports.PostsCommentsController = void 0;
const common_1 = require("@nestjs/common");
const postComments_service_1 = require("./postComments.service");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const postCommentsdto_1 = require("./postCommentsdto");
const auth_decorator_1 = require("../auth/auth.decorator");
let PostsCommentsController = class PostsCommentsController {
    constructor(postsCommentService) {
        this.postsCommentService = postsCommentService;
    }
    async setComment(dto, user) {
        return await this.postsCommentService.createComment(dto, user);
    }
    async getComment(postId) {
        const comments = await this.postsCommentService.getCommentBySetId(postId);
        return comments.reverse();
    }
    async delComment(id) {
        return await this.postsCommentService.delCommById(id);
    }
    async delAllComment(setId) {
        return await this.postsCommentService.delCommBySetId(setId);
    }
};
exports.PostsCommentsController = PostsCommentsController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postCommentsdto_1.PostCommentsDto, Object]),
    __metadata("design:returntype", Promise)
], PostsCommentsController.prototype, "setComment", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':postId'),
    __param(0, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsCommentsController.prototype, "getComment", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsCommentsController.prototype, "delComment", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)('post/:postId'),
    __param(0, (0, common_1.Param)('setId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsCommentsController.prototype, "delAllComment", null);
exports.PostsCommentsController = PostsCommentsController = __decorate([
    (0, swagger_1.ApiTags)('PostComment'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('postcomment'),
    __metadata("design:paramtypes", [postComments_service_1.PostsCommentsService])
], PostsCommentsController);
//# sourceMappingURL=postCommentscontroller.js.map