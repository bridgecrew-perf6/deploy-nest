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
exports.PostEntity = void 0;
const base_entity_1 = require("./base/base.entity");
const typeorm_1 = require("typeorm");
const common_constant_1 = require("../common/constants/common.constant");
let PostEntity = class PostEntity extends base_entity_1.BaseEntityAutoId {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'content', length: 10000 }),
    __metadata("design:type", String)
], PostEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: common_constant_1.PRIVACY_SETTING,
        name: 'privacy_setting_id'
    }),
    __metadata("design:type", String)
], PostEntity.prototype, "privacySettingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'likes' }),
    __metadata("design:type", Number)
], PostEntity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], PostEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_deleted' }),
    __metadata("design:type", Boolean)
], PostEntity.prototype, "isDeleted", void 0);
PostEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'post' })
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=post.entity.js.map