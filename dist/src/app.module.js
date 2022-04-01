"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const core_modules_1 = require("./core/core.modules");
const shared_module_1 = require("./shared/shared.module");
const config_service_1 = require("./shared/services/config.service");
const context_middleware_1 = require("./middlewares/context.middleware");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(context_middleware_1.contextMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_module_1.SharedModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [shared_module_1.SharedModule, core_modules_1.CoreModule],
                useFactory: (configService) => configService.typeOrmConfig,
                inject: [config_service_1.ConfigService],
            }),
            passport_1.PassportModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, jwt_strategy_1.JsonWebTokenStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map