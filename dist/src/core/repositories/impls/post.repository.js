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
var PostRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const module_config_1 = require("../../config/module.config");
const base_repository_1 = require("./base.repository");
const typeorm_2 = require("typeorm");
const common_constant_1 = require("../../common/constants/common.constant");
let PostRepository = PostRepository_1 = class PostRepository extends base_repository_1.BaseRepository {
    constructor(repos) {
        super(repos);
        this.repos = repos;
        this._logger = new common_1.Logger(PostRepository_1.name);
        this._logger.log("============== Constructor PostRepository ==============");
    }
    async getPostListNewsFeed(request) {
        let params = [];
        const sql = `SELECT p.id AS id, p.content AS content, p.privacy_setting_id AS privacySettingId, p.likes AS likes, 
        p.user_id AS userId, p.created_at AS createdAt, p.updated_at AS updatedAt,
        (SELECT COUNT(c.id) FROM comment c WHERE c.post_id = p.id) AS totalComment
        FROM Post p
            INNER JOIN User u ON u.id = p.user_id
            INNER JOIN Profile pro ON pro.id = u.profile_id
            LEFT JOIN Relationship r ON r.id = pro.relationship_id
        WHERE ( p.user_id = ? 
            OR ( p.user_id = r.user_id_2 AND r.user_id_1 = ? ) )
            AND p.is_deleted = FALSE
        ORDER BY p.created_at DESC
        LIMIT ? OFFSET ?`;
        params.push(request.userId);
        params.push(request.userId);
        params.push(request.pageSize);
        params.push(request.pageIndex * request.pageSize);
        return await this.repos.query(sql, params);
    }
    async getPostListWall(request) {
        let params = [];
        const sql = `SELECT p.id AS id, p.content AS content, p.privacy_setting_id AS privacySettingId, p.likes AS likes, 
        p.user_id AS userId, p.created_at AS createdAt, p.updated_at AS updatedAt, 
        (SELECT COUNT(c.id) FROM comment c WHERE c.post_id = p.id) AS totalComment
        FROM Post p
        WHERE p.user_id = ? AND p.is_deleted = FALSE
        ORDER BY p.created_at DESC
        LIMIT ? OFFSET ?`;
        params.push(request.userId);
        params.push(request.pageSize);
        params.push(request.pageIndex * request.pageSize);
        return await this.repos.query(sql, params);
    }
    async getListUsersLikePost(request) {
        let params = [];
        const sql = `SELECT pro.avatar AS avatar, pro.first_name AS firstName, pro.last_name AS lastName
        FROM post_liked_users plu
            INNER JOIN post p ON p.id = plu.post_id AND p.is_deleted = FALSE
            INNER JOIN user u ON u.id = plu.user_id AND u.user_status = '${common_constant_1.USER_STATUS_ENUM.ACTIVE}'
            INNER JOIN profile pro ON pro.id = u.profile_id
        WHERE plu.post_id = ? AND plu.is_deleted = FALSE
        ORDER BY plu.created_at DESC
        LIMIT ? OFFSET ?`;
        params.push(request.postId);
        params.push(request.pageSize);
        params.push(request.pageIndex * request.pageSize);
        return await this.repos.query(sql, params);
    }
    async searchPost(request) {
        let params = [];
        let sql = `SELECT pro.first_name AS firstName, pro.last_name AS lastName, pro.avatar AS avatar, 
        p.Id AS id, p.content AS content, p.created_at AS createdAt 
        FROM post p
            INNER JOIN user u ON u.id = p.user_id AND u.user_status = '${common_constant_1.USER_STATUS_ENUM.ACTIVE}'
            INNER JOIN profile pro ON pro.id = u.profile_id
        WHERE p.id > 0 AND p.is_deleted = FALSE`;
        if (request.attribute && request.attribute.trim().length > 0) {
            sql += ` AND (p.content LIKE ? ESCAPE '${common_constant_1.COMMON_CONSTANTS.PIPE_CHAR}')`;
            params.push(common_constant_1.COMMON_CONSTANTS.PERCENT_CHAR + common_constant_1.COMMON_CONSTANTS.PIPE_CHAR + request.attribute + common_constant_1.COMMON_CONSTANTS.PERCENT_CHAR);
        }
        sql += " ORDER BY p.created_at ASC LIMIT ? OFFSET ?";
        params.push(request.pageSize);
        params.push(request.pageIndex * request.pageSize);
        return await this.repos.query(sql, params);
    }
};
PostRepository = PostRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(module_config_1.ENTITIES_CONFIG.POST)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostRepository);
exports.PostRepository = PostRepository;
//# sourceMappingURL=post.repository.js.map