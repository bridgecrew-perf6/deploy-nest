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
var UploadFileController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
let UploadFileController = UploadFileController_1 = class UploadFileController {
    constructor(_uploadFileService) {
        this._uploadFileService = _uploadFileService;
        this._logger = new common_1.Logger(UploadFileController_1.name);
    }
    async uploadSingleImage(file, folderName) {
        this._logger.log('========== Upload single image to S3 ==========');
        return await this._uploadFileService.uploadSingleImage(file, folderName);
    }
    async uploadMultiImage(files, folderName) {
        this._logger.log('========== Upload multi image to S3 ==========');
        return await this._uploadFileService.uploadMultiImage(files, folderName);
    }
};
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.UPLOAD_SINGLE_IMAGE),
    (0, swagger_1.ApiOperation)({ summary: 'Upload single image to S3' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '', schema: {} }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('folderName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "uploadSingleImage", null);
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.UPLOAD_MULTI_IMAGE),
    (0, swagger_1.ApiOperation)({ summary: 'Upload multi image to S3' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '', schema: {} }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('folderName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "uploadMultiImage", null);
UploadFileController = UploadFileController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.UPLOAD_FILE),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.UPLOAD_FILE),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.IUPLOAD_SERVICE)),
    __metadata("design:paramtypes", [Object])
], UploadFileController);
exports.UploadFileController = UploadFileController;
//# sourceMappingURL=upload-file.controller.js.map