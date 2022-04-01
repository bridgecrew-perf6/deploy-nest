export declare class BaseEntity {
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
}
export declare class BaseEntityId extends BaseEntity {
    id: string;
}
export declare class BaseEntityUUID extends BaseEntity {
    id: string;
}
export declare class BaseEntityAutoId extends BaseEntity {
    id: number;
}
