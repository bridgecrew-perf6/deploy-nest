"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_service_1 = require("./shared/services/config.service");
const shared_module_1 = require("./shared/shared.module");
const swagger_1 = require("./swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const configService = app.select(shared_module_1.SharedModule).get(config_service_1.ConfigService);
    app.setGlobalPrefix(configService.get('API_PREFIX'));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        dismissDefaultMessages: true,
        validationError: {
            target: false,
        },
    }));
    (0, swagger_1.setupSwagger)(app);
    const port = configService.getNumber('PORT');
    await app.listen(port);
    console.info(`server running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map