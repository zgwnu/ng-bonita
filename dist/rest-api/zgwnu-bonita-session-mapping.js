import { ZgwnuBonitaSession } from './zgwnu-bonita-session';
var ZgwnuBonitaSessionMapping = /** @class */ (function () {
    function ZgwnuBonitaSessionMapping() {
    }
    ZgwnuBonitaSessionMapping.prototype.mapResponse = function (res) {
        var body = res.json();
        var headers;
        if (res.headers != null) {
            headers = res.headers;
        }
        var sessionData = new ZgwnuBonitaSession(body, headers);
        return sessionData;
    };
    ZgwnuBonitaSessionMapping.prototype.mapResponseArray = function (res) {
        return this.mapResponse(res);
    };
    return ZgwnuBonitaSessionMapping;
}());
export { ZgwnuBonitaSessionMapping };
//# sourceMappingURL=zgwnu-bonita-session-mapping.js.map