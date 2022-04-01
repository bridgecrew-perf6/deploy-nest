"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV_CONFIG = exports.ConfigService = void 0;
const dotenv = require("dotenv");
class ConfigService {
    constructor() {
        dotenv.config({
            path: `.env`,
        });
    }
    get isDevelopment() {
        return this.nodeEnv === 'development';
    }
    get isProduction() {
        return this.nodeEnv === 'production';
    }
    get(key) {
        return process.env[key];
    }
    getNumber(key) {
        return Number(this.get(key));
    }
    get nodeEnv() {
        return this.get('NODE_ENV') || 'development';
    }
    get ENV_CONFIG() {
        return {
            TIMEZONE: `${this.get('APP_TIMEZONE')}`,
            JWT_SECRET_KEY: `${this.get('JWT_SECRET_KEY')}`,
            EXPIRES_TIME: `${this.get('EXPIRES_TIME')}`,
        };
    }
    get typeOrmConfig() {
        const entities = [__dirname + '/../../core/entities/**/*.entity{.ts,.js}'];
        const migrations = [__dirname + '/../../migrations/*{.ts,.js}'];
        return {
            entities,
            migrations,
            type: 'mysql',
            host: this.get('DB_HOST'),
            port: this.getNumber('DB_PORT'),
            username: this.get('DB_USERNAME'),
            password: this.get('DB_PASSWORD'),
            database: this.get('DB_DATABASE'),
            migrationsRun: true,
            connectTimeout: 1000,
            logging: this.nodeEnv === 'development',
            multipleStatements: true
        };
    }
}
exports.ConfigService = ConfigService;
exports.ENV_CONFIG = new ConfigService().ENV_CONFIG;
//# sourceMappingURL=config.service.js.map