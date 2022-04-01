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
var CityController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const create_city_request_1 = require("../dtos/requests/city/create-city.request");
let CityController = CityController_1 = class CityController {
    constructor(_cityService) {
        this._cityService = _cityService;
        this._logger = new common_1.Logger(CityController_1.name);
    }
    async getCityList() {
        this._logger.log('========== Get city list ==========');
        return await this._cityService.getCityList();
    }
    async createCity(request) {
        this._logger.log('========== Create city ==========');
        return await this._cityService.createCity(request);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get city list' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getCityList", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create city' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_city_request_1.CreateCityRequest]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "createCity", null);
CityController = CityController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.CITY),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.CITY),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.ICITY_SERVICE)),
    __metadata("design:paramtypes", [Object])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map