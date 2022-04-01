import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class ConfigService {
    constructor();
    get isDevelopment(): boolean;
    get isProduction(): boolean;
    get(key: string): string;
    getNumber(key: string): number;
    get nodeEnv(): string;
    get ENV_CONFIG(): {
        TIMEZONE: string;
        JWT_SECRET_KEY: string;
        EXPIRES_TIME: string;
    };
    get typeOrmConfig(): TypeOrmModuleOptions;
}
export declare const ENV_CONFIG: {
    TIMEZONE: string;
    JWT_SECRET_KEY: string;
    EXPIRES_TIME: string;
};
