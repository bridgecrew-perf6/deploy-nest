"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LANGUAGE_ENUM = exports.PRIVACY_SETTING = exports.GENDER_ENUM = exports.USER_STATUS_ENUM = exports.USER_TYPE_ENUM = exports.ORDER_BY = exports.S3_UPLOAD_FOLDER = exports.COMMON_CONSTANTS = exports.APP_CONSTANTS = void 0;
var APP_CONSTANTS;
(function (APP_CONSTANTS) {
    APP_CONSTANTS["USER_KEY"] = "user_key";
})(APP_CONSTANTS = exports.APP_CONSTANTS || (exports.APP_CONSTANTS = {}));
exports.COMMON_CONSTANTS = {
    REGEX_USERNAME: new RegExp(/^$|[a-zA-Z0-9_]+$/),
    REGEX_EMAIL: new RegExp(/^(|[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,})$/),
    TIMEZONE: 'UTC',
    START_TIME_STR: '00:00:00',
    PERCENT_CHAR: '%',
    PIPE_CHAR: '|',
};
exports.S3_UPLOAD_FOLDER = {
    UPLOAD: 'upload'
};
var ORDER_BY;
(function (ORDER_BY) {
    ORDER_BY["DESC"] = "DESC";
    ORDER_BY["ASC"] = "ASC";
})(ORDER_BY = exports.ORDER_BY || (exports.ORDER_BY = {}));
var USER_TYPE_ENUM;
(function (USER_TYPE_ENUM) {
    USER_TYPE_ENUM["PERSONAL"] = "Personal";
    USER_TYPE_ENUM["BUSINESS"] = "Business";
})(USER_TYPE_ENUM = exports.USER_TYPE_ENUM || (exports.USER_TYPE_ENUM = {}));
var USER_STATUS_ENUM;
(function (USER_STATUS_ENUM) {
    USER_STATUS_ENUM["ACTIVE"] = "Active";
    USER_STATUS_ENUM["INACTIVE"] = "Inactive";
})(USER_STATUS_ENUM = exports.USER_STATUS_ENUM || (exports.USER_STATUS_ENUM = {}));
var GENDER_ENUM;
(function (GENDER_ENUM) {
    GENDER_ENUM["MALE"] = "Male";
    GENDER_ENUM["FEMALE"] = "Female";
    GENDER_ENUM["OTHER"] = "Other";
})(GENDER_ENUM = exports.GENDER_ENUM || (exports.GENDER_ENUM = {}));
var PRIVACY_SETTING;
(function (PRIVACY_SETTING) {
    PRIVACY_SETTING["ONLY_ME"] = "Only me";
    PRIVACY_SETTING["PUBLIC"] = "Public";
    PRIVACY_SETTING["FRIENDS"] = "Friends";
    PRIVACY_SETTING["FRIENDS_EXCEPT"] = "Friends except";
    PRIVACY_SETTING["SPECIFIC_FRIENDS"] = "Specific friends";
})(PRIVACY_SETTING = exports.PRIVACY_SETTING || (exports.PRIVACY_SETTING = {}));
var LANGUAGE_ENUM;
(function (LANGUAGE_ENUM) {
    LANGUAGE_ENUM["VIETNAMESE"] = "VI";
    LANGUAGE_ENUM["ENGLISH"] = "ENG";
})(LANGUAGE_ENUM = exports.LANGUAGE_ENUM || (exports.LANGUAGE_ENUM = {}));
//# sourceMappingURL=common.constant.js.map