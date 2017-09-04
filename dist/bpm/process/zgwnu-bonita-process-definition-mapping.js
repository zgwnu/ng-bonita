"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_process_definition_1 = require("./zgwnu-bonita-process-definition");
var ZgwnuBonitaProcessDefinitionMapping = /** @class */ (function () {
    function ZgwnuBonitaProcessDefinitionMapping() {
    }
    ZgwnuBonitaProcessDefinitionMapping.prototype.mapResponse = function (res) {
        console.log(res);
        var processDefinitionData = new zgwnu_bonita_process_definition_1.ZgwnuBonitaProcessDefinition(res.json());
        return processDefinitionData;
    };
    ZgwnuBonitaProcessDefinitionMapping.prototype.mapResponseArray = function (res) {
        var processDefinitionDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            processDefinitionDataArray.push(new zgwnu_bonita_process_definition_1.ZgwnuBonitaProcessDefinition(body));
        }
        return processDefinitionDataArray;
    };
    return ZgwnuBonitaProcessDefinitionMapping;
}());
exports.ZgwnuBonitaProcessDefinitionMapping = ZgwnuBonitaProcessDefinitionMapping;
//# sourceMappingURL=zgwnu-bonita-process-definition-mapping.js.map