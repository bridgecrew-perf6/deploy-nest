import { bool } from "aws-sdk/clients/signer";
export interface MessagesRequestInterface {
    data: {
        message: string;
        toUserId: number;
    };
}
export interface MessagesResponseInterface {
    message: string;
    fromUserName: string;
    fromUserId: number;
}
export interface CommentNotifyRequestInterface {
    data: {
        content: string;
        postId: number;
        ownerPostId: number;
    };
}
export interface CommentNotifyResponseInterface {
    content: string;
    fromUserName: string;
    fromUserId: number;
}
export interface ReactNotifyRequestInterface {
    data: {
        postId: number;
        ownerPostId: number;
        like: bool;
    };
}
export interface ReactNotifyResponseInterface {
    postId: number;
    like: bool;
    fromUserId: number;
    fromUserName: string;
}
