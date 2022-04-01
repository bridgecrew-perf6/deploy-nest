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
var CommentController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const create_comment_request_1 = require("../dtos/requests/comment/create-comment.request");
const update_comment_request_1 = require("../dtos/requests/comment/update-comment.request");
const get_comment_list_by_post_id_request_1 = require("../dtos/requests/comment/get-comment-list-by-post-id.request");
let CommentController = CommentController_1 = class CommentController {
    constructor(_commentService) {
        this._commentService = _commentService;
        this._logger = new common_1.Logger(CommentController_1.name);
    }
    async createComment(request) {
        this._logger.log('========== Create comment ==========');
        return await this._commentService.createComment(request);
    }
    async updateComment(id, request) {
        this._logger.log('========== Update comment ==========');
        return await this._commentService.updateComment(id, request);
    }
    async getCommentById(id) {
        this._logger.log('========== Get comment by id ==========');
        return await this._commentService.getCommentById(id);
    }
    async deleteCommentById(id) {
        this._logger.log('========== Delete comment ==========');
        return await this._commentService.deleteCommentById(id);
    }
    async getCommentListByPostId(request) {
        this._logger.log('========== Get comment list by post id ==========');
        return await this._commentService.getCommentListByPostId(request);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_request_1.CreateCommentRequest]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
__decorate([
    (0, common_1.Put)(api_constant_1.URL_CONSTANTS.UPDATE),
    (0, swagger_1.ApiOperation)({ summary: 'Update comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_comment_request_1.UpdateCommentRequest]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "updateComment", null);
__decorate([
    (0, common_1.Get)(api_constant_1.URL_CONSTANTS.GET_BY_ID),
    (0, swagger_1.ApiOperation)({ summary: 'Get comment by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentById", null);
__decorate([
    (0, common_1.Delete)(api_constant_1.URL_CONSTANTS.DELETE),
    (0, swagger_1.ApiOperation)({ summary: 'Delete comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "deleteCommentById", null);
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.GET_COMMENT_LIST_BY_POST_ID),
    (0, swagger_1.ApiOperation)({ summary: 'Get comment list by post id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_comment_list_by_post_id_request_1.GetCommentListByPostIdRequest]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentListByPostId", null);
CommentController = CommentController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.COMMENT),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.COMMENT),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.ICOMMENT_SERVICE)),
    __metadata("design:paramtypes", [Object])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map