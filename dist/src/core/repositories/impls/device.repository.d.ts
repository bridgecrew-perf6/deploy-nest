import { BaseRepository } from "./base.repository";
import { ObjectLiteral, Repository } from "typeorm";
import { IDeviceRepository } from "../idevice.repository";
export declare class DeviceRepository extends BaseRepository implements IDeviceRepository {
    private readonly repos;
    private readonly _logger;
    constructor(repos: Repository<ObjectLiteral>);
}
