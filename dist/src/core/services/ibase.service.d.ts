import { ResponseDto } from "../dtos/responses/response.dto";
export interface IBaseService {
    findOne(id: any): Promise<ResponseDto>;
    findByCondition(filterCondition: any, orderBy: any): Promise<ResponseDto>;
    findAll(orderBy?: any): Promise<ResponseDto>;
    create<T>(data: T | any): Promise<ResponseDto>;
    update<T>(data: T | any): Promise<ResponseDto>;
    remove(id: any): Promise<ResponseDto>;
}
