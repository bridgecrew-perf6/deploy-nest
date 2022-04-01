import { DeleteResult } from "typeorm";
export interface IBaseRepository {
    findOne(id: any): Promise<any>;
    findByCondition(filterCondition: any, orderBy: any): Promise<any[]>;
    findAll(orderBy?: any): Promise<any[]>;
    create(data: any | any): Promise<any>;
    update(data: any | any): Promise<any>;
    remove(id: any): Promise<DeleteResult>;
}
