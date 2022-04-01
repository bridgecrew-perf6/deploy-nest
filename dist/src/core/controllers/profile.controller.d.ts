import { Logger } from "@nestjs/common";
import { IProfileService } from "../services/iprofile.service";
import { UpdateProfileRequest } from "../dtos/requests/profile/update-profile.request";
import { UpdateAvatarRequest } from "../dtos/requests/profile/update-avatar.request";
import { SearchRequest } from "../dtos/requests/common/search.request";
export declare class ProfileController {
    private _profileService;
    readonly _logger: Logger;
    constructor(_profileService: IProfileService);
    getProfileById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getProfileDetailById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    updateProfile(id: number, request: UpdateProfileRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    updateAvatar(request: UpdateAvatarRequest): Promise<any>;
    getCommentListByPostId(request: SearchRequest): Promise<any>;
}
