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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../auth/auth.decorator");
const posts_dto_1 = require("./posts.dto");
const postComments_service_1 = require("../postComments/postComments.service");
let PostsController = class PostsController {
    constructor(postsService, postsCommentService) {
        this.postsService = postsService;
        this.postsCommentService = postsCommentService;
    }
    async create(dto, user) {
        return await this.postsService.createPost(dto, user);
    }
    async getUserPost(user, limit = '10', cursor, description) {
        return await this.postsService.myPosts(user, +limit, cursor, description);
    }
    async getAllPost(limit = '10', cursor, description) {
        return await this.postsService.allPosts(+limit, cursor, description);
    }
    async delSet(id) {
        await this.postsCommentService.delCommBySetId(id);
        return await this.postsService.delById(id);
    }
    async getPostById(id) {
        return await this.postsService.getPostById(id);
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [posts_dto_1.PostsDto, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "create", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('user'),
    __param(0, (0, auth_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('cursor')),
    __param(3, (0, common_1.Query)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getUserPost", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('cursor')),
    __param(2, (0, common_1.Query)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getAllPost", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "delSet", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('onepost/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPostById", null);
exports.PostsController = PostsController = __decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        postComments_service_1.PostsCommentsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map