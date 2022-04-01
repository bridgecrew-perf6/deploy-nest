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
var CityRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const module_config_1 = require("../../config/module.config");
const base_repository_1 = require("../../repositories/impls/base.repository");
const typeorm_2 = require("typeorm");
let CityRepository = CityRepository_1 = class CityRepository extends base_repository_1.BaseRepository {
    constructor(repos) {
        super(repos);
        this.repos = repos;
        this._logger = new common_1.Logger(CityRepository_1.name);
        this._logger.log("============== Constructor CityRepository ==============");
    }
};
CityRepository = CityRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(module_config_1.ENTITIES_CONFIG.CITY)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CityRepository);
exports.CityRepository = CityRepository;
//# sourceMappingURL=city.repository.js.map