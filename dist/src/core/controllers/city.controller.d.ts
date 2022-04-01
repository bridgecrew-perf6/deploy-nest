import { Logger } from "@nestjs/common";
import { CreateCityRequest } from "../dtos/requests/city/create-city.request";
import { ICityService } from "../services/icity.service";
export declare class CityController {
    private _cityService;
    readonly _logger: Logger;
    constructor(_cityService: ICityService);
    getCityList(): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    createCity(request: CreateCityRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
}
