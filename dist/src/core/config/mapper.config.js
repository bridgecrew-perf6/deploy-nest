"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAPPER_CONFIG = void 0;
const auto_mapper_util_1 = require("../utils/auto-mapper/auto-mapper.util");
exports.MAPPER_CONFIG = {
    CREATE_USER_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.username, s.password])
        .fromProperties((s) => [s.username, s.password]),
    CREATE_PROFILE_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.firstName, s.lastName, s.gender])
        .fromProperties((s) => [s.firstName, s.lastName, s.gender]),
    UPDATE_PROFILE_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.firstName, s.lastName, s.gender, s.birthday, s.phone, s.email, s.bio, s.cityId, s.schoolId, s.collegeId, s.workplaceId])
        .fromProperties((s) => [s.firstName, s.lastName, s.gender, s.birthday, s.phone, s.email, s.bio, s.cityId, s.schoolId, s.collegeId, s.workplaceId]),
    UPDATE_USER_LANGUAGE_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.id, s.language])
        .fromProperties((s) => [s.userId, s.language]),
    CREATE_POST_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.content, s.privacySettingId])
        .fromProperties((s) => [s.content, s.privacySettingId]),
    UPDATE_POST_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.content, s.privacySettingId])
        .fromProperties((s) => [s.content, s.privacySettingId]),
    UPDATE_AVATAR_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.id, s.avatar])
        .fromProperties((s) => [s.profileId, s.avatar]),
    CREATE_COMMENT_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.postId, s.content])
        .fromProperties((s) => [s.postId, s.content]),
    UPDATE_COMMENT_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.content])
        .fromProperties((s) => [s.content]),
    CREATE_CITY_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.name])
        .fromProperties((s) => [s.name]),
    CREATE_COLLEGE_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.name])
        .fromProperties((s) => [s.name]),
    CREATE_SCHOOL_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.name])
        .fromProperties((s) => [s.name]),
    CREATE_WORKPLACE_MAPPING: auto_mapper_util_1.AutoMapperUtil.createMap().mapProperties((s) => [s.name])
        .fromProperties((s) => [s.name]),
};
//# sourceMappingURL=mapper.config.js.map