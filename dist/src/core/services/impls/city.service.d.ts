import { ICityRepository } from "../../repositories/icity.repository";
import { ResponseDto } from "../../dtos/responses/response.dto";
import { ICityService } from "../icity.service";
import { BaseService } from "./base.service";
import { CreateCityRequest } from "../../dtos/requests/city/create-city.request";
export declare class CityService extends BaseService implements ICityService {
    private _cityRepos;
    private readonly _logger;
    constructor(_cityRepos: ICityRepository);
    getCityList(): Promise<ResponseDto>;
    createCity(request: CreateCityRequest): Promise<ResponseDto>;
}
