import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { IUserRepository } from "../iuser.repository";
export declare class UserRepository extends BaseRepository implements IUserRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
}
