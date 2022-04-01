import { ISchoolRepository } from "../../repositories/ischool.repository";
import { ResponseDto } from "../../dtos/responses/response.dto";
import { BaseService } from "./base.service";
import { ISchoolService } from "../ischool.service";
import { CreateSchoolRequest } from "../../dtos/requests/school/create-school.request";
export declare class SchoolService extends BaseService implements ISchoolService {
    private _schoolRepos;
    private readonly _logger;
    constructor(_schoolRepos: ISchoolRepository);
    getSchoolList(): Promise<ResponseDto>;
    createSchool(request: CreateSchoolRequest): Promise<ResponseDto>;
}
