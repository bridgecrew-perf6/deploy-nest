import { ResponseDto } from "../../dtos/responses/response.dto";
import { IBaseService } from "../ibase.service";
export declare class BaseService implements IBaseService {
    private _repos;
    private _log;
    constructor(repos: any);
    findOne(id: any): Promise<ResponseDto>;
    findByCondition(condition: any, orderBy?: any): Promise<ResponseDto>;
    findAll(orderBy?: any): Promise<ResponseDto>;
    create<T>(data: T | any): Promise<ResponseDto>;
    update<T>(data: T | any): Promise<ResponseDto>;
    remove(id: any): Promise<ResponseDto>;
}
