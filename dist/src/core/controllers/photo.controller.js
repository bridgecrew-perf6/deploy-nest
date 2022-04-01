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
var PhotoController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const get_photo_list_by_user_id_request_1 = require("../dtos/requests/photo/get-photo-list-by-user-id.request");
let PhotoController = PhotoController_1 = class PhotoController {
    constructor(_photoService) {
        this._photoService = _photoService;
        this._logger = new common_1.Logger(PhotoController_1.name);
    }
    async getPhotoListByUserId(request) {
        this._logger.log('========== Get photo list by user id ==========');
        return await this._photoService.getPhotoListByUserId(request);
    }
    async deletePostById(id) {
        this._logger.log('========== Delete photo ==========');
        return await this._photoService.deletePhotoById(id);
    }
    async getPhotoById(id) {
        this._logger.log('========== Get photo by id ==========');
        return await this._photoService.getPhotoById(id);
    }
};
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.GET_PHOTO_LIST_BY_USER_ID),
    (0, swagger_1.ApiOperation)({ summary: 'Get photo list by user id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_photo_list_by_user_id_request_1.GetPhotoListByUserIdRequest]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "getPhotoListByUserId", null);
__decorate([
    (0, common_1.Delete)(api_constant_1.URL_CONSTANTS.DELETE),
    (0, swagger_1.ApiOperation)({ summary: 'Delete photo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "deletePostById", null);
__decorate([
    (0, common_1.Get)(api_constant_1.URL_CONSTANTS.GET_BY_ID),
    (0, swagger_1.ApiOperation)({ summary: 'Get photo by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "getPhotoById", null);
PhotoController = PhotoController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.PHOTO),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.PHOTO),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.IPHOTO_SERVICE)),
    __metadata("design:paramtypes", [Object])
], PhotoController);
exports.PhotoController = PhotoController;
//# sourceMappingURL=photo.controller.js.map