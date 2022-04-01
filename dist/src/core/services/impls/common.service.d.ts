import { ResponseDto } from "../../dtos/responses/response.dto";
import { BaseService } from "./base.service";
import { ICommonService } from "../icommon.service";
import { SearchRequest } from "../../dtos/requests/common/search.request";
import { IProfileRepository } from "../../repositories/iprofile.repository";
import { IPostRepository } from "../../repositories/ipost.repository";
import { IPhotoRepository } from "../../repositories/iphoto.repository";
export declare class CommonService extends BaseService implements ICommonService {
    private _profileRepos;
    private _postRepos;
    private _photoRepos;
    private readonly _logger;
    constructor(_profileRepos: IProfileRepository, _postRepos: IPostRepository, _photoRepos: IPhotoRepository);
    searchAll(request: SearchRequest): Promise<ResponseDto>;
}
