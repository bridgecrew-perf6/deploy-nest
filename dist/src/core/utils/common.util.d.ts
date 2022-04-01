export declare class CommonUtil {
    private configService;
    constructor();
    _nationalPhone: string;
    createNationalPhone(phone: string): string;
    currentDate(): Date;
    getUsername(): Promise<string>;
    getUserId(): Promise<number>;
}
