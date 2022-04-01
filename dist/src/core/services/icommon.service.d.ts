import { SearchRequest } from "../dtos/requests/common/search.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface ICommonService extends IBaseService {
    searchAll(request: SearchRequest): Promise<ResponseDto>;
}
