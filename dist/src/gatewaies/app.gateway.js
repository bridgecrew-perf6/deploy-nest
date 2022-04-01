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
var AppGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const jwt_1 = require("@nestjs/jwt");
const module_config_1 = require("../core/config/module.config");
const device_entity_1 = require("../core/entities/device.entity");
const options = {
    cors: {
        origin: ["http://localhost:3000", "example2.com"],
        methods: ["GET", "POST"],
        credentials: true
    }
};
let user = { name: '', id: 0 };
let AppGateway = AppGateway_1 = class AppGateway {
    constructor(jwtService, _deviceRepos) {
        this.jwtService = jwtService;
        this._deviceRepos = _deviceRepos;
        this._logger = new common_1.Logger(AppGateway_1.name);
    }
    async handleConnection(client) {
        var _a, _b, _c;
        this._logger.log(client.id, 'Connected..............................');
        let authToken = (_c = (_b = (_a = client.handshake) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.token) !== null && _c !== void 0 ? _c : '';
        try {
            const decoded = this.jwtService.verify(authToken);
            user.name = decoded.username;
            user.id = decoded.id;
            const device = await this._deviceRepos.findOne({ userId: decoded.id, isDeleted: false });
            if (device) {
                device.socketId = client.id;
                await this._deviceRepos.update(device);
            }
            else {
                const newDevice = new device_entity_1.DeviceEntity;
                newDevice.socketId = client.id;
                newDevice.userId = decoded.id;
                newDevice.isDeleted = false;
                await this._deviceRepos.create(newDevice);
            }
            this._logger.log('decoded', decoded);
        }
        catch (ex) {
            this._logger.log('error', ex);
        }
    }
    async handleDisconnect(client) {
        this._logger.log(client.id, 'Disconnect');
    }
    async messagesReceive(payload) {
        const toUserId = payload.data.toUserId;
        const device = await this._deviceRepos.findOne({ userId: toUserId, isDeleted: false });
        this._logger.log('device', 'device');
        if (device) {
            const data = {
                message: payload.data.message,
                fromUserName: user.name,
                fromUserId: user.id
            };
            this._logger.log('client-message: emit message, type: MESSAGE_RECEIVED');
            this.server.to(device.socketId).emit('message', { type: 'MESSAGE_RECEIVED', data });
        }
    }
    async commentNotification(payload) {
        const device = await this._deviceRepos.findOne({ userId: payload.data.ownerPostId, isDeleted: false });
        this._logger.log('device', 'device');
        if (device) {
            const data = {
                content: payload.data.content,
                fromUserName: user.name,
                fromUserId: user.id
            };
            this._logger.log('client-comment: emit message, type: COMMENT_NOTIFICATION');
            this.server.to(device.socketId).emit('message', { type: 'COMMENT_NOTIFICATION', data });
        }
    }
    async reactNotification(payload) {
        const device = await this._deviceRepos.findOne({ userId: payload.data.ownerPostId, isDeleted: false });
        this._logger.log('device', 'device');
        if (device) {
            const data = {
                postId: payload.data.postId,
                like: payload.data.like,
                fromUserName: user.name,
                fromUserId: user.id
            };
            this._logger.log('client-react: emit message, type: REACT_NOTIFICATION');
            this.server.to(device.socketId).emit('message', { type: 'REACT_NOTIFICATION', data });
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], AppGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('client-message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "messagesReceive", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('client-comment'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "commentNotification", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('client-react'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "reactNotification", null);
AppGateway = AppGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)(3006, options),
    __param(1, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IDEVICE_REPOSITORY)),
    __metadata("design:paramtypes", [jwt_1.JwtService, Object])
], AppGateway);
exports.AppGateway = AppGateway;
//# sourceMappingURL=app.gateway.js.map