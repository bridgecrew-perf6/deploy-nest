"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const common_1 = require("@nestjs/common");
const common_util_1 = require("../../utils/common.util");
class BaseRepository {
    constructor(repos) {
        this._log = new common_1.Logger(BaseRepository.name);
        this._commonUtil = new common_util_1.CommonUtil();
        this._repos = repos;
    }
    async findOne(id) {
        this._log.log(`============== Call method findOne width parameters:${id} ==============`);
        return await this._repos.findOne(id);
    }
    async findByCondition(condition, orderBy = null) {
        this._log.log(`============== Call method findOne width parameters: condition:${this.convertObjectToJson(condition)}, orderBy: ${this.convertObjectToJson(orderBy)} ==============`);
        const opt = { where: condition };
        if (orderBy) {
            opt["order"] = orderBy;
        }
        return await this._repos.find(opt);
    }
    async findAll(orderBy) {
        if (orderBy) {
            return await this._repos.find({ order: orderBy });
        }
        else {
            return await this._repos.find();
        }
    }
    async create(data) {
        const username = await this._commonUtil.getUsername();
        data.createdAt = this._commonUtil.currentDate();
        data.updatedAt = data.createdAt;
        data.createdBy = username;
        data.updatedBy = username;
        return await this._repos.save(data);
    }
    async update(data) {
        const username = await this._commonUtil.getUsername();
        data.updatedAt = this._commonUtil.currentDate();
        data.updatedBy = username;
        return await this._repos.save(data);
    }
    async remove(id) {
        return await this._repos.delete(id);
    }
    convertObjectToJson(obj) {
        return JSON.stringify(obj);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map