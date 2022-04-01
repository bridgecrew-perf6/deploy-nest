"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperProfile = void 0;
class MapperProfile {
    constructor() {
        this.mapValue = {};
        this.arrPros = [];
    }
    mapProperties(f) {
        this.mapValue = [];
        let express = new Proxy({}, {
            get(target, prop) { return prop; }
        });
        const pros = f(express);
        if (pros instanceof Array) {
            this.arrPros = pros;
        }
        return this;
    }
    fromProperties(f) {
        let express = new Proxy({}, {
            get(target, prop) { return prop; }
        });
        const pros = f(express);
        if (pros instanceof Array) {
            pros.map((key, index) => {
                this.mapValue[`${this.arrPros[index]}`] = `${key}`;
            });
        }
        return this.mapValue;
    }
}
exports.MapperProfile = MapperProfile;
//# sourceMappingURL=mapper-profile.util.js.map