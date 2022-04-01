import { ResponseDto } from "../../dtos/responses/response.dto";
import { BaseService } from "./base.service";
import { ICollegeService } from "../icollege.service";
import { ICollegeRepository } from "../../repositories/icollege.repository";
import { CreateCollegeRequest } from "../../dtos/requests/college/create-college.request";
export declare class CollegeService extends BaseService implements ICollegeService {
    private _collegeRepos;
    private readonly _logger;
    constructor(_collegeRepos: ICollegeRepository);
    getCollegeList(): Promise<ResponseDto>;
    createCollege(request: CreateCollegeRequest): Promise<ResponseDto>;
}
