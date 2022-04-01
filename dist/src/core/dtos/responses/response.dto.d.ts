export declare class ResponseDto {
    ErrorCode: string;
    Message: string;
    Data: any;
    AdditionalData: any;
    return?(keyMassage: string | string, data?: any, additionalData?: any): ResponseDto;
}
