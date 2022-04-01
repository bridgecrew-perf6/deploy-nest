import { GENDER_ENUM } from "../../../common/constants/common.constant";
export declare class CreateUserRequest {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthday: string;
    gender: GENDER_ENUM;
}
