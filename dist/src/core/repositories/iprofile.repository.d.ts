import { SearchRequest } from "../dtos/requests/common/search.request";
import { IBaseRepository } from "./ibase.repository";
export interface IProfileRepository extends IBaseRepository {
    getProfileDetailById(id: number): any;
    searchProfile(request: SearchRequest): any;
}
