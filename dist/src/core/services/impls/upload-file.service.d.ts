import { ResponseDto } from "../../dtos/responses/response.dto";
import { S3UploadFileUtil } from "../../utils/aws-s3/s3-upload-file.util";
import { IUploadFileService } from "../iupload-file.service";
export declare class UploadFileService implements IUploadFileService {
    private _uploadFileUtil;
    private readonly _logger;
    constructor(_uploadFileUtil: S3UploadFileUtil);
    uploadSingleImage(file: any, folderName: string): Promise<ResponseDto>;
    uploadMultiImage(files: any[], folderName: string): Promise<ResponseDto>;
}
