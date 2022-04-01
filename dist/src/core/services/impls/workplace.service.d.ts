import { ResponseDto } from "../../dtos/responses/response.dto";
import { BaseService } from "./base.service";
import { IWorkplaceService } from "../iworkplace.service";
import { IWorkplaceRepository } from "../../repositories/iworkplace.repository";
import { CreateWorkplaceRequest } from "../../dtos/requests/workplace/create-workplace.request";
export declare class WorkplaceService extends BaseService implements IWorkplaceService {
    private _workplaceRepos;
    private readonly _logger;
    constructor(_workplaceRepos: IWorkplaceRepository);
    getWorkplaceList(): Promise<ResponseDto>;
    createWorkplace(request: CreateWorkplaceRequest): Promise<ResponseDto>;
}
