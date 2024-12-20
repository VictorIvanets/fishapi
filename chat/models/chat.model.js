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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const graphql_1 = require("@nestjs/graphql");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const typegoose_1 = require("@typegoose/typegoose");
let Chat = class Chat extends defaultClasses_1.TimeStamps {
};
exports.Chat = Chat;
__decorate([
    (0, typegoose_1.prop)({ unique: true }),
    (0, graphql_1.Field)((type) => graphql_1.ID),
    __metadata("design:type", String)
], Chat.prototype, "comId", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], Chat.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Chat.prototype, "comment", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], Chat.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Chat.prototype, "createdAt", void 0);
exports.Chat = Chat = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Chat' })
], Chat);
//# sourceMappingURL=chat.model.js.map