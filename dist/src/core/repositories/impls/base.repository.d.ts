import { DeleteResult } from "typeorm";
import { IBaseRepository } from "../ibase.repository";
export declare class BaseRepository implements IBaseRepository {
    private _repos;
    private _log;
    private _commonUtil;
    constructor(repos: any);
    findOne(id: any): Promise<any>;
    findByCondition(condition: any, orderBy?: any): Promise<any[]>;
    findAll(orderBy?: any): Promise<any[]>;
    create(data: any): Promise<any>;
    update(data: any): Promise<any>;
    remove(id: any): Promise<DeleteResult>;
    private convertObjectToJson;
}
