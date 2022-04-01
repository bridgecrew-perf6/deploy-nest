import { Logger } from "@nestjs/common";
import { IPostService } from "../services/ipost.service";
import { CreatePostRequest } from "../dtos/requests/post/create-post.request";
import { UpdatePostRequest } from "../dtos/requests/post/update-post.request";
import { UpdateLikesRequest } from "../dtos/requests/post/like-post.request";
import { GetPostListNewsFeedRequest } from "../dtos/requests/post/get-post-list-news-feed.request";
import { GetPostListWallRequest } from "../dtos/requests/post/get-post-list-wall.request";
import { GetListUsersLikePostRequest } from "../dtos/requests/post/get-list-users-like-post.request";
import { SearchRequest } from "../dtos/requests/common/search.request";
export declare class PostController {
    private _postService;
    readonly _logger: Logger;
    constructor(_postService: IPostService);
    createPost(request: CreatePostRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    updatePost(id: number, request: UpdatePostRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    updateLikes(request: UpdateLikesRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getPostById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getPostDetailById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    deletePostById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getPostListInNewsFeed(request: GetPostListNewsFeedRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getPostListWall(request: GetPostListWallRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getListUsersLikePost(request: GetListUsersLikePostRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getCommentListByPostId(request: SearchRequest): Promise<any>;
}
