"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UploadFileService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileService = void 0;
const common_1 = require("@nestjs/common");
const error_map_1 = require("../../common/error.map");
const response_dto_1 = require("../../dtos/responses/response.dto");
const s3_upload_file_util_1 = require("../../utils/aws-s3/s3-upload-file.util");
let UploadFileService = UploadFileService_1 = class UploadFileService {
    constructor(_uploadFileUtil) {
        this._uploadFileUtil = _uploadFileUtil;
        this._logger = new common_1.Logger(UploadFileService_1.name);
    }
    async uploadSingleImage(file, folderName) {
        this._logger.log("============== Upload file ==============");
        const res = new response_dto_1.ResponseDto;
        try {
            const result = await this._uploadFileUtil.upload(folderName, file.buffer, file.originalname);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async uploadMultiImage(files, folderName) {
        this._logger.log("============== Upload multi file ==============");
        const res = new response_dto_1.ResponseDto;
        try {
            const result = await this._uploadFileUtil.uploadMulti(folderName, files);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
};
UploadFileService = UploadFileService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [s3_upload_file_util_1.S3UploadFileUtil])
], UploadFileService);
exports.UploadFileService = UploadFileService;
//# sourceMappingURL=upload-file.service.js.map