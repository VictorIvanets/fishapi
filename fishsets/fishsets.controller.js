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
exports.FishsetsController = void 0;
const common_1 = require("@nestjs/common");
const fishsets_service_1 = require("./fishsets.service");
const comment_service_1 = require("../comment/comment.service");
const getPhoto_service_1 = require("../getPhoto/getPhoto.service");
const swagger_1 = require("@nestjs/swagger");
let FishsetsController = class FishsetsController {
    constructor(fishService, commentService, getfotoService) {
        this.fishService = fishService;
        this.commentService = commentService;
        this.getfotoService = getfotoService;
    }
};
exports.FishsetsController = FishsetsController;
exports.FishsetsController = FishsetsController = __decorate([
    (0, swagger_1.ApiTags)('fishsets old'),
    (0, common_1.Controller)('fishsets'),
    __metadata("design:paramtypes", [fishsets_service_1.FishsetsService,
        comment_service_1.CommentService,
        getPhoto_service_1.GetPhotoService])
], FishsetsController);
//# sourceMappingURL=fishsets.controller.js.map