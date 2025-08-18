"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishingsModule = void 0;
const common_1 = require("@nestjs/common");
const fishings_controller_1 = require("./fishings.controller");
const fishings_service_1 = require("./fishings.service");
const config_1 = require("@nestjs/config");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const fishings_model_1 = require("./fishings.model");
let FishingsModule = class FishingsModule {
};
exports.FishingsModule = FishingsModule;
exports.FishingsModule = FishingsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [fishings_controller_1.FishingsController],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: fishings_model_1.FishingsModel,
                    schemaOptions: {
                        collection: 'fishings',
                    },
                },
            ]),
            config_1.ConfigModule,
        ],
        providers: [fishings_service_1.FishingsService],
    })
], FishingsModule);
//# sourceMappingURL=fishings.module.js.map