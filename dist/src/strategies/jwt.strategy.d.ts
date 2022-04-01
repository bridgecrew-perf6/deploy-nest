import { Strategy } from 'passport-jwt';
import { AuthPayload } from '../interfaces/auth-payload.interface';
declare const JsonWebTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JsonWebTokenStrategy extends JsonWebTokenStrategy_base {
    constructor();
    validate(payload: AuthPayload): Promise<{
        username: string;
        id: string | number;
    }>;
}
export {};
