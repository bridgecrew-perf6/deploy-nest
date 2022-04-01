import { ResponseDto } from "../../dtos/responses/response.dto";
import { BaseService } from "./base.service";
import { IUserService } from "../iuser.service";
import { IUserRepository } from "../../repositories/iuser.repository";
import { CreateUserRequest } from "../../dtos/requests/user/create-user.request";
import { JwtService } from '@nestjs/jwt';
import { LoginRequest } from "../../dtos/requests/user/login.request";
import { IProfileRepository } from "../../repositories/iprofile.repository";
import { UpdateUserLanguageRequest } from "../../dtos/requests/user/update-user-language.request";
export declare class UserService extends BaseService implements IUserService {
    private _userRepos;
    private _profileRepos;
    private _jwtService;
    private readonly _logger;
    private static _authUserKey;
    private _commonUtil;
    constructor(_userRepos: IUserRepository, _profileRepos: IProfileRepository, _jwtService: JwtService);
    createUser(request: CreateUserRequest): Promise<ResponseDto>;
    login(request: LoginRequest): Promise<any>;
    getUserByUsername(username: string): Promise<ResponseDto>;
    updateUserLanguage(request: UpdateUserLanguageRequest): Promise<any>;
    static setAuthUser(user: any): void;
    static getAuthUser(): unknown;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, storePasswordHash: string): Promise<any>;
}
