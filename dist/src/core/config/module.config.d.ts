import { CreateCityRequest } from "../dtos/requests/city/create-city.request";
import { CreateCollegeRequest } from "../dtos/requests/college/create-college.request";
import { CreateCommentRequest } from "../dtos/requests/comment/create-comment.request";
import { UpdateCommentRequest } from "../dtos/requests/comment/update-comment.request";
import { CreatePostRequest } from "../dtos/requests/post/create-post.request";
import { UpdatePostRequest } from "../dtos/requests/post/update-post.request";
import { UpdateAvatarRequest } from "../dtos/requests/profile/update-avatar.request";
import { UpdateProfileRequest } from "../dtos/requests/profile/update-profile.request";
import { CreateSchoolRequest } from "../dtos/requests/school/create-school.request";
import { CreateUserRequest } from "../dtos/requests/user/create-user.request";
import { UpdateUserLanguageRequest } from "../dtos/requests/user/update-user-language.request";
import { CreateWorkplaceRequest } from "../dtos/requests/workplace/create-workplace.request";
import { CityEntity } from "../entities/city.entity";
import { CollegeEntity } from "../entities/college.entity";
import { CommentEntity } from "../entities/comment.entity";
import { DeviceEntity } from "../entities/device.entity";
import { PhotoEntity } from "../entities/photo.entity";
import { PostLikedUsersEntity } from "../entities/post-liked-users.entity";
import { PostEntity } from "../entities/post.entity";
import { ProfileEntity } from "../entities/profile.entity";
import { SchoolEntity } from "../entities/school.entity";
import { UserEntity } from "../entities/user.entity";
import { WorkplaceEntity } from "../entities/workplace.entity";
export declare const ENTITIES_CONFIG: {
    CITY: typeof CityEntity;
    SCHOOL: typeof SchoolEntity;
    COLLEGE: typeof CollegeEntity;
    WORKPLACE: typeof WorkplaceEntity;
    USER: typeof UserEntity;
    PROFILE: typeof ProfileEntity;
    POST: typeof PostEntity;
    PHOTO: typeof PhotoEntity;
    COMMENT: typeof CommentEntity;
    POST_LIKED_USERS: typeof PostLikedUsersEntity;
    DEVICE: typeof DeviceEntity;
};
export declare const SERVICE_INTERFACE: {
    ICOMMON_SERVICE: string;
    ICITY_SERVICE: string;
    ISCHOOL_SERVICE: string;
    ICOLLEGE_SERVICE: string;
    IWORKPLACE_SERVICE: string;
    IUSER_SERVICE: string;
    IPROFILE_SERVICE: string;
    IPOST_SERVICE: string;
    IPHOTO_SERVICE: string;
    IUPLOAD_SERVICE: string;
    ICOMMENT_SERVICE: string;
};
export declare const REPOSITORY_INTERFACE: {
    ICITY_REPOSITORY: string;
    ISCHOOL_REPOSITORY: string;
    ICOLLEGE_REPOSITORY: string;
    IWORKPLACE_REPOSITORY: string;
    IUSER_REPOSITORY: string;
    IPROFILE_REPOSITORY: string;
    IPOST_REPOSITORY: string;
    IPHOTO_REPOSITORY: string;
    ICOMMENT_REPOSITORY: string;
    IPOST_LIKED_USERS_REPOSITORY: string;
    IDEVICE_REPOSITORY: string;
};
export declare const REQUEST_CONFIG: {
    CREATE_USER_REQUEST: typeof CreateUserRequest;
    UPDATE_PROFILE_REQUEST: typeof UpdateProfileRequest;
    UPDATE_USER_LANGUAGE_REQUEST: typeof UpdateUserLanguageRequest;
    CREATE_POST_REQUEST: typeof CreatePostRequest;
    UPDATE_POST_REQUEST: typeof UpdatePostRequest;
    UPDATE_AVATAR_REQUEST: typeof UpdateAvatarRequest;
    CREATE_COMMENT_REQUEST: typeof CreateCommentRequest;
    UPDATE_COMMENT_REQUEST: typeof UpdateCommentRequest;
    CREATE_CITY_REQUEST: typeof CreateCityRequest;
    CREATE_COLLEGE_REQUEST: typeof CreateCollegeRequest;
    CREATE_SCHOOL_REQUEST: typeof CreateSchoolRequest;
    CREATE_WORKPLACE_REQUEST: typeof CreateWorkplaceRequest;
};
export declare module MODULE_REQUEST {
    abstract class CreateUserAbstractRequest extends REQUEST_CONFIG.CREATE_USER_REQUEST {
    }
    abstract class UpdateProfileAbstractRequest extends REQUEST_CONFIG.UPDATE_PROFILE_REQUEST {
    }
    abstract class UpdateUserLanguageAbstractRequest extends REQUEST_CONFIG.UPDATE_USER_LANGUAGE_REQUEST {
    }
    abstract class CreatePostAbstractRequest extends REQUEST_CONFIG.CREATE_POST_REQUEST {
    }
    abstract class UpdatePostAbstractRequest extends REQUEST_CONFIG.UPDATE_POST_REQUEST {
    }
    abstract class UpdateAvatarAbstractRequest extends REQUEST_CONFIG.UPDATE_AVATAR_REQUEST {
    }
    abstract class CreateCommentAbstractRequest extends REQUEST_CONFIG.CREATE_COMMENT_REQUEST {
    }
    abstract class UpdateCommentAbstractRequest extends REQUEST_CONFIG.UPDATE_COMMENT_REQUEST {
    }
    abstract class CreateCityAbstractRequest extends REQUEST_CONFIG.CREATE_CITY_REQUEST {
    }
    abstract class CreateCollegeAbstractRequest extends REQUEST_CONFIG.CREATE_COLLEGE_REQUEST {
    }
    abstract class CreateSchoolAbstractRequest extends REQUEST_CONFIG.CREATE_SCHOOL_REQUEST {
    }
    abstract class CreateWorkplaceAbstractRequest extends REQUEST_CONFIG.CREATE_WORKPLACE_REQUEST {
    }
}
