import { BaseEntityAutoId } from "./base/base.entity";
export declare class CommentEntity extends BaseEntityAutoId {
    content: string;
    postId: number;
    userId: number;
    isDeleted: boolean;
}
