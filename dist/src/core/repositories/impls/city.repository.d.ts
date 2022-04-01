import { BaseRepository } from "../../repositories/impls/base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { ICityRepository } from "../icity.repository";
export declare class CityRepository extends BaseRepository implements ICityRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
}
