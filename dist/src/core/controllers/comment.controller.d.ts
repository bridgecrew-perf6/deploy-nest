import { Logger } from "@nestjs/common";
import { ICommentService } from "../services/icomment.service";
import { CreateCommentRequest } from "../dtos/requests/comment/create-comment.request";
import { UpdateCommentRequest } from "../dtos/requests/comment/update-comment.request";
import { GetCommentListByPostIdRequest } from "../dtos/requests/comment/get-comment-list-by-post-id.request";
export declare class CommentController {
    private _commentService;
    readonly _logger: Logger;
    constructor(_commentService: ICommentService);
    createComment(request: CreateCommentRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    updateComment(id: number, request: UpdateCommentRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getCommentById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    deleteCommentById(id: number): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    getCommentListByPostId(request: GetCommentListByPostIdRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
}
