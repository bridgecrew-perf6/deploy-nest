import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { IPostRepository } from "../ipost.repository";
import { GetPostListNewsFeedRequest } from "../../dtos/requests/post/get-post-list-news-feed.request";
import { GetPostListWallRequest } from "../../dtos/requests/post/get-post-list-wall.request";
import { GetListUsersLikePostRequest } from "../../dtos/requests/post/get-list-users-like-post.request";
import { SearchRequest } from "../../dtos/requests/common/search.request";
export declare class PostRepository extends BaseRepository implements IPostRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
    getPostListNewsFeed(request: GetPostListNewsFeedRequest): Promise<any>;
    getPostListWall(request: GetPostListWallRequest): Promise<any>;
    getListUsersLikePost(request: GetListUsersLikePostRequest): Promise<any>;
    searchPost(request: SearchRequest): Promise<any>;
}
