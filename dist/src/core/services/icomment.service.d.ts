import { CreateCommentRequest } from "../dtos/requests/comment/create-comment.request";
import { GetCommentListByPostIdRequest } from "../dtos/requests/comment/get-comment-list-by-post-id.request";
import { UpdateCommentRequest } from "../dtos/requests/comment/update-comment.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface ICommentService extends IBaseService {
    createComment(request: CreateCommentRequest): Promise<ResponseDto>;
    updateComment(id: number, request: UpdateCommentRequest): Promise<ResponseDto>;
    getCommentById(id: number): Promise<ResponseDto>;
    deleteCommentById(id: number): Promise<ResponseDto>;
    getCommentListByPostId(request: GetCommentListByPostIdRequest): Promise<ResponseDto>;
}
