import { ConfigService } from "../../../shared/services/config.service";
export declare class S3UploadFileUtil {
    _configService: ConfigService;
    private _s3;
    private _bucket;
    private _secretkey;
    private _accesskey;
    constructor(_configService: ConfigService);
    upload(folder: string, file: any, fileName: string): Promise<string>;
    uploadMulti(folder: string, files: any[]): Promise<any>;
    private throwError;
    private replaceImgName;
}
