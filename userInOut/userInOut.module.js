"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInOutModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const config_1 = require("@nestjs/config");
const user_model_1 = require("./user.model");
const user_service_1 = require("./user.service");
const user_resolver_1 = require("./user.resolver");
const date_scalar_1 = require("./scalars/date.scalar");
let UserInOutModule = class UserInOutModule {
};
exports.UserInOutModule = UserInOutModule;
exports.UserInOutModule = UserInOutModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [user_resolver_1.UserResolver, user_service_1.UserService, date_scalar_1.DateScalarUser],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: user_model_1.UserModel,
                    schemaOptions: {
                        collection: 'userInOut',
                    },
                },
            ]),
            config_1.ConfigModule,
        ],
        exports: [user_service_1.UserService],
    })
], UserInOutModule);
//# sourceMappingURL=userInOut.module.js.map