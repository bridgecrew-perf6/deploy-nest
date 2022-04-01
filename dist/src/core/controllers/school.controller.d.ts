import { Logger } from "@nestjs/common";
import { CreateSchoolRequest } from "../dtos/requests/school/create-school.request";
import { ISchoolService } from "../services/ischool.service";
export declare class SchoolController {
    private _schoolService;
    readonly _logger: Logger;
    constructor(_schoolService: ISchoolService);
    getSchoolList(): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    createSchool(request: CreateSchoolRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
}
