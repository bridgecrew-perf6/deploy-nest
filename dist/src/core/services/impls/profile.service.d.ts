import { ResponseDto } from "../../dtos/responses/response.dto";
import { BaseService } from "./base.service";
import { IProfileService } from "../iprofile.service";
import { IProfileRepository } from "../../repositories/iprofile.repository";
import { UpdateProfileRequest } from "../../dtos/requests/profile/update-profile.request";
import { IUserRepository } from "../../repositories/iuser.repository";
import { UpdateAvatarRequest } from "../../dtos/requests/profile/update-avatar.request";
import { SearchRequest } from "../../dtos/requests/common/search.request";
export declare class ProfileService extends BaseService implements IProfileService {
    private _profileRepos;
    private _userRepos;
    private readonly _logger;
    private _commonUtil;
    constructor(_profileRepos: IProfileRepository, _userRepos: IUserRepository);
    getProfileById(id: number): Promise<ResponseDto>;
    getProfileDetailById(id: number): Promise<ResponseDto>;
    updateProfile(id: number, request: UpdateProfileRequest): Promise<ResponseDto>;
    updateAvatar(request: UpdateAvatarRequest): Promise<any>;
    searchProfile(request: SearchRequest): Promise<any>;
}
