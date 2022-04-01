"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUtil = void 0;
const config_service_1 = require("../../shared/services/config.service");
const common_constant_1 = require("../common/constants/common.constant");
const user_service_1 = require("../services/impls/user.service");
const moment = require('moment-timezone');
class CommonUtil {
    constructor() {
        this.configService = new config_service_1.ConfigService();
        this._nationalPhone = this.configService.get('NATIONAL_PHONE');
    }
    createNationalPhone(phone) {
        return (this._nationalPhone + phone);
    }
    currentDate() {
        let timezone = config_service_1.ENV_CONFIG.TIMEZONE;
        if (config_service_1.ENV_CONFIG.TIMEZONE === "undefined") {
            timezone = common_constant_1.COMMON_CONSTANTS.TIMEZONE;
        }
        const date = new Date();
        const momentDate = moment().tz(timezone);
        const utcOffset = momentDate.utcOffset();
        const newDate = new Date(date.getTime() + (utcOffset) * 60 * 1000);
        return newDate;
    }
    async getUsername() {
        const currentUser = await user_service_1.UserService.getAuthUser();
        if (currentUser) {
            const username = currentUser["username"];
            return username;
        }
        else {
            return "";
        }
    }
    async getUserId() {
        const currentUser = await user_service_1.UserService.getAuthUser();
        if (currentUser) {
            const userId = currentUser["id"];
            return Number(userId);
        }
        else {
            return 0;
        }
    }
}
exports.CommonUtil = CommonUtil;
//# sourceMappingURL=common.util.js.map