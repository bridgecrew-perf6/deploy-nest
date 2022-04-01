import { SearchRequest } from "../dtos/requests/common/search.request";
import { UpdateAvatarRequest } from "../dtos/requests/profile/update-avatar.request";
import { UpdateProfileRequest } from "../dtos/requests/profile/update-profile.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface IProfileService extends IBaseService {
    getProfileById(id: number): Promise<ResponseDto>;
    getProfileById(id: number): Promise<ResponseDto>;
    getProfileDetailById(id: number): Promise<ResponseDto>;
    updateProfile(id: number, request: UpdateProfileRequest): Promise<ResponseDto>;
    updateAvatar(request: UpdateAvatarRequest): Promise<any>;
    searchProfile(request: SearchRequest): Promise<any>;
}
