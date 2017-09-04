"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_session_1 = require("./zgwnu-bonita-session");
var ZgwnuBonitaSessionMapping = /** @class */ (function () {
    function ZgwnuBonitaSessionMapping() {
    }
    ZgwnuBonitaSessionMapping.prototype.mapResponse = function (res) {
        var body = res.json();
        var headers = res.headers;
        var sessionData = new zgwnu_bonita_session_1.ZgwnuBonitaSession(body, headers);
        return sessionData;
    };
    ZgwnuBonitaSessionMapping.prototype.mapResponseArray = function (res) {
        return this.mapResponse(res);
    };
    return ZgwnuBonitaSessionMapping;
}());
exports.ZgwnuBonitaSessionMapping = ZgwnuBonitaSessionMapping;
//# sourceMappingURL=zgwnu-bonita-session-mapping.js.map