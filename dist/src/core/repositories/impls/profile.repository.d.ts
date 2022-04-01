import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { IProfileRepository } from "../iprofile.repository";
import { ConfigService } from "../../../shared/services/config.service";
import { SearchRequest } from "../../dtos/requests/common/search.request";
export declare class ProfileRepository extends BaseRepository implements IProfileRepository {
    private readonly repos;
    private configService;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>, configService: ConfigService);
    _nationalPhone: string;
    getProfileDetailById(id: number): Promise<any>;
    searchProfile(request: SearchRequest): Promise<any>;
}
