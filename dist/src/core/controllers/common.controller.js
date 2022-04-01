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
var CommonController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const search_request_1 = require("../dtos/requests/common/search.request");
let CommonController = CommonController_1 = class CommonController {
    constructor(_commonService) {
        this._commonService = _commonService;
        this._logger = new common_1.Logger(CommonController_1.name);
    }
    async getCommentListByPostId(request) {
        this._logger.log('========== Search all ==========');
        return await this._commonService.searchAll(request);
    }
};
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.SEARCH),
    (0, swagger_1.ApiOperation)({ summary: 'Search all' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_request_1.SearchRequest]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "getCommentListByPostId", null);
CommonController = CommonController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.COMMON),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.COMMON),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.ICOMMON_SERVICE)),
    __metadata("design:paramtypes", [Object])
], CommonController);
exports.CommonController = CommonController;
//# sourceMappingURL=common.controller.js.map