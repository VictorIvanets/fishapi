"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsCommentsModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const config_1 = require("@nestjs/config");
const postComments_model_1 = require("./postComments.model");
const postCommentscontroller_1 = require("./postCommentscontroller");
const postComments_service_1 = require("./postComments.service");
let PostsCommentsModule = class PostsCommentsModule {
};
exports.PostsCommentsModule = PostsCommentsModule;
exports.PostsCommentsModule = PostsCommentsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [postCommentscontroller_1.PostsCommentsController],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: postComments_model_1.PostCommentsModel,
                    schemaOptions: {
                        collection: 'postcomments',
                    },
                },
            ]),
            config_1.ConfigModule,
        ],
        providers: [postComments_service_1.PostsCommentsService],
        exports: [postComments_service_1.PostsCommentsService],
    })
], PostsCommentsModule);
//# sourceMappingURL=postComments.module.js.map