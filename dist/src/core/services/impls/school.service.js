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
var SchoolService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
const common_1 = require("@nestjs/common");
const common_constant_1 = require("../../common/constants/common.constant");
const error_map_1 = require("../../common/error.map");
const module_config_1 = require("../../config/module.config");
const response_dto_1 = require("../../dtos/responses/response.dto");
const base_service_1 = require("./base.service");
const mapper_config_1 = require("../../config/mapper.config");
const auto_mapper_util_1 = require("../../utils/auto-mapper/auto-mapper.util");
let SchoolService = SchoolService_1 = class SchoolService extends base_service_1.BaseService {
    constructor(_schoolRepos) {
        super(_schoolRepos);
        this._schoolRepos = _schoolRepos;
        this._logger = new common_1.Logger(SchoolService_1.name);
        this._logger.log("============== Constructor SchoolService ==============");
    }
    async getSchoolList() {
        this._logger.log("============== Get school list ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const listSchool = await this._schoolRepos.findByCondition({ isActive: true }, { id: common_constant_1.ORDER_BY.ASC });
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, listSchool);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async createSchool(request) {
        this._logger.log("============== Create school ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const dataMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.CREATE_SCHOOL_MAPPING, request);
            dataMapper.isActive = true;
            const school = await this._schoolRepos.create(dataMapper);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, school);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
};
SchoolService = SchoolService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.ISCHOOL_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], SchoolService);
exports.SchoolService = SchoolService;
//# sourceMappingURL=school.service.js.map