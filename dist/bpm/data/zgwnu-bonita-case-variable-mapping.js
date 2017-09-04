"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_case_variable_1 = require("./zgwnu-bonita-case-variable");
var ZgwnuBonitaCaseVariableMapping = /** @class */ (function () {
    function ZgwnuBonitaCaseVariableMapping() {
    }
    ZgwnuBonitaCaseVariableMapping.prototype.mapResponse = function (res) {
        var caseVariableData = new zgwnu_bonita_case_variable_1.ZgwnuBonitaCaseVariable(res.json());
        return caseVariableData;
    };
    ZgwnuBonitaCaseVariableMapping.prototype.mapResponseArray = function (res) {
        var caseVariableDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            caseVariableDataArray.push(new zgwnu_bonita_case_variable_1.ZgwnuBonitaCaseVariable(body));
        }
        return caseVariableDataArray;
    };
    return ZgwnuBonitaCaseVariableMapping;
}());
exports.ZgwnuBonitaCaseVariableMapping = ZgwnuBonitaCaseVariableMapping;
//# sourceMappingURL=zgwnu-bonita-case-variable-mapping.js.map