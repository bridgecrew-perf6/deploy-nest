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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PhotoService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoService = void 0;
const common_1 = require("@nestjs/common");
const module_config_1 = require("../../config/module.config");
const base_service_1 = require("./base.service");
const response_dto_1 = require("../../dtos/responses/response.dto");
const error_map_1 = require("../../common/error.map");
const common_util_1 = require("../../utils/common.util");
const common_constant_1 = require("../../common/constants/common.constant");
let PhotoService = PhotoService_1 = class PhotoService extends base_service_1.BaseService {
    constructor(_photoRepos, _postRepos) {
        super(_photoRepos);
        this._photoRepos = _photoRepos;
        this._postRepos = _postRepos;
        this._logger = new common_1.Logger(PhotoService_1.name);
        this._commonUtil = new common_util_1.CommonUtil();
        this._logger.log("============== Constructor PhotoService ==============");
    }
    async getPhotoListByUserId(request) {
        this._logger.log("============== Get photo list by user id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const photoList = await this._photoRepos.getPhotoListByUserId(request);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, photoList);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async deletePhotoById(id) {
        this._logger.log("============== Delete photo by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const photo = await this._photoRepos.findOne({
                id: id,
                isDeleted: false
            });
            if (!photo) {
                return res.return(error_map_1.ErrorMap.E010.Code);
            }
            const currentUserId = await this._commonUtil.getUserId();
            const post = await this._postRepos.findOne({
                id: photo.postId,
                userId: currentUserId,
                isDeleted: false
            });
            if (!post) {
                return res.return(error_map_1.ErrorMap.E010.Code);
            }
            photo.isDeleted = true;
            await this._photoRepos.update(photo);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, photo);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getPhotoById(id) {
        this._logger.log("============== Get photo by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const photo = await this._photoRepos.findOne({
                id: id,
                isDeleted: false
            });
            if (!photo) {
                return res.return(error_map_1.ErrorMap.E010.Code);
            }
            const post = await this._postRepos.findOne({
                id: photo.postId,
                isDeleted: false
            });
            if (!post) {
                return res.return(error_map_1.ErrorMap.E010.Code);
            }
            const currentUserId = await this._commonUtil.getUserId();
            const cannotAccessPostOnlyMe = post.privacySettingId === common_constant_1.PRIVACY_SETTING.ONLY_ME && currentUserId !== post.userId;
            if (cannotAccessPostOnlyMe) {
                return res.return(error_map_1.ErrorMap.E010.Code);
            }
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, photo);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
};
PhotoService = PhotoService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPHOTO_REPOSITORY)),
    __param(1, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPOST_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object])
], PhotoService);
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map