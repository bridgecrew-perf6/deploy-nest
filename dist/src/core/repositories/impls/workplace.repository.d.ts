import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { IWorkplaceRepository } from "../iworkplace.repository";
export declare class WorkplaceRepository extends BaseRepository implements IWorkplaceRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
}
