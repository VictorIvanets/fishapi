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
exports.ChatResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const new_comment_input_1 = require("./dto/new-comment.input");
const chat_service_1 = require("./chat.service");
const chat_model_1 = require("./models/chat.model");
const pubSub = new graphql_subscriptions_1.PubSub();
let ChatResolver = class ChatResolver {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async comment(comId) {
        const comment = await this.chatService.findOneById(comId);
        if (!comment) {
            throw new common_1.NotFoundException(comId);
        }
        return comment;
    }
    allComments() {
        return this.chatService.findAll('chat');
    }
    async addComment(newCommentData) {
        const comment = await this.chatService.create(newCommentData);
        const allComment = await this.chatService.findAll('chat');
        pubSub.publish('commentAdded', { commentAdded: allComment });
        return comment;
    }
    async deleteComment(comId) {
        const chek = await this.chatService.remove(comId);
        const allComment = await this.chatService.findAll('chat');
        pubSub.publish('commentAdded', { commentAdded: allComment });
        return chek;
    }
    commentAdded() {
        return pubSub.asyncIterator('commentAdded');
    }
};
exports.ChatResolver = ChatResolver;
__decorate([
    (0, graphql_1.Query)(() => chat_model_1.Chat),
    __param(0, (0, graphql_1.Args)('comId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "comment", null);
__decorate([
    (0, graphql_1.Query)(() => [chat_model_1.Chat]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "allComments", null);
__decorate([
    (0, graphql_1.Mutation)(() => chat_model_1.Chat),
    __param(0, (0, graphql_1.Args)('newCommentData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_comment_input_1.NewCommentInput]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "addComment", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('comId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "deleteComment", null);
__decorate([
    (0, graphql_1.Subscription)(() => [chat_model_1.Chat]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ChatResolver.prototype, "commentAdded", null);
exports.ChatResolver = ChatResolver = __decorate([
    (0, graphql_1.Resolver)(() => chat_model_1.Chat),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatResolver);
//# sourceMappingURL=chat.resolver.js.map