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
exports.UserEntity = void 0;
const base_entity_1 = require("./base/base.entity");
const typeorm_1 = require("typeorm");
const common_constant_1 = require("../common/constants/common.constant");
let UserEntity = class UserEntity extends base_entity_1.BaseEntityAutoId {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'username' }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: common_constant_1.USER_TYPE_ENUM,
        name: 'user_type'
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: common_constant_1.USER_STATUS_ENUM,
        name: 'user_status'
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "userStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: common_constant_1.LANGUAGE_ENUM,
        name: 'language'
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'profile_id' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "profileId", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'user' })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map