import { MapperProfile } from "./mapper-profile.util";
export declare class AutoMapperUtil {
    private static _mapperProfile;
    static createMap(): MapperProfile;
    static map(mapConfig: any, source: any): any;
    static mapEntity(mapConfig: any, entity: any, source: any): any;
}
