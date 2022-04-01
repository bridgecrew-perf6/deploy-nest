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
var SchoolController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const create_school_request_1 = require("../dtos/requests/school/create-school.request");
let SchoolController = SchoolController_1 = class SchoolController {
    constructor(_schoolService) {
        this._schoolService = _schoolService;
        this._logger = new common_1.Logger(SchoolController_1.name);
    }
    async getSchoolList() {
        this._logger.log('========== Get school list ==========');
        return await this._schoolService.getSchoolList();
    }
    async createSchool(request) {
        this._logger.log('========== Create school ==========');
        return await this._schoolService.createSchool(request);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get school list' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "getSchoolList", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create school' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_school_request_1.CreateSchoolRequest]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "createSchool", null);
SchoolController = SchoolController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.SCHOOL),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.SCHOOL),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.ISCHOOL_SERVICE)),
    __metadata("design:paramtypes", [Object])
], SchoolController);
exports.SchoolController = SchoolController;
//# sourceMappingURL=school.controller.js.map