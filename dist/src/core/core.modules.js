"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const city_controller_1 = require("./controllers/city.controller");
const module_config_1 = require("./config/module.config");
const city_repository_1 = require("./repositories/impls/city.repository");
const city_service_1 = require("./services/impls/city.service");
const school_controller_1 = require("./controllers/school.controller");
const school_repository_1 = require("./repositories/impls/school.repository");
const school_service_1 = require("./services/impls/school.service");
const college_controller_1 = require("./controllers/college.controller");
const workplace_controller_1 = require("./controllers/workplace.controller");
const college_repository_1 = require("./repositories/impls/college.repository");
const workplace_repository_1 = require("./repositories/impls/workplace.repository");
const college_service_1 = require("./services/impls/college.service");
const workplace_service_1 = require("./services/impls/workplace.service");
const user_service_1 = require("./services/impls/user.service");
const user_repository_1 = require("./repositories/impls/user.repository");
const user_controller_1 = require("./controllers/user.controller");
const profile_controller_1 = require("./controllers/profile.controller");
const jwt_1 = require("@nestjs/jwt");
const config_service_1 = require("../shared/services/config.service");
const profile_repository_1 = require("./repositories/impls/profile.repository");
const profile_service_1 = require("./services/impls/profile.service");
const post_repository_1 = require("./repositories/impls/post.repository");
const post_service_1 = require("./services/impls/post.service");
const post_controller_1 = require("./controllers/post.controller");
const photo_repository_1 = require("./repositories/impls/photo.repository");
const photo_service_1 = require("./services/impls/photo.service");
const photo_controller_1 = require("./controllers/photo.controller");
const upload_file_service_1 = require("./services/impls/upload-file.service");
const upload_file_controller_1 = require("./controllers/upload-file.controller");
const s3_upload_file_util_1 = require("./utils/aws-s3/s3-upload-file.util");
const comment_controller_1 = require("./controllers/comment.controller");
const comment_service_1 = require("./services/impls/comment.service");
const comment_repository_1 = require("./repositories/impls/comment.repository");
const post_liked_users_repository_1 = require("./repositories/impls/post-liked-users.repository");
const common_controller_1 = require("./controllers/common.controller");
const common_service_1 = require("./services/impls/common.service");
const app_gateway_1 = require("../gatewaies/app.gateway");
const device_repository_1 = require("./repositories/impls/device.repository");
const controllers = [
    user_controller_1.UserController,
    profile_controller_1.ProfileController,
    post_controller_1.PostController,
    photo_controller_1.PhotoController,
    upload_file_controller_1.UploadFileController,
    comment_controller_1.CommentController,
    city_controller_1.CityController,
    school_controller_1.SchoolController,
    college_controller_1.CollegeController,
    workplace_controller_1.WorkplaceController,
    common_controller_1.CommonController
];
const entities = [
    module_config_1.ENTITIES_CONFIG.CITY,
    module_config_1.ENTITIES_CONFIG.SCHOOL,
    module_config_1.ENTITIES_CONFIG.COLLEGE,
    module_config_1.ENTITIES_CONFIG.WORKPLACE,
    module_config_1.ENTITIES_CONFIG.USER,
    module_config_1.ENTITIES_CONFIG.PROFILE,
    module_config_1.ENTITIES_CONFIG.POST,
    module_config_1.ENTITIES_CONFIG.PHOTO,
    module_config_1.ENTITIES_CONFIG.COMMENT,
    module_config_1.ENTITIES_CONFIG.POST_LIKED_USERS,
    module_config_1.ENTITIES_CONFIG.DEVICE,
];
const providers = [
    s3_upload_file_util_1.S3UploadFileUtil,
    app_gateway_1.AppGateway
];
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([...entities]),
            jwt_1.JwtModule.register({
                secret: config_service_1.ENV_CONFIG.JWT_SECRET_KEY,
                signOptions: { expiresIn: config_service_1.ENV_CONFIG.EXPIRES_TIME },
            }),
        ],
        controllers: [...controllers],
        providers: [
            {
                provide: module_config_1.REPOSITORY_INTERFACE.ICITY_REPOSITORY,
                useClass: city_repository_1.CityRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.ISCHOOL_REPOSITORY,
                useClass: school_repository_1.SchoolRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.ICOLLEGE_REPOSITORY,
                useClass: college_repository_1.CollegeRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.IWORKPLACE_REPOSITORY,
                useClass: workplace_repository_1.WorkplaceRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.IUSER_REPOSITORY,
                useClass: user_repository_1.UserRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.IPROFILE_REPOSITORY,
                useClass: profile_repository_1.ProfileRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.IPOST_REPOSITORY,
                useClass: post_repository_1.PostRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.IPHOTO_REPOSITORY,
                useClass: photo_repository_1.PhotoRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.ICOMMENT_REPOSITORY,
                useClass: comment_repository_1.CommentRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.IPOST_LIKED_USERS_REPOSITORY,
                useClass: post_liked_users_repository_1.PostLikedUsersRepository
            },
            {
                provide: module_config_1.REPOSITORY_INTERFACE.IDEVICE_REPOSITORY,
                useClass: device_repository_1.DeviceRepository
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.ICITY_SERVICE,
                useClass: city_service_1.CityService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.ISCHOOL_SERVICE,
                useClass: school_service_1.SchoolService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.ICOLLEGE_SERVICE,
                useClass: college_service_1.CollegeService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.IWORKPLACE_SERVICE,
                useClass: workplace_service_1.WorkplaceService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.IUSER_SERVICE,
                useClass: user_service_1.UserService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.IPROFILE_SERVICE,
                useClass: profile_service_1.ProfileService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.IPOST_SERVICE,
                useClass: post_service_1.PostService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.IPHOTO_SERVICE,
                useClass: photo_service_1.PhotoService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.IUPLOAD_SERVICE,
                useClass: upload_file_service_1.UploadFileService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.ICOMMENT_SERVICE,
                useClass: comment_service_1.CommentService
            },
            {
                provide: module_config_1.SERVICE_INTERFACE.ICOMMON_SERVICE,
                useClass: common_service_1.CommonService
            },
            ...providers,
        ],
        exports: []
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.modules.js.map