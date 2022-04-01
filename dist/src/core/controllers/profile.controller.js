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
var ProfileController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const update_profile_request_1 = require("../dtos/requests/profile/update-profile.request");
const update_avatar_request_1 = require("../dtos/requests/profile/update-avatar.request");
const search_request_1 = require("../dtos/requests/common/search.request");
let ProfileController = ProfileController_1 = class ProfileController {
    constructor(_profileService) {
        this._profileService = _profileService;
        this._logger = new common_1.Logger(ProfileController_1.name);
    }
    async getProfileById(id) {
        this._logger.log('========== Get profile by id ==========');
        return await this._profileService.getProfileById(id);
    }
    async getProfileDetailById(id) {
        this._logger.log('========== Get profile detail by id ==========');
        return await this._profileService.getProfileDetailById(id);
    }
    async updateProfile(id, request) {
        this._logger.log('========== Update profile ==========');
        return await this._profileService.updateProfile(id, request);
    }
    async updateAvatar(request) {
        this._logger.log('========== Update avatar ==========');
        return await this._profileService.updateAvatar(request);
    }
    async getCommentListByPostId(request) {
        this._logger.log('========== Search profile ==========');
        return await this._profileService.searchProfile(request);
    }
};
__decorate([
    (0, common_1.Get)(api_constant_1.URL_CONSTANTS.GET_BY_ID),
    (0, swagger_1.ApiOperation)({ summary: 'Get profile by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getProfileById", null);
__decorate([
    (0, common_1.Get)(api_constant_1.URL_CONSTANTS.GET_DETAIL),
    (0, swagger_1.ApiOperation)({ summary: 'Get profile detail by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getProfileDetailById", null);
__decorate([
    (0, common_1.Put)(api_constant_1.URL_CONSTANTS.UPDATE),
    (0, swagger_1.ApiOperation)({ summary: 'Update profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_profile_request_1.UpdateProfileRequest]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Put)(api_constant_1.URL_CONSTANTS.UPDATE_AVATAR),
    (0, swagger_1.ApiOperation)({ summary: 'Update avatar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_avatar_request_1.UpdateAvatarRequest]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateAvatar", null);
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.SEARCH),
    (0, swagger_1.ApiOperation)({ summary: 'Search profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_request_1.SearchRequest]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getCommentListByPostId", null);
ProfileController = ProfileController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.PROFILE),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.PROFILE),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.IPROFILE_SERVICE)),
    __metadata("design:paramtypes", [Object])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map