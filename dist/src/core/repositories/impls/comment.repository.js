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
var CommentRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const module_config_1 = require("../../config/module.config");
const base_repository_1 = require("./base.repository");
const typeorm_2 = require("typeorm");
let CommentRepository = CommentRepository_1 = class CommentRepository extends base_repository_1.BaseRepository {
    constructor(repos) {
        super(repos);
        this.repos = repos;
        this._logger = new common_1.Logger(CommentRepository_1.name);
        this._logger.log("============== Constructor CommentRepository ==============");
    }
    async getCommentListByPostId(request) {
        let params = [];
        const sql = `SELECT c.id AS id, c.content AS content, c.post_id AS postId, c.user_id AS userId, c.created_at AS createdAt, 
        c.updated_at AS updatedAt, pro.first_name AS firstName, pro.last_name AS lastName, pro.avatar AS avatar
        FROM Comment c
            INNER JOIN Post p ON p.id = c.post_id AND p.is_deleted = FALSE
            INNER JOIN User u ON u.id = c.user_id
            INNER JOIN Profile pro ON pro.id = u.profile_id
        WHERE c.is_deleted = FALSE AND p.id = ?
        ORDER BY c.created_at DESC
        LIMIT ? OFFSET ?`;
        params.push(request.postId);
        params.push(request.pageSize);
        params.push(request.pageIndex * request.pageSize);
        return await this.repos.query(sql, params);
    }
};
CommentRepository = CommentRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(module_config_1.ENTITIES_CONFIG.COMMENT)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentRepository);
exports.CommentRepository = CommentRepository;
//# sourceMappingURL=comment.repository.js.map