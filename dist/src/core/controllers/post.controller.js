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
var PostController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_constant_1 = require("../common/constants/api.constant");
const module_config_1 = require("../config/module.config");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_user_interceptor_service_1 = require("../../interceptors/auth-user-interceptor.service");
const create_post_request_1 = require("../dtos/requests/post/create-post.request");
const update_post_request_1 = require("../dtos/requests/post/update-post.request");
const like_post_request_1 = require("../dtos/requests/post/like-post.request");
const get_post_list_news_feed_request_1 = require("../dtos/requests/post/get-post-list-news-feed.request");
const get_post_list_wall_request_1 = require("../dtos/requests/post/get-post-list-wall.request");
const get_list_users_like_post_request_1 = require("../dtos/requests/post/get-list-users-like-post.request");
const search_request_1 = require("../dtos/requests/common/search.request");
let PostController = PostController_1 = class PostController {
    constructor(_postService) {
        this._postService = _postService;
        this._logger = new common_1.Logger(PostController_1.name);
    }
    async createPost(request) {
        this._logger.log('========== Create post ==========');
        return await this._postService.createPost(request);
    }
    async updatePost(id, request) {
        this._logger.log('========== Update post ==========');
        return await this._postService.updatePost(id, request);
    }
    async updateLikes(request) {
        this._logger.log('========== Update likes ==========');
        return await this._postService.updateLikes(request);
    }
    async getPostById(id) {
        this._logger.log('========== Get post by id ==========');
        return await this._postService.getPostById(id);
    }
    async getPostDetailById(id) {
        this._logger.log('========== Get post detail by id ==========');
        return await this._postService.getPostDetailById(id);
    }
    async deletePostById(id) {
        this._logger.log('========== Delete post ==========');
        return await this._postService.deletePostById(id);
    }
    async getPostListInNewsFeed(request) {
        this._logger.log('========== Get post list in news feed ==========');
        return await this._postService.getPostListNewsFeed(request);
    }
    async getPostListWall(request) {
        this._logger.log('========== Get post list in wall ==========');
        return await this._postService.getPostListWall(request);
    }
    async getListUsersLikePost(request) {
        this._logger.log('========== Get list of users who liked post ==========');
        return await this._postService.getListUsersLikePost(request);
    }
    async getCommentListByPostId(request) {
        this._logger.log('========== Search post ==========');
        return await this._postService.searchPost(request);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create post' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_request_1.CreatePostRequest]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Put)(api_constant_1.URL_CONSTANTS.UPDATE),
    (0, swagger_1.ApiOperation)({ summary: 'Update post' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_post_request_1.UpdatePostRequest]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Put)(api_constant_1.URL_CONSTANTS.UPDATE_LIKES),
    (0, swagger_1.ApiOperation)({ summary: 'Update likes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [like_post_request_1.UpdateLikesRequest]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updateLikes", null);
__decorate([
    (0, common_1.Get)(api_constant_1.URL_CONSTANTS.GET_BY_ID),
    (0, swagger_1.ApiOperation)({ summary: 'Get post by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Get)(api_constant_1.URL_CONSTANTS.GET_DETAIL),
    (0, swagger_1.ApiOperation)({ summary: 'Get post detail by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostDetailById", null);
__decorate([
    (0, common_1.Delete)(api_constant_1.URL_CONSTANTS.DELETE),
    (0, swagger_1.ApiOperation)({ summary: 'Delete post' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePostById", null);
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.GET_POST_LIST_NEWS_FEED),
    (0, swagger_1.ApiOperation)({ summary: 'Get post list in news feed' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_post_list_news_feed_request_1.GetPostListNewsFeedRequest]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostListInNewsFeed", null);
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.GET_POST_LIST_WALL),
    (0, swagger_1.ApiOperation)({ summary: 'Get post list in wall' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_post_list_wall_request_1.GetPostListWallRequest]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostListWall", null);
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.GET_LIST_USERS_LIKE_POST),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of users who liked post' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_list_users_like_post_request_1.GetListUsersLikePostRequest]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getListUsersLikePost", null);
__decorate([
    (0, common_1.Post)(api_constant_1.URL_CONSTANTS.SEARCH),
    (0, swagger_1.ApiOperation)({ summary: 'Search post' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The result returned is the ResponseDto class', schema: {} }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(auth_user_interceptor_service_1.AuthUserInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_request_1.SearchRequest]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getCommentListByPostId", null);
PostController = PostController_1 = __decorate([
    (0, common_1.Controller)(api_constant_1.CONTROLLER_CONSTANTS.POST),
    (0, swagger_1.ApiTags)(api_constant_1.CONTROLLER_CONSTANTS.POST),
    __param(0, (0, common_1.Inject)(module_config_1.SERVICE_INTERFACE.IPOST_SERVICE)),
    __metadata("design:paramtypes", [Object])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map