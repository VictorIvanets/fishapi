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
exports.FishModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
class FishModel extends defaultClasses_1.TimeStamps {
}
exports.FishModel = FishModel;
__decorate([
    (0, typegoose_1.prop)({ unique: true }),
    __metadata("design:type", Number)
], FishModel.prototype, "setID", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], FishModel.prototype, "login", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], FishModel.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], FishModel.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], FishModel.prototype, "score", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], FishModel.prototype, "date", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [Number] }),
    __metadata("design:type", Array)
], FishModel.prototype, "coords", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], FishModel.prototype, "db", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [String] }),
    __metadata("design:type", Array)
], FishModel.prototype, "img", void 0);
//# sourceMappingURL=fishsets.model.js.map