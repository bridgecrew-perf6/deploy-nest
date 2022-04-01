import { Logger } from "@nestjs/common";
import { CreateUserRequest } from "../dtos/requests/user/create-user.request";
import { LoginRequest } from "../dtos/requests/user/login.request";
import { IUserService } from "../services/iuser.service";
import { UpdateUserLanguageRequest } from "../dtos/requests/user/update-user-language.request";
export declare class UserController {
    private _userService;
    readonly _logger: Logger;
    constructor(_userService: IUserService);
    registerUser(request: CreateUserRequest): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    signin(request: LoginRequest): Promise<any>;
    getUserByUsername(username: string): Promise<import("../dtos/responses/response.dto").ResponseDto>;
    updateUserLanguage(request: UpdateUserLanguageRequest): Promise<any>;
}
