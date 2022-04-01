'use strict';
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
exports.BaseEntityAutoId = exports.BaseEntityUUID = exports.BaseEntityId = exports.BaseEntity = void 0;
const typeorm_1 = require("typeorm");
class BaseEntity {
}
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        name: 'created_at',
    }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        name: 'updated_at',
    }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_by' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_by' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "updatedBy", void 0);
exports.BaseEntity = BaseEntity;
class BaseEntityId extends BaseEntity {
}
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id' }),
    __metadata("design:type", String)
], BaseEntityId.prototype, "id", void 0);
exports.BaseEntityId = BaseEntityId;
class BaseEntityUUID extends BaseEntity {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", { name: 'id' }),
    __metadata("design:type", String)
], BaseEntityUUID.prototype, "id", void 0);
exports.BaseEntityUUID = BaseEntityUUID;
class BaseEntityAutoId extends BaseEntity {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id' }),
    __metadata("design:type", Number)
], BaseEntityAutoId.prototype, "id", void 0);
exports.BaseEntityAutoId = BaseEntityAutoId;
//# sourceMappingURL=base.entity.js.map