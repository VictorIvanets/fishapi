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
exports.FishingsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FishingsDto {
}
exports.FishingsDto = FishingsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cool fising' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FishingsDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'wery good! cool fising' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FishingsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 7 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FishingsDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-12-05' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FishingsDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [50.235776468143186, 28.60992981120944],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Array)
], FishingsDto.prototype, "coords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], FishingsDto.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            deg: 'number',
            feels_like: 'number',
            grnd_level: 'number',
            gust: 'number',
            humidity: 'number',
            pressure: 'number',
            sea_level: 'number',
            sky: 'string',
            speed: 'number',
            temp: 'number',
            temp_max: 'number',
            temp_min: 'number',
        },
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], FishingsDto.prototype, "weather", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            title: 'string',
            price: 500,
            owner: 'Vasyl',
        },
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], FishingsDto.prototype, "paid", void 0);
//# sourceMappingURL=fishings.dto.js.map