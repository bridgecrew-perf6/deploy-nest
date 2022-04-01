import { BaseEntityAutoId } from "./base/base.entity";
import { LANGUAGE_ENUM, USER_STATUS_ENUM, USER_TYPE_ENUM } from "../common/constants/common.constant";
export declare class UserEntity extends BaseEntityAutoId {
    username: string;
    password: string;
    userType: USER_TYPE_ENUM;
    userStatus: USER_STATUS_ENUM;
    language: LANGUAGE_ENUM;
    profileId: number;
}
