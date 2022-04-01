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
var ProfileRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const module_config_1 = require("../../config/module.config");
const base_repository_1 = require("./base.repository");
const typeorm_2 = require("typeorm");
const config_service_1 = require("../../../shared/services/config.service");
const common_constant_1 = require("../../common/constants/common.constant");
let ProfileRepository = ProfileRepository_1 = class ProfileRepository extends base_repository_1.BaseRepository {
    constructor(repos, configService) {
        super(repos);
        this.repos = repos;
        this.configService = configService;
        this._logger = new common_1.Logger(ProfileRepository_1.name);
        this._nationalPhone = this.configService.get('NATIONAL_PHONE');
        this._logger.log("============== Constructor ProfileRepository ==============");
    }
    async getProfileDetailById(id) {
        const sql = `SELECT p.first_name AS firstName, p.last_name AS lastName, p.gender AS gender, p.birthday AS birthday,
            p.avatar AS avatar, 
            SUBSTR(p.phone, 
            -(CHAR_LENGTH(p.phone)-(SELECT CHAR_LENGTH('${this._nationalPhone}'))), 
            CHAR_LENGTH(p.phone)-(SELECT CHAR_LENGTH('${this._nationalPhone}'))) AS phone, p.email AS email, p.bio AS bio,
            p.city_id AS cityId, (SELECT name FROM city WHERE Id = p.city_id) AS cityName,
            p.school_id AS schoolId, (SELECT name FROM school WHERE Id = p.school_id) AS schoolName,
            p.college_id AS collegeId, (SELECT name FROM college WHERE Id = p.college_id) AS collegeName,
            p.workplace_id AS workplaceId, (SELECT name FROM workplace WHERE Id = p.workplace_id) AS workplaceName
        FROM Profile p
        WHERE p.Id = ?`;
        return await this.repos.query(sql, [id]);
    }
    async searchProfile(request) {
        let params = [];
        let sql = `SELECT p.Id AS id, p.first_name AS firstName, p.last_name AS lastName, 
        p.avatar AS avatar, (SELECT Name FROM City WHERE Id = p.city_id) AS cityName 
        FROM profile p
            INNER JOIN user u ON u.profile_id = p.id AND u.user_status = '${common_constant_1.USER_STATUS_ENUM.ACTIVE}'
        WHERE p.id > 0`;
        if (request.attribute && request.attribute.trim().length > 0) {
            sql += ` AND ((p.first_name LIKE ? ESCAPE '${common_constant_1.COMMON_CONSTANTS.PIPE_CHAR}')
                        OR (p.last_name LIKE ? ESCAPE '${common_constant_1.COMMON_CONSTANTS.PIPE_CHAR}'))`;
            params.push(common_constant_1.COMMON_CONSTANTS.PERCENT_CHAR + common_constant_1.COMMON_CONSTANTS.PIPE_CHAR + request.attribute + common_constant_1.COMMON_CONSTANTS.PERCENT_CHAR);
            params.push(common_constant_1.COMMON_CONSTANTS.PERCENT_CHAR + common_constant_1.COMMON_CONSTANTS.PIPE_CHAR + request.attribute + common_constant_1.COMMON_CONSTANTS.PERCENT_CHAR);
        }
        sql += " ORDER BY p.first_name ASC LIMIT ? OFFSET ?";
        params.push(request.pageSize);
        params.push(request.pageIndex * request.pageSize);
        return await this.repos.query(sql, params);
    }
};
ProfileRepository = ProfileRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(module_config_1.ENTITIES_CONFIG.PROFILE)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_service_1.ConfigService])
], ProfileRepository);
exports.ProfileRepository = ProfileRepository;
//# sourceMappingURL=profile.repository.js.map