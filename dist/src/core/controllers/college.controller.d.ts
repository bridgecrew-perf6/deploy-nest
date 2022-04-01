import { Logger } from "@nestjs/common";
import { CreateSchoolRequest } from "../dtos/requests/school/create-school.request";
import { ICollegeService } from "../services/icollege.service";
export declare class CollegeController {
    private _collegeService;
    readonly _logger: Logger;
    constructor(_collegeService: ICollegeService);
    getCollegeList(): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    createSchool(request: CreateSchoolRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
}
