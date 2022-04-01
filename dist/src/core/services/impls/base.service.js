"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const error_map_1 = require("../../common/error.map");
const response_dto_1 = require("../../dtos/responses/response.dto");
class BaseService {
    constructor(repos) {
        this._log = new common_1.Logger(BaseService.name);
        this._repos = repos;
    }
    async findOne(id) {
        const response = new response_dto_1.ResponseDto();
        const result = await this._repos.findOne(id);
        return response.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
    }
    async findByCondition(condition, orderBy = null) {
        const response = new response_dto_1.ResponseDto();
        const result = await this._repos.findByCondition(condition, orderBy);
        return response.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
    }
    async findAll(orderBy) {
        const response = new response_dto_1.ResponseDto();
        const result = await this._repos.findAll(orderBy);
        return response.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
    }
    async create(data) {
        const response = new response_dto_1.ResponseDto();
        const result = await this._repos.create(data);
        return response.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
    }
    async update(data) {
        const response = new response_dto_1.ResponseDto();
        const result = await this._repos.update(data);
        return response.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
    }
    async remove(id) {
        const response = new response_dto_1.ResponseDto();
        const result = await this._repos.remove(id);
        return response.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map