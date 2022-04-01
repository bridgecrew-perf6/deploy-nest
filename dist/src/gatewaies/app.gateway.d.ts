import { Server, Socket } from 'socket.io';
import { MessagesRequestInterface, CommentNotifyRequestInterface, ReactNotifyRequestInterface } from './interfaces/messages.interface';
import { JwtService } from '@nestjs/jwt';
import { IDeviceRepository } from 'src/core/repositories/idevice.repository';
export declare class AppGateway {
    private jwtService;
    private _deviceRepos;
    server: Server;
    private _logger;
    constructor(jwtService: JwtService, _deviceRepos: IDeviceRepository);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    messagesReceive(payload: MessagesRequestInterface): Promise<any>;
    commentNotification(payload: CommentNotifyRequestInterface): Promise<any>;
    reactNotification(payload: ReactNotifyRequestInterface): Promise<any>;
}
