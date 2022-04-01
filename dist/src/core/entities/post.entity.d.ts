import { BaseEntityAutoId } from "./base/base.entity";
import { PRIVACY_SETTING } from "../common/constants/common.constant";
export declare class PostEntity extends BaseEntityAutoId {
    content: string;
    privacySettingId: PRIVACY_SETTING;
    likes: number;
    userId: number;
    isDeleted: boolean;
}
