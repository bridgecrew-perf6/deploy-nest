import { BaseEntityAutoId } from "./base/base.entity";
export declare class PostLikedUsersEntity extends BaseEntityAutoId {
    postId: number;
    userId: number;
    isDeleted: boolean;
}
