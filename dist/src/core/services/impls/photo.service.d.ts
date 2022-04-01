import { BaseService } from "./base.service";
import { IPhotoService } from "../iphoto.service";
import { IPhotoRepository } from "../../repositories/iphoto.repository";
import { ResponseDto } from "../../dtos/responses/response.dto";
import { IPostRepository } from "../../repositories/ipost.repository";
import { GetPhotoListByUserIdRequest } from "../../dtos/requests/photo/get-photo-list-by-user-id.request";
export declare class PhotoService extends BaseService implements IPhotoService {
    private _photoRepos;
    private _postRepos;
    private readonly _logger;
    private _commonUtil;
    constructor(_photoRepos: IPhotoRepository, _postRepos: IPostRepository);
    getPhotoListByUserId(request: GetPhotoListByUserIdRequest): Promise<ResponseDto>;
    deletePhotoById(id: number): Promise<ResponseDto>;
    getPhotoById(id: number): Promise<ResponseDto>;
}
