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
exports.AuthModel = exports.Sex = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
var Sex;
(function (Sex) {
    Sex["F"] = "female";
    Sex["M"] = "male";
})(Sex || (exports.Sex = Sex = {}));
class AuthModel extends defaultClasses_1.TimeStamps {
}
exports.AuthModel = AuthModel;
__decorate([
    (0, typegoose_1.prop)({ unique: true }),
    __metadata("design:type", String)
], AuthModel.prototype, "login", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuthModel.prototype, "passwordHash", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuthModel.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuthModel.prototype, "subname", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuthModel.prototype, "country", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuthModel.prototype, "city", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuthModel.prototype, "userId", void 0);
//# sourceMappingURL=auth.model.js.map