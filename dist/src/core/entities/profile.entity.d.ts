import { BaseEntityAutoId } from "./base/base.entity";
export declare class ProfileEntity extends BaseEntityAutoId {
    firstName: string;
    lastName: string;
    gender: string;
    birthday: Date;
    phone: string;
    email: string;
    bio: string;
    avatar: string;
    cityId: number;
    schoolId: number;
    collegeId: number;
    workplaceId: number;
    relationshipId: number;
}
