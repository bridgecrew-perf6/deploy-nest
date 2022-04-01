import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { ICollegeRepository } from "../icollege.repository";
export declare class CollegeRepository extends BaseRepository implements ICollegeRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
}
