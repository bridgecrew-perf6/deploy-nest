import { SearchRequest } from "../dtos/requests/common/search.request";
import { GetListUsersLikePostRequest } from "../dtos/requests/post/get-list-users-like-post.request";
import { GetPostListNewsFeedRequest } from "../dtos/requests/post/get-post-list-news-feed.request";
import { GetPostListWallRequest } from "../dtos/requests/post/get-post-list-wall.request";
import { IBaseRepository } from "./ibase.repository";
export interface IPostRepository extends IBaseRepository {
    getPostListNewsFeed(request: GetPostListNewsFeedRequest): any;
    getPostListWall(request: GetPostListWallRequest): any;
    getListUsersLikePost(request: GetListUsersLikePostRequest): any;
    searchPost(request: SearchRequest): any;
}
