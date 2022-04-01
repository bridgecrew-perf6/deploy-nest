import { Logger } from "@nestjs/common";
import { IUploadFileService } from "../services/iupload-file.service";
export declare class UploadFileController {
    private _uploadFileService;
    readonly _logger: Logger;
    constructor(_uploadFileService: IUploadFileService);
    uploadSingleImage(file: any, folderName: string): Promise<any>;
    uploadMultiImage(files: any, folderName: string): Promise<any>;
}
