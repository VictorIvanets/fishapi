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
exports.loginDto = exports.AuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AuthDto {
}
exports.AuthDto = AuthDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'login' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'subname' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "subname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'country' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'city' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "city", void 0);
class loginDto {
}
exports.loginDto = loginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], loginDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5555' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], loginDto.prototype, "password", void 0);
//# sourceMappingURL=auth.dto.js.map