import { Logger } from "@nestjs/common";
import { GetPhotoListByUserIdRequest } from "../dtos/requests/photo/get-photo-list-by-user-id.request";
import { IPhotoService } from "../services/iphoto.service";
export declare class PhotoController {
    private _photoService;
    readonly _logger: Logger;
    constructor(_photoService: IPhotoService);
    getPhotoListByUserId(request: GetPhotoListByUserIdRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    deletePostById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getPhotoById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
}
