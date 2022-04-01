import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    readonly _logger: Logger;
    constructor(appService: AppService);
    getHello(): string;
}
