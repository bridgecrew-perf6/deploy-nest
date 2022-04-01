import { GetPhotoListByUserIdRequest } from "../dtos/requests/photo/get-photo-list-by-user-id.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface IPhotoService extends IBaseService {
    getPhotoListByUserId(request: GetPhotoListByUserIdRequest): Promise<ResponseDto>;
    deletePhotoById(id: number): Promise<ResponseDto>;
    getPhotoById(id: number): Promise<ResponseDto>;
}
