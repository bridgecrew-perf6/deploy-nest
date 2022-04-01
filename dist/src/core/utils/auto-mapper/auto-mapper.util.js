"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoMapperUtil = void 0;
const mapper_profile_util_1 = require("./mapper-profile.util");
class AutoMapperUtil {
    static createMap() {
        if (!this._mapperProfile) {
            this._mapperProfile = new mapper_profile_util_1.MapperProfile();
            ;
        }
        return this._mapperProfile;
    }
    static map(mapConfig, source) {
        const result = {};
        for (const [key, value] of Object.entries(mapConfig)) {
            result[key] = source[`${value}`];
        }
        return result;
    }
    static mapEntity(mapConfig, entity, source) {
        for (const [key, value] of Object.entries(mapConfig)) {
            entity[key] = source[`${value}`];
        }
        return entity;
    }
}
exports.AutoMapperUtil = AutoMapperUtil;
//# sourceMappingURL=auto-mapper.util.js.map