import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { IPostLikedUsersRepository } from "../ipost-liked-users.repository";
export declare class PostLikedUsersRepository extends BaseRepository implements IPostLikedUsersRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
}
