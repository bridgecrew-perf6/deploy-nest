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
var CommentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const error_map_1 = require("../../common/error.map");
const module_config_1 = require("../../config/module.config");
const response_dto_1 = require("../../dtos/responses/response.dto");
const base_service_1 = require("./base.service");
const common_util_1 = require("../../utils/common.util");
const auto_mapper_util_1 = require("../../utils/auto-mapper/auto-mapper.util");
const mapper_config_1 = require("../../config/mapper.config");
const common_constant_1 = require("../../common/constants/common.constant");
let CommentService = CommentService_1 = class CommentService extends base_service_1.BaseService {
    constructor(_commentRepos, _postRepos) {
        super(_commentRepos);
        this._commentRepos = _commentRepos;
        this._postRepos = _postRepos;
        this._logger = new common_1.Logger(CommentService_1.name);
        this._commonUtil = new common_util_1.CommonUtil();
        this._logger.log("============== Constructor CommentService ==============");
    }
    async createComment(request) {
        this._logger.log("============== Create comment ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const dataMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.CREATE_COMMENT_MAPPING, request);
            const currentUserId = await this._commonUtil.getUserId();
            dataMapper.userId = currentUserId;
            dataMapper.isDeleted = false;
            const comment = await this._commentRepos.create(dataMapper);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, comment);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async updateComment(id, request) {
        this._logger.log("============== Update comment ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const currentUserId = await this._commonUtil.getUserId();
            const checkedComment = await this._commentRepos.findOne({
                id: id,
                userId: currentUserId,
                isDeleted: false
            });
            if (!checkedComment) {
                return res.return(error_map_1.ErrorMap.E011.Code);
            }
            const dataMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.UPDATE_COMMENT_MAPPING, request);
            dataMapper.id = id;
            const comment = await this._commentRepos.update(dataMapper);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, comment);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getCommentById(id) {
        this._logger.log("============== Get comment by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const comment = await this._commentRepos.findOne({
                id: id,
                isDeleted: false
            });
            if (!comment) {
                return res.return(error_map_1.ErrorMap.E011.Code);
            }
            const post = await this._postRepos.findOne({
                id: comment.postId,
                isDeleted: false
            });
            if (!post) {
                return res.return(error_map_1.ErrorMap.E009.Code);
            }
            const currentUserId = await this._commonUtil.getUserId();
            const cannotAccessPostOnlyMe = post.privacySettingId === common_constant_1.PRIVACY_SETTING.ONLY_ME && currentUserId !== post.userId;
            if (cannotAccessPostOnlyMe) {
                return res.return(error_map_1.ErrorMap.E009.Code);
            }
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, comment);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async deleteCommentById(id) {
        this._logger.log("============== Delete comment by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const currentUserId = await this._commonUtil.getUserId();
            const comment = await this._commentRepos.findOne({
                id: id,
                userId: currentUserId,
                isDeleted: false
            });
            if (!comment) {
                return res.return(error_map_1.ErrorMap.E011.Code);
            }
            comment.isDeleted = true;
            await this._commentRepos.update(comment);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, comment);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getCommentListByPostId(request) {
        this._logger.log("============== Get comment list by post id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const commentList = await this._commentRepos.getCommentListByPostId(request);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, commentList);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
};
CommentService = CommentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.ICOMMENT_REPOSITORY)),
    __param(1, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPOST_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map