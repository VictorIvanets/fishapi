"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FotosetModule = void 0;
const common_1 = require("@nestjs/common");
const fotoset_service_1 = require("./fotoset.service");
const fotoset_controller_1 = require("./fotoset.controller");
const serve_static_1 = require("@nestjs/serve-static");
const app_root_path_1 = require("app-root-path");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const fishsets_model_1 = require("../fishsets/fishsets.model");
const config_1 = require("@nestjs/config");
let FotosetModule = class FotosetModule {
};
exports.FotosetModule = FotosetModule;
exports.FotosetModule = FotosetModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: `${app_root_path_1.path}/upload`,
                serveRoot: '/static',
            }),
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
        providers: [fotoset_service_1.FotosetService],
        controllers: [fotoset_controller_1.PhotosetController],
    })
], FotosetModule);
//# sourceMappingURL=fotoset.module.js.map