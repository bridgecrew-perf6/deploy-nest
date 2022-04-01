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
var PostService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const error_map_1 = require("../../common/error.map");
const module_config_1 = require("../../config/module.config");
const response_dto_1 = require("../../dtos/responses/response.dto");
const base_service_1 = require("./base.service");
const common_util_1 = require("../../utils/common.util");
const auto_mapper_util_1 = require("../../utils/auto-mapper/auto-mapper.util");
const mapper_config_1 = require("../../config/mapper.config");
const photo_entity_1 = require("../../entities/photo.entity");
const common_constant_1 = require("../../common/constants/common.constant");
const post_liked_users_entity_1 = require("../../entities/post-liked-users.entity");
let PostService = PostService_1 = class PostService extends base_service_1.BaseService {
    constructor(_postRepos, _photoRepos, _commentRepos, _postLikedUsersRepos) {
        super(_postRepos);
        this._postRepos = _postRepos;
        this._photoRepos = _photoRepos;
        this._commentRepos = _commentRepos;
        this._postLikedUsersRepos = _postLikedUsersRepos;
        this._logger = new common_1.Logger(PostService_1.name);
        this._commonUtil = new common_util_1.CommonUtil();
        this._logger.log("============== Constructor PostService ==============");
    }
    async createPost(request) {
        this._logger.log("============== Create post ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const dataMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.CREATE_POST_MAPPING, request);
            const currentUserId = await this._commonUtil.getUserId();
            dataMapper.userId = currentUserId;
            dataMapper.likes = 0;
            dataMapper.isDeleted = false;
            const post = await this._postRepos.create(dataMapper);
            const postId = post.id;
            request.photoList.map(async (item) => {
                const photo = new photo_entity_1.PhotoEntity;
                photo.fileName = item;
                photo.postId = postId;
                photo.isDeleted = false;
                return await this._photoRepos.create(photo);
            });
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, post);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async updatePost(id, request) {
        this._logger.log("============== Update post ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const currentUserId = await this._commonUtil.getUserId();
            const checkedPost = await this._postRepos.findOne({
                id: id,
                userId: currentUserId,
                isDeleted: false
            });
            if (!checkedPost) {
                return res.return(error_map_1.ErrorMap.E009.Code);
            }
            const dataMapper = auto_mapper_util_1.AutoMapperUtil.map(mapper_config_1.MAPPER_CONFIG.UPDATE_POST_MAPPING, request);
            dataMapper.id = id;
            const post = await this._postRepos.update(dataMapper);
            const photoList = request.photoList;
            const photoListDelete = photoList.filter(i => i.id > 0 && i.isDeleted === true);
            photoListDelete.map(async (item) => {
                const photo = await this._photoRepos.findOne({
                    id: item.id,
                    postId: id,
                    isDeleted: false
                });
                if (photo) {
                    photo.isDeleted = true;
                    await this._photoRepos.update(photo);
                }
            });
            const photoListInsert = photoList.filter(i => i.id === 0);
            photoListInsert.map(async (item) => {
                const photo = new photo_entity_1.PhotoEntity;
                photo.fileName = item.fileName;
                photo.postId = id;
                photo.isDeleted = item.isDeleted;
                return await this._photoRepos.create(photo);
            });
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, post);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async updateLikes(request) {
        this._logger.log("============== Like/unlike post ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const postId = request.postId;
            const currentUserId = await this._commonUtil.getUserId();
            const post = await this._postRepos.findOne({
                id: postId,
                isDeleted: false
            });
            if (!post) {
                return res.return(error_map_1.ErrorMap.E009.Code);
            }
            const postLikedUser = await this._postLikedUsersRepos.findOne({
                postId: postId,
                userId: currentUserId
            });
            if (!postLikedUser) {
                const newPostLikedUser = new post_liked_users_entity_1.PostLikedUsersEntity;
                newPostLikedUser.postId = postId;
                newPostLikedUser.userId = currentUserId;
                newPostLikedUser.isDeleted = false;
                await this._postLikedUsersRepos.create(newPostLikedUser);
                post.likes = post.likes + 1;
            }
            else {
                postLikedUser.isDeleted = !postLikedUser.isDeleted;
                await this._postLikedUsersRepos.update(postLikedUser);
                post.likes = postLikedUser.isDeleted ? (post.likes - 1) : (post.likes + 1);
            }
            await this._postRepos.update(post);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, post);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getPostById(id) {
        this._logger.log("============== Get post by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const post = await this._postRepos.findOne({
                id: id,
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
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, post);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getPostDetailById(id) {
        this._logger.log("============== Get post detail by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const post = await this._postRepos.findOne({
                id: id,
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
            const photoList = await this._photoRepos.findByCondition({ postId: id, isDeleted: false }, { createdAt: common_constant_1.ORDER_BY.DESC });
            post['photoList'] = photoList;
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, post);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async deletePostById(id) {
        this._logger.log("============== Delete post by id ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const currentUserId = await this._commonUtil.getUserId();
            const post = await this._postRepos.findOne({
                id: id,
                userId: currentUserId,
                isDeleted: false
            });
            if (!post) {
                return res.return(error_map_1.ErrorMap.E009.Code);
            }
            post.isDeleted = true;
            await this._postRepos.update(post);
            const photoList = await this._photoRepos.findByCondition({ postId: id, isDeleted: false }, { id: common_constant_1.ORDER_BY.ASC });
            photoList.map(async (photo) => {
                photo.isDeleted = true;
                await this._photoRepos.update(photo);
            });
            const commentList = await this._commentRepos.findByCondition({ postId: id, isDeleted: false }, { id: common_constant_1.ORDER_BY.ASC });
            commentList.map(async (comment) => {
                comment.isDeleted = true;
                await this._commentRepos.update(comment);
            });
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, post);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getPostListNewsFeed(request) {
        this._logger.log("============== Get post list in news feed ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const postList = await this._postRepos.getPostListNewsFeed(request);
            for (let i = 0; i < postList.length; i++) {
                const photoList = await this._photoRepos.findByCondition({ postId: postList[i].id, isDeleted: false }, { createdAt: common_constant_1.ORDER_BY.DESC });
                postList[i].photoList = photoList;
            }
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, postList);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getPostListWall(request) {
        this._logger.log("============== Get post list in wall ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const postList = await this._postRepos.getPostListWall(request);
            for (let i = 0; i < postList.length; i++) {
                const photoList = await this._photoRepos.findByCondition({ postId: postList[i].id, isDeleted: false }, { createdAt: common_constant_1.ORDER_BY.DESC });
                postList[i].photoList = photoList;
            }
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, postList);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async getListUsersLikePost(request) {
        this._logger.log("============== Get list of users who liked post ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const userList = await this._postRepos.getListUsersLikePost(request);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, userList);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
    async searchPost(request) {
        this._logger.log("============== Search news ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const postList = await this._postRepos.searchPost(request);
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, postList);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
};
PostService = PostService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPOST_REPOSITORY)),
    __param(1, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPHOTO_REPOSITORY)),
    __param(2, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.ICOMMENT_REPOSITORY)),
    __param(3, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPOST_LIKED_USERS_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map