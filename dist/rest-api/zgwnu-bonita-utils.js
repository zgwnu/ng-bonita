"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZgwnuBonitaUtils = /** @class */ (function () {
    function ZgwnuBonitaUtils() {
    }
    ZgwnuBonitaUtils.prototype.getDateValue = function (bonitaDateValue) {
        return new Date(bonitaDateValue.substr(0, 10) + 'T' + bonitaDateValue.substr(11));
    };
    return ZgwnuBonitaUtils;
}());
exports.ZgwnuBonitaUtils = ZgwnuBonitaUtils;
//# sourceMappingURL=zgwnu-bonita-utils.js.map