import { ZgwnuBonitaActivity } from './zgwnu-bonita-activity';
var ZgwnuBonitaActivityMapping = /** @class */ (function () {
    function ZgwnuBonitaActivityMapping() {
    }
    ZgwnuBonitaActivityMapping.prototype.mapResponse = function (res) {
        var activityData = new ZgwnuBonitaActivity(res.json());
        return activityData;
    };
    ZgwnuBonitaActivityMapping.prototype.mapResponseArray = function (res) {
        var activityDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            activityDataArray.push(new ZgwnuBonitaActivity(body));
        }
        return activityDataArray;
    };
    return ZgwnuBonitaActivityMapping;
}());
export { ZgwnuBonitaActivityMapping };
//# sourceMappingURL=zgwnu-bonita-activity-mapping.js.map