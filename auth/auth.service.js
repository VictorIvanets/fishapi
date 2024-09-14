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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const auth_model_1 = require("./auth.model");
const USER_NOT_FOUND = 'Такого користувача не знайдено';
const PASS_NOT_CORRECT = 'Невірний пароль';
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser(dto) {
        const salt = (0, bcryptjs_1.genSaltSync)(10);
        const newUser = new this.userModel({
            login: dto.login,
            passwordHash: (0, bcryptjs_1.hashSync)(dto.password, salt),
            name: dto.name,
            subname: dto.subname,
            age: dto.age,
            sex: dto.sex,
            country: dto.country,
            city: dto.city,
            img: dto.img,
        });
        console.log(newUser);
        return newUser.save();
    }
    async findUser(login) {
        return this.userModel.findOne({ login }).exec();
    }
    async validateUser(login, password) {
        const user = await this.findUser(login);
        if (!user) {
            throw new common_1.UnauthorizedException(USER_NOT_FOUND);
        }
        const isCorrectPass = await (0, bcryptjs_1.compare)(password, user.passwordHash);
        if (!isCorrectPass) {
            throw new common_1.UnauthorizedException(PASS_NOT_CORRECT);
        }
        return { login: user.login };
    }
    async login(login) {
        const payload = { login };
        return {
            access_token: await this.jwtService.signAsync(payload),
            login: login,
        };
    }
    async findByLogin(login) {
        const user = await this.findUser(login);
        return user;
    }
    async delByLogin(login) {
        const { _id } = await this.findUser(login);
        this.userModel.findByIdAndDelete(_id).exec();
        return `delete: ${login}`;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(auth_model_1.AuthModel)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map