import { GENDER_ENUM } from "../../../common/constants/common.constant";
export declare class UpdateProfileRequest {
    firstName: string;
    lastName: string;
    gender: GENDER_ENUM;
    birthday: string;
    phone: string;
    email: string;
    bio: string;
    cityId: number;
    schoolId: number;
    collegeId: number;
    workplaceId: number;
}
