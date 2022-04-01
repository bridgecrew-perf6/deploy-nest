import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { IPhotoRepository } from "../iphoto.repository";
import { GetPhotoListByUserIdRequest } from "../../dtos/requests/photo/get-photo-list-by-user-id.request";
export declare class PhotoRepository extends BaseRepository implements IPhotoRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
    getPhotoListByUserId(request: GetPhotoListByUserIdRequest): Promise<any>;
}
