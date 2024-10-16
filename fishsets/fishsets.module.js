"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishsetsModule = void 0;
const common_1 = require("@nestjs/common");
const fishsets_controller_1 = require("./fishsets.controller");
const fishsets_service_1 = require("./fishsets.service");
const config_1 = require("@nestjs/config");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const fishsets_model_1 = require("./fishsets.model");
let FishsetsModule = class FishsetsModule {
};
exports.FishsetsModule = FishsetsModule;
exports.FishsetsModule = FishsetsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [fishsets_controller_1.FishsetsController],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: fishsets_model_1.FishModel,
                    schemaOptions: {
                        collection: 'fishsets',
                    },
                },
            ]),
            config_1.ConfigModule,
        ],
        providers: [fishsets_service_1.FishsetsService],
    })
], FishsetsModule);
//# sourceMappingURL=fishsets.module.js.map