import { BaseEntityAutoId } from "./base/base.entity";
export declare class DeviceEntity extends BaseEntityAutoId {
    socketId: string;
    userId: number;
    isDeleted: boolean;
}
