import { CreateSchoolRequest } from "../dtos/requests/school/create-school.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface ISchoolService extends IBaseService {
    getSchoolList(): Promise<ResponseDto>;
    createSchool(request: CreateSchoolRequest): Promise<ResponseDto>;
}
