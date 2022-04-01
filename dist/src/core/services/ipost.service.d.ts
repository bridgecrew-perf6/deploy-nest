import { SearchRequest } from "../dtos/requests/common/search.request";
import { CreatePostRequest } from "../dtos/requests/post/create-post.request";
import { GetListUsersLikePostRequest } from "../dtos/requests/post/get-list-users-like-post.request";
import { GetPostListNewsFeedRequest } from "../dtos/requests/post/get-post-list-news-feed.request";
import { GetPostListWallRequest } from "../dtos/requests/post/get-post-list-wall.request";
import { UpdateLikesRequest } from "../dtos/requests/post/like-post.request";
import { UpdatePostRequest } from "../dtos/requests/post/update-post.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface IPostService extends IBaseService {
    createPost(request: CreatePostRequest): Promise<ResponseDto>;
    updatePost(id: number, request: UpdatePostRequest): Promise<ResponseDto>;
    updateLikes(request: UpdateLikesRequest): Promise<ResponseDto>;
    getPostById(id: number): Promise<ResponseDto>;
    getPostDetailById(id: number): Promise<ResponseDto>;
    deletePostById(id: number): Promise<ResponseDto>;
    getPostListNewsFeed(request: GetPostListNewsFeedRequest): Promise<ResponseDto>;
    getPostListWall(request: GetPostListWallRequest): Promise<ResponseDto>;
    getListUsersLikePost(request: GetListUsersLikePostRequest): Promise<ResponseDto>;
    searchPost(request: SearchRequest): any;
}
