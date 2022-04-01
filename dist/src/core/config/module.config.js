"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE_REQUEST = exports.REQUEST_CONFIG = exports.REPOSITORY_INTERFACE = exports.SERVICE_INTERFACE = exports.ENTITIES_CONFIG = void 0;
const create_city_request_1 = require("../dtos/requests/city/create-city.request");
const create_college_request_1 = require("../dtos/requests/college/create-college.request");
const create_comment_request_1 = require("../dtos/requests/comment/create-comment.request");
const update_comment_request_1 = require("../dtos/requests/comment/update-comment.request");
const create_post_request_1 = require("../dtos/requests/post/create-post.request");
const update_post_request_1 = require("../dtos/requests/post/update-post.request");
const update_avatar_request_1 = require("../dtos/requests/profile/update-avatar.request");
const update_profile_request_1 = require("../dtos/requests/profile/update-profile.request");
const create_school_request_1 = require("../dtos/requests/school/create-school.request");
const create_user_request_1 = require("../dtos/requests/user/create-user.request");
const update_user_language_request_1 = require("../dtos/requests/user/update-user-language.request");
const create_workplace_request_1 = require("../dtos/requests/workplace/create-workplace.request");
const city_entity_1 = require("../entities/city.entity");
const college_entity_1 = require("../entities/college.entity");
const comment_entity_1 = require("../entities/comment.entity");
const device_entity_1 = require("../entities/device.entity");
const photo_entity_1 = require("../entities/photo.entity");
const post_liked_users_entity_1 = require("../entities/post-liked-users.entity");
const post_entity_1 = require("../entities/post.entity");
const profile_entity_1 = require("../entities/profile.entity");
const school_entity_1 = require("../entities/school.entity");
const user_entity_1 = require("../entities/user.entity");
const workplace_entity_1 = require("../entities/workplace.entity");
exports.ENTITIES_CONFIG = {
    CITY: city_entity_1.CityEntity,
    SCHOOL: school_entity_1.SchoolEntity,
    COLLEGE: college_entity_1.CollegeEntity,
    WORKPLACE: workplace_entity_1.WorkplaceEntity,
    USER: user_entity_1.UserEntity,
    PROFILE: profile_entity_1.ProfileEntity,
    POST: post_entity_1.PostEntity,
    PHOTO: photo_entity_1.PhotoEntity,
    COMMENT: comment_entity_1.CommentEntity,
    POST_LIKED_USERS: post_liked_users_entity_1.PostLikedUsersEntity,
    DEVICE: device_entity_1.DeviceEntity
};
exports.SERVICE_INTERFACE = {
    ICOMMON_SERVICE: 'ICommonService',
    ICITY_SERVICE: 'ICityService',
    ISCHOOL_SERVICE: 'ISchoolService',
    ICOLLEGE_SERVICE: 'ICollegeService',
    IWORKPLACE_SERVICE: 'IWorkplaceService',
    IUSER_SERVICE: 'IUserService',
    IPROFILE_SERVICE: 'IProfilerService',
    IPOST_SERVICE: 'IPostService',
    IPHOTO_SERVICE: 'IPhotoService',
    IUPLOAD_SERVICE: 'IUploadService',
    ICOMMENT_SERVICE: 'ICommentService'
};
exports.REPOSITORY_INTERFACE = {
    ICITY_REPOSITORY: 'ICityRepository',
    ISCHOOL_REPOSITORY: 'ISchoolRepository',
    ICOLLEGE_REPOSITORY: 'ICollegeRepository',
    IWORKPLACE_REPOSITORY: 'IWorkplaceRepository',
    IUSER_REPOSITORY: 'IUserRepository',
    IPROFILE_REPOSITORY: 'IProfileRepository',
    IPOST_REPOSITORY: 'IPostRepository',
    IPHOTO_REPOSITORY: 'IPhotoRepository',
    ICOMMENT_REPOSITORY: 'ICommentRepository',
    IPOST_LIKED_USERS_REPOSITORY: 'IPostLikedUsersRepository',
    IDEVICE_REPOSITORY: 'IDeviceRepository'
};
exports.REQUEST_CONFIG = {
    CREATE_USER_REQUEST: create_user_request_1.CreateUserRequest,
    UPDATE_PROFILE_REQUEST: update_profile_request_1.UpdateProfileRequest,
    UPDATE_USER_LANGUAGE_REQUEST: update_user_language_request_1.UpdateUserLanguageRequest,
    CREATE_POST_REQUEST: create_post_request_1.CreatePostRequest,
    UPDATE_POST_REQUEST: update_post_request_1.UpdatePostRequest,
    UPDATE_AVATAR_REQUEST: update_avatar_request_1.UpdateAvatarRequest,
    CREATE_COMMENT_REQUEST: create_comment_request_1.CreateCommentRequest,
    UPDATE_COMMENT_REQUEST: update_comment_request_1.UpdateCommentRequest,
    CREATE_CITY_REQUEST: create_city_request_1.CreateCityRequest,
    CREATE_COLLEGE_REQUEST: create_college_request_1.CreateCollegeRequest,
    CREATE_SCHOOL_REQUEST: create_school_request_1.CreateSchoolRequest,
    CREATE_WORKPLACE_REQUEST: create_workplace_request_1.CreateWorkplaceRequest,
};
var MODULE_REQUEST;
(function (MODULE_REQUEST) {
    class CreateUserAbstractRequest extends exports.REQUEST_CONFIG.CREATE_USER_REQUEST {
    }
    MODULE_REQUEST.CreateUserAbstractRequest = CreateUserAbstractRequest;
    class UpdateProfileAbstractRequest extends exports.REQUEST_CONFIG.UPDATE_PROFILE_REQUEST {
    }
    MODULE_REQUEST.UpdateProfileAbstractRequest = UpdateProfileAbstractRequest;
    class UpdateUserLanguageAbstractRequest extends exports.REQUEST_CONFIG.UPDATE_USER_LANGUAGE_REQUEST {
    }
    MODULE_REQUEST.UpdateUserLanguageAbstractRequest = UpdateUserLanguageAbstractRequest;
    class CreatePostAbstractRequest extends exports.REQUEST_CONFIG.CREATE_POST_REQUEST {
    }
    MODULE_REQUEST.CreatePostAbstractRequest = CreatePostAbstractRequest;
    class UpdatePostAbstractRequest extends exports.REQUEST_CONFIG.UPDATE_POST_REQUEST {
    }
    MODULE_REQUEST.UpdatePostAbstractRequest = UpdatePostAbstractRequest;
    class UpdateAvatarAbstractRequest extends exports.REQUEST_CONFIG.UPDATE_AVATAR_REQUEST {
    }
    MODULE_REQUEST.UpdateAvatarAbstractRequest = UpdateAvatarAbstractRequest;
    class CreateCommentAbstractRequest extends exports.REQUEST_CONFIG.CREATE_COMMENT_REQUEST {
    }
    MODULE_REQUEST.CreateCommentAbstractRequest = CreateCommentAbstractRequest;
    class UpdateCommentAbstractRequest extends exports.REQUEST_CONFIG.UPDATE_COMMENT_REQUEST {
    }
    MODULE_REQUEST.UpdateCommentAbstractRequest = UpdateCommentAbstractRequest;
    class CreateCityAbstractRequest extends exports.REQUEST_CONFIG.CREATE_CITY_REQUEST {
    }
    MODULE_REQUEST.CreateCityAbstractRequest = CreateCityAbstractRequest;
    class CreateCollegeAbstractRequest extends exports.REQUEST_CONFIG.CREATE_COLLEGE_REQUEST {
    }
    MODULE_REQUEST.CreateCollegeAbstractRequest = CreateCollegeAbstractRequest;
    class CreateSchoolAbstractRequest extends exports.REQUEST_CONFIG.CREATE_SCHOOL_REQUEST {
    }
    MODULE_REQUEST.CreateSchoolAbstractRequest = CreateSchoolAbstractRequest;
    class CreateWorkplaceAbstractRequest extends exports.REQUEST_CONFIG.CREATE_WORKPLACE_REQUEST {
    }
    MODULE_REQUEST.CreateWorkplaceAbstractRequest = CreateWorkplaceAbstractRequest;
})(MODULE_REQUEST = exports.MODULE_REQUEST || (exports.MODULE_REQUEST = {}));
//# sourceMappingURL=module.config.js.map