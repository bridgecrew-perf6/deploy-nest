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
exports.UpdateUserLanguageRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const common_constant_1 = require("../../../common/constants/common.constant");
class UpdateUserLanguageRequest {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'User id is required' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateUserLanguageRequest.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Language is required' }),
    (0, class_validator_1.IsEnum)(common_constant_1.LANGUAGE_ENUM, { message: 'Language is invalid' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateUserLanguageRequest.prototype, "language", void 0);
exports.UpdateUserLanguageRequest = UpdateUserLanguageRequest;
//# sourceMappingURL=update-user-language.request.js.map