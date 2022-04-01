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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PhotoRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const module_config_1 = require("../../config/module.config");
const base_repository_1 = require("./base.repository");
const typeorm_2 = require("typeorm");
let PhotoRepository = PhotoRepository_1 = class PhotoRepository extends base_repository_1.BaseRepository {
    constructor(repos) {
        super(repos);
        this.repos = repos;
        this._logger = new common_1.Logger(PhotoRepository_1.name);
        this._logger.log("============== Constructor PhotoRepository ==============");
    }
    async getPhotoListByUserId(request) {
        let params = [];
        const sql = `SELECT pt.id AS id, pt.file_name AS fileName, pt.post_id AS postId, pt.is_deleted AS isDeleted,
        pt.created_at AS createdAt, pt.updated_at AS updatedAt
        FROM Photo pt
            INNER JOIN Post p ON p.id = pt.post_id AND p.is_deleted = FALSE
            INNER JOIN User u ON u.id = p.user_id
        WHERE u.id = ? AND pt.is_deleted = FALSE
        ORDER BY pt.created_at DESC
        LIMIT ? OFFSET ?`;
        params.push(request.userId);
        params.push(request.pageSize);
        params.push(request.pageIndex * request.pageSize);
        return await this.repos.query(sql, params);
    }
};
PhotoRepository = PhotoRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(module_config_1.ENTITIES_CONFIG.PHOTO)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhotoRepository);
exports.PhotoRepository = PhotoRepository;
//# sourceMappingURL=photo.repository.js.map