import { PRIVACY_SETTING } from "../../../common/constants/common.constant";
import { UpdatePhotoInPostRequest } from "./update-photo-in-post.request";
export declare class UpdatePostRequest {
    content: string;
    privacySettingId: PRIVACY_SETTING;
    photoList: UpdatePhotoInPostRequest[];
}
