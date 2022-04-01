import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { ISchoolRepository } from "../ischool.repository";
export declare class SchoolRepository extends BaseRepository implements ISchoolRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
}
