import { CreateCollegeRequest } from "../dtos/requests/college/create-college.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface ICollegeService extends IBaseService {
    getCollegeList(): Promise<ResponseDto>;
    createCollege(request: CreateCollegeRequest): Promise<ResponseDto>;
}
