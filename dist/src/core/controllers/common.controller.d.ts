import { Logger } from "@nestjs/common";
import { SearchRequest } from "../dtos/requests/common/search.request";
import { ICommonService } from "../services/icommon.service";
export declare class CommonController {
    private _commonService;
    readonly _logger: Logger;
    constructor(_commonService: ICommonService);
    getCommentListByPostId(request: SearchRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
}
