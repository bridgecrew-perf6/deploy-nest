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
exports.UpdateProfileRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const common_constant_1 = require("../../../common/constants/common.constant");
class UpdateProfileRequest {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'First name is required' }),
    (0, class_validator_1.MaxLength)(255, { message: 'First name must be less than or equal to 255 characters.' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileRequest.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Last name is required' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Last name must be less than or equal to 255 characters.' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileRequest.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Gender is required' }),
    (0, class_validator_1.IsEnum)(common_constant_1.GENDER_ENUM, { message: 'Gender is invalid' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileRequest.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Birthday is required' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileRequest.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileRequest.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email is invalid' }),
    (0, class_validator_1.Matches)(common_constant_1.COMMON_CONSTANTS.REGEX_EMAIL, { message: 'Email is invalid' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(150, { message: 'Bio must be less than or equal to 150 characters.' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileRequest.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateProfileRequest.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateProfileRequest.prototype, "schoolId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateProfileRequest.prototype, "collegeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateProfileRequest.prototype, "workplaceId", void 0);
exports.UpdateProfileRequest = UpdateProfileRequest;
//# sourceMappingURL=update-profile.request.js.map