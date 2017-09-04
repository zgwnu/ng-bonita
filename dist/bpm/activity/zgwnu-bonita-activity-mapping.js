"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_activity_1 = require("./zgwnu-bonita-activity");
var ZgwnuBonitaActivityMapping = /** @class */ (function () {
    function ZgwnuBonitaActivityMapping() {
    }
    ZgwnuBonitaActivityMapping.prototype.mapResponse = function (res) {
        var activityData = new zgwnu_bonita_activity_1.ZgwnuBonitaActivity(res.json());
        return activityData;
    };
    ZgwnuBonitaActivityMapping.prototype.mapResponseArray = function (res) {
        var activityDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            activityDataArray.push(new zgwnu_bonita_activity_1.ZgwnuBonitaActivity(body));
        }
        return activityDataArray;
    };
    return ZgwnuBonitaActivityMapping;
}());
exports.ZgwnuBonitaActivityMapping = ZgwnuBonitaActivityMapping;
//# sourceMappingURL=zgwnu-bonita-activity-mapping.js.map