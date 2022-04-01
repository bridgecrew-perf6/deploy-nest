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
exports.ProfileEntity = void 0;
const base_entity_1 = require("./base/base.entity");
const typeorm_1 = require("typeorm");
let ProfileEntity = class ProfileEntity extends base_entity_1.BaseEntityAutoId {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name' }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name' }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender' }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'birthday' }),
    __metadata("design:type", Date)
], ProfileEntity.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone' }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email' }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bio' }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'avatar' }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city_id' }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'school_id' }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "schoolId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'college_id' }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "collegeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'workplace_id' }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "workplaceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'relationship_id' }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "relationshipId", void 0);
ProfileEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'profile' })
], ProfileEntity);
exports.ProfileEntity = ProfileEntity;
//# sourceMappingURL=profile.entity.js.map