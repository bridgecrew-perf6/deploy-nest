"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PostLikedUsersRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLikedUsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const module_config_1 = require("../../config/module.config");
const base_repository_1 = require("./base.repository");
const typeorm_2 = require("typeorm");
let PostLikedUsersRepository = PostLikedUsersRepository_1 = class PostLikedUsersRepository extends base_repository_1.BaseRepository {
    constructor(repos) {
        super(repos);
        this.repos = repos;
        this._logger = new common_1.Logger(PostLikedUsersRepository_1.name);
        this._logger.log("============== Constructor PostLikedUsersRepository ==============");
    }
};
PostLikedUsersRepository = PostLikedUsersRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(module_config_1.ENTITIES_CONFIG.POST_LIKED_USERS)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostLikedUsersRepository);
exports.PostLikedUsersRepository = PostLikedUsersRepository;
//# sourceMappingURL=post-liked-users.repository.js.map