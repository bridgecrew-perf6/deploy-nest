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
var ProfileService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const error_map_1 = require("../../common/error.map");
const module_config_1 = require("../../config/module.config");
const response_dto_1 = require("../../dtos/responses/response.dto");
const base_service_1 = require("./base.service");
const auto_mapper_util_1 = require("../../utils/auto-mapper/auto-mapper.util");
const mapper_config_1 = require("../../config/mapper.config");
const common_util_1 = require("../../utils/common.util");
let ProfileService = ProfileService_1 = class ProfileService extends base_service_1.BaseService {
    constructor(_profileRepos, _userRepos) {
        super(_profileRepos);
        this._profileRepos = _profileRepos;
        this._userRepos = _userRepos;
        this._logger = new common_1.Logger(ProfileService_1.name);
        this._commonUtil = new common_util_1.CommonUtil();
        this._logger.log("============== Constructor ProfileService ==============");
    }
    async getProfileById(id) {
        this._logger.log("============== Get profile by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const profile = await this._profileRepos.findOne(id);
            if (!profile) {
                return res.return(error_map_1.ErrorMap.E007.Code);
            }
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, profile);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getProfileDetailById(id) {
        this._logger.log("============== Get profile detail by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const profile = await this._profileRepos.getProfileDetailById(id);
            if (!profile) {
                return res.return(error_map_1.ErrorMap.E007.Code);
            }
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, profile[0]);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async updateProfile(id, request) {
        this._logger.log("============== Update profile ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const checkedProfile = await this._profileRepos.findOne(id);
            if (!checkedProfile) {
                return res.return(error_map_1.ErrorMap.E007.Code);
            }
            const currentUserId = await this._commonUtil.getUserId();
            const currentUser = await this._userRepos.findOne(currentUserId);
            if (currentUser.profileId !== id) {
                return res.return(error_map_1.ErrorMap.E008.Code);
            }
            request.phone = this._commonUtil.createNationalPhone(request.phone);
            const dataMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.UPDATE_PROFILE_MAPPING, request);
            dataMapper.id = id;
            const profile = await this._profileRepos.update(dataMapper);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, profile);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async updateAvatar(request) {
        this._logger.log("============== Update avatar ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const checkedProfile = await this._profileRepos.findOne(request.profileId);
            if (!checkedProfile) {
                return res.return(error_map_1.ErrorMap.E007.Code);
            }
            const currentUserId = await this._commonUtil.getUserId();
            const currentUser = await this._userRepos.findOne(currentUserId);
            if (currentUser.profileId !== request.profileId) {
                return res.return(error_map_1.ErrorMap.E008.Code);
            }
            const dataMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.UPDATE_AVATAR_MAPPING, request);
            const profile = await this._profileRepos.update(dataMapper);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, profile);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async searchProfile(request) {
        this._logger.log("============== Search news ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const profileList = await this._profileRepos.searchProfile(request);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, profileList);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
};
ProfileService = ProfileService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPROFILE_REPOSITORY)),
    __param(1, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IUSER_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map