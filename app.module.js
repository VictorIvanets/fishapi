"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const mongo_config_1 = require("./config/mongo-config");
const fishsets_module_1 = require("./fishsets/fishsets.module");
const fotoset_module_1 = require("./fotoset/fotoset.module");
const comment_module_1 = require("./comment/comment.module");
const getPhoto_module_1 = require("./getPhoto/getPhoto.module");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const upper_case_directive_1 = require("./common/directives/upper-case.directive");
const graphql_2 = require("graphql");
const chat_module_1 = require("./chat/chat.module");
const userInOut_module_1 = require("./userInOut/userInOut.module");
const fishings_module_1 = require("./fishings/fishings.module");
const photo_module_1 = require("./photoFishing/photo.module");
const posts_module_1 = require("./posts/posts.module");
const postComments_module_1 = require("./postComments/postComments.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            nestjs_typegoose_1.TypegooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: mongo_config_1.getMongoConfig,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: 'schema.gql',
                transformSchema: (schema) => (0, upper_case_directive_1.upperDirectiveTransformer)(schema, 'upper'),
                playground: true,
                subscriptions: {
                    'graphql-ws': true,
                    'subscriptions-transport-ws': true,
                },
                buildSchemaOptions: {
                    directives: [
                        new graphql_2.GraphQLDirective({
                            name: 'upper',
                            locations: [graphql_2.DirectiveLocation.FIELD_DEFINITION],
                        }),
                    ],
                },
            }),
            userInOut_module_1.UserInOutModule,
            chat_module_1.ChatModule,
            auth_module_1.AuthModule,
            fishsets_module_1.FishsetsModule,
            fotoset_module_1.FotosetModule,
            comment_module_1.CommentModule,
            getPhoto_module_1.GetPhotoModule,
            fishings_module_1.FishingsModule,
            photo_module_1.PhotoModule,
            posts_module_1.PostsModule,
            postComments_module_1.PostsCommentsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map