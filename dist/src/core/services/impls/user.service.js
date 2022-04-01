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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const error_map_1 = require("../../common/error.map");
const module_config_1 = require("../../config/module.config");
const response_dto_1 = require("../../dtos/responses/response.dto");
const base_service_1 = require("./base.service");
const auto_mapper_util_1 = require("../../utils/auto-mapper/auto-mapper.util");
const mapper_config_1 = require("../../config/mapper.config");
const common_constant_1 = require("../../common/constants/common.constant");
const context_service_1 = require("../../../providers/context.service");
const bcrypt = require('bcrypt');
const jwt_1 = require("@nestjs/jwt");
const common_util_1 = require("../../utils/common.util");
let UserService = UserService_1 = class UserService extends base_service_1.BaseService {
    constructor(_userRepos, _profileRepos, _jwtService) {
        super(_userRepos);
        this._userRepos = _userRepos;
        this._profileRepos = _profileRepos;
        this._jwtService = _jwtService;
        this._logger = new common_1.Logger(UserService_1.name);
        this._commonUtil = new common_util_1.CommonUtil();
        this._logger.log("============== Constructor UserService ==============");
    }
    async createUser(request) {
        this._logger.log("============== Create user ==============");
        const res = new response_dto_1.ResponseDto;
        try {
            const checkedUser = await this._userRepos.findOne({ username: request.username });
            if (checkedUser) {
                return res.return(error_map_1.ErrorMap.E001.Code);
            }
            const profileMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.CREATE_PROFILE_MAPPING, request);
            profileMapper.birthday = new Date(`${request.birthday} ${common_constant_1.COMMON_CONSTANTS.START_TIME_STR}`);
            const profile = await this._profileRepos.create(profileMapper);
            const profileId = profile.id;
            request.username = request.username.toLowerCase();
            request.password = await this.hashPassword(request.password);
            const userMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.CREATE_USER_MAPPING, request);
            userMapper.userType = common_constant_1.USER_TYPE_ENUM.PERSONAL;
            userMapper.userStatus = common_constant_1.USER_STATUS_ENUM.ACTIVE;
            userMapper.language = common_constant_1.LANGUAGE_ENUM.VIETNAMESE;
            userMapper.profileId = profileId;
            const user = await this._userRepos.create(userMapper);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, user);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async login(request) {
        this._logger.log("============== Login ==============");
        const res = new response_dto_1.ResponseDto;
        try {
            const user = await this._userRepos.findOne({ username: request.username });
            if (!user) {
                return res.return(error_map_1.ErrorMap.E003.Code);
            }
            if (user.userStatus !== common_constant_1.USER_STATUS_ENUM.ACTIVE) {
                return res.return(error_map_1.ErrorMap.E004.Code);
            }
            const checkPassword = await this.comparePassword(request.password, user.password);
            if (!checkPassword) {
                return res.return(error_map_1.ErrorMap.E005.Code);
            }
            const data = {
                id: user.id,
                username: user.username,
                userType: user.userType,
                profileId: user.profileId
            };
            data['accessToken'] = this._jwtService.sign(data);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, data);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getUserByUsername(username) {
        this._logger.log("============== Get user by username ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const user = await this._userRepos.findOne({ username: username });
            if (!user) {
                return res.return(error_map_1.ErrorMap.E002.Code);
            }
            const currentUser = await this._commonUtil.getUsername();
            if (currentUser !== username) {
                return res.return(error_map_1.ErrorMap.E006.Code);
            }
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, user);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async updateUserLanguage(request) {
        this._logger.log("============== Update user language ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const checkedUser = await this._userRepos.findOne(request.userId);
            if (!checkedUser) {
                return res.return(error_map_1.ErrorMap.E002.Code);
            }
            const currentUsername = await this._commonUtil.getUsername();
            if (currentUsername !== checkedUser.username) {
                return res.return(error_map_1.ErrorMap.E008.Code);
            }
            const dataMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.UPDATE_USER_LANGUAGE_MAPPING, request);
            const user = await this._userRepos.update(dataMapper);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, user);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    static setAuthUser(user) {
        context_service_1.ContextService.set(this._authUserKey, user);
    }
    static getAuthUser() {
        return context_service_1.ContextService.get(this._authUserKey);
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, 12);
    }
    async comparePassword(password, storePasswordHash) {
        return await bcrypt.compare(password, storePasswordHash);
    }
};
UserService._authUserKey = common_constant_1.APP_CONSTANTS.USER_KEY;
UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IUSER_REPOSITORY)),
    __param(1, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPROFILE_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map