import { CreateCityRequest } from "../dtos/requests/city/create-city.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface ICityService extends IBaseService {
    getCityList(): Promise<ResponseDto>;
    createCity(request: CreateCityRequest): Promise<ResponseDto>;
}
