import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { ICommentRepository } from "../icomment.repository";
import { GetCommentListByPostIdRequest } from "../../dtos/requests/comment/get-comment-list-by-post-id.request";
export declare class CommentRepository extends BaseRepository implements ICommentRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
    getCommentListByPostId(request: GetCommentListByPostIdRequest): Promise<any>;
}
