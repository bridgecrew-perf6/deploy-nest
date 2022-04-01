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
var WorkplaceController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkplaceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const create_workplace_request_1 = require("../dtos/requests/workplace/create-workplace.request");
let WorkplaceController = WorkplaceController_1 = class WorkplaceController {
    constructor(_workplaceService) {
        this._workplaceService = _workplaceService;
        this._logger = new common_1.Logger(WorkplaceController_1.name);
    }
    async getWorkplaceList() {
        this._logger.log('========== Get workplace list ==========');
        return await this._workplaceService.getWorkplaceList();
    }
    async createSchool(request) {
        this._logger.log('========== Create workplace ==========');
        return await this._workplaceService.createWorkplace(request);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get workplace list' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "getWorkplaceList", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create workplace' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_workplace_request_1.CreateWorkplaceRequest]),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "createSchool", null);
WorkplaceController = WorkplaceController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.WORKPLACE),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.WORKPLACE),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.IWORKPLACE_SERVICE)),
    __metadata("design:paramtypes", [Object])
], WorkplaceController);
exports.WorkplaceController = WorkplaceController;
//# sourceMappingURL=workplace.controller.js.map