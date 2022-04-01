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
var UserController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const create_user_request_1 = require("../dtos/requests/user/create-user.request");
const login_request_1 = require("../dtos/requests/user/login.request");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const update_user_language_request_1 = require("../dtos/requests/user/update-user-language.request");
let UserController = UserController_1 = class UserController {
    constructor(_userService) {
        this._userService = _userService;
        this._logger = new common_1.Logger(UserController_1.name);
    }
    async registerUser(request) {
        this._logger.log('========== Register user ==========');
        return await this._userService.createUser(request);
    }
    async signin(request) {
        this._logger.log(`========== Login ==========`);
        return await this._userService.login(request);
    }
    async getUserByUsername(username) {
        this._logger.log('========== Get user by username ==========');
        return await this._userService.getUserByUsername(username);
    }
    async updateUserLanguage(request) {
        this._logger.log('========== Update user language ==========');
        return await this._userService.updateUserLanguage(request);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Register user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_request_1.CreateUserRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.LOGIN),
    (0, swagger_1.ApiOperation)({ summary: 'Login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_1.LoginRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)(api_constant_1.URL_CONSTANTS.GET_BY_USERNAME),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by username' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByUsername", null);
__decorate([
    (0, common_1.Put)(api_constant_1.URL_CONSTANTS.UPDATE_LANGUAGE),
    (0, swagger_1.ApiOperation)({ summary: 'Update user language' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_language_request_1.UpdateUserLanguageRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserLanguage", null);
UserController = UserController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.USER),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.USER),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.IUSER_SERVICE)),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map