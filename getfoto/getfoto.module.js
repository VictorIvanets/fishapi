"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetfotoModule = void 0;
const common_1 = require("@nestjs/common");
const getfoto_service_1 = require("./getfoto.service");
const getfoto_controller_1 = require("./getfoto.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const config_1 = require("@nestjs/config");
const getfoto_model_1 = require("./getfoto.model");
const serve_static_1 = require("@nestjs/serve-static");
const app_root_path_1 = require("app-root-path");
let GetfotoModule = class GetfotoModule {
};
exports.GetfotoModule = GetfotoModule;
exports.GetfotoModule = GetfotoModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [getfoto_controller_1.GetfotoController],
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: `${app_root_path_1.path}/upload`,
                serveRoot: '/static',
            }),
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: getfoto_model_1.GetFotoModel,
                    schemaOptions: {
                        collection: 'getfoto',
                    },
                },
            ]),
            config_1.ConfigModule,
        ],
        providers: [getfoto_service_1.GetfotoService],
        exports: [getfoto_service_1.GetfotoService],
    })
], GetfotoModule);
//# sourceMappingURL=getfoto.module.js.map