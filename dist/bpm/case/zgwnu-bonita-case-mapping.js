import { ZgwnuBonitaCase } from './zgwnu-bonita-case';
var ZgwnuBonitaCaseMapping = /** @class */ (function () {
    function ZgwnuBonitaCaseMapping() {
    }
    ZgwnuBonitaCaseMapping.prototype.mapResponse = function (res) {
        var caseData = new ZgwnuBonitaCase(res.json());
        return caseData;
    };
    ZgwnuBonitaCaseMapping.prototype.mapResponseArray = function (res) {
        var caseDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            caseDataArray.push(new ZgwnuBonitaCase(body));
        }
        return caseDataArray;
    };
    return ZgwnuBonitaCaseMapping;
}());
export { ZgwnuBonitaCaseMapping };
//# sourceMappingURL=zgwnu-bonita-case-mapping.js.map