import { Logger } from "@nestjs/common";
import { CreateWorkplaceRequest } from "../dtos/requests/workplace/create-workplace.request";
import { IWorkplaceService } from "../services/iworkplace.service";
export declare class WorkplaceController {
    private _workplaceService;
    readonly _logger: Logger;
    constructor(_workplaceService: IWorkplaceService);
    getWorkplaceList(): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    createSchool(request: CreateWorkplaceRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
}
