"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto = void 0;
const error_map_1 = require("../../common/error.map");
class ResponseDto {
    return(keyMassage, data, additionalData) {
        this.ErrorCode = error_map_1.ErrorMap[keyMassage].Code;
        this.Message = error_map_1.ErrorMap[keyMassage].Message;
        this.Data = data || {};
        this.AdditionalData = additionalData || [];
        return this;
    }
}
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response.dto.js.map