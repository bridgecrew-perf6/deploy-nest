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
exports.UpdatePostRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const common_constant_1 = require("../../../common/constants/common.constant");
const update_photo_in_post_request_1 = require("./update-photo-in-post.request");
class UpdatePostRequest {
}
__decorate([
    (0, class_validator_1.MaxLength)(10000, { message: 'Content must be less than or equal to 10000 characters.' }),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostRequest.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Privacy setting id is required' }),
    (0, class_validator_1.IsEnum)(common_constant_1.PRIVACY_SETTING, { message: 'Privacy setting id is invalid' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostRequest.prototype, "privacySettingId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => update_photo_in_post_request_1.UpdatePhotoInPostRequest),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UpdatePostRequest.prototype, "photoList", void 0);
exports.UpdatePostRequest = UpdatePostRequest;
//# sourceMappingURL=update-post.request.js.map