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
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3UploadFileUtil = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../../shared/services/config.service");
const AWS = require("aws-sdk");
let S3UploadFileUtil = class S3UploadFileUtil {
    constructor(_configService) {
        this._configService = _configService;
        this._bucket = _configService.get("AWS_BUCKET_NAME");
        this._secretkey = _configService.get("AWS_SECRET_ACCESS_KEY");
        this._accesskey = _configService.get("AWS_ACCESS_KEY_ID");
        this._s3 = new AWS.S3({
            accessKeyId: this._accesskey,
            secretAccessKey: this._secretkey,
            region: _configService.get("AWS_REGION")
        });
    }
    async upload(folder, file, fileName) {
        const replaceName = this.replaceImgName(fileName);
        const key = `${folder}/${(new Date()).getTime()}_${replaceName}`;
        const params = {
            Bucket: this._bucket,
            Key: key,
            Body: file,
        };
        await this._s3.putObject(params, (err, data) => {
            this.throwError(err);
        });
        return key;
    }
    async uploadMulti(folder, files) {
        const result = {};
        files.forEach(async (file) => {
            const filename = file.originalname;
            const replaceName = this.replaceImgName(filename);
            const key = `${folder}/${(new Date()).getTime()}_${replaceName}`;
            const params = {
                Bucket: this._bucket,
                Key: key,
                Body: file.buffer,
                CacheControl: "max-age=2592000"
            };
            await this._s3.putObject(params, (err, data) => {
                this.throwError(err);
            });
            result[file.fieldname] = key;
        });
        return result;
    }
    throwError(err) {
        if (err) {
            throw new Error(err);
        }
    }
    replaceImgName(name) {
        return name.split(' ').join('').split('%').join('_');
    }
};
S3UploadFileUtil = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], S3UploadFileUtil);
exports.S3UploadFileUtil = S3UploadFileUtil;
//# sourceMappingURL=s3-upload-file.util.js.map