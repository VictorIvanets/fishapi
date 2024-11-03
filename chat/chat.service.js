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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const chat_model_1 = require("./models/chat.model");
let ChatService = class ChatService {
    constructor(chat) {
        this.chat = chat;
    }
    async create(data) {
        const dto = {
            comId: (Math.random() * 100000).toFixed(),
            user: data.user,
            title: 'chat',
            comment: data.comment,
        };
        const newComment = new this.chat(dto);
        return newComment.save();
    }
    async findOneById(comId) {
        const commOne = await this.chat.findOne({ comId }).exec();
        console.log(commOne);
        if (!commOne) {
            throw new Error(`${comId} comment not found`);
        }
        return commOne;
    }
    async findAll(title) {
        const commAll = await this.chat.find({ title }).exec();
        if (!commAll) {
            throw new Error(`error get all comment`);
        }
        const date = new Date();
        if (commAll.length > 100) {
            commAll.forEach(async (i) => {
                if (+date - +i.createdAt > 7200000) {
                    const comId = i.comId;
                    await this.chat.findOneAndDelete({ comId }).exec();
                }
                else {
                    return;
                }
            });
        }
        return commAll;
    }
    async remove(comId) {
        const del = await this.chat.findOneAndDelete({ comId }).exec();
        if (!del) {
            throw new Error(`${comId} comment not found`);
        }
        else {
            return true;
        }
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(chat_model_1.Chat)),
    __metadata("design:paramtypes", [Object])
], ChatService);
//# sourceMappingURL=chat.service.js.map