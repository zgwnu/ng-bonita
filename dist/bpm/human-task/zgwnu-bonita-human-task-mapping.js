"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_human_task_1 = require("./zgwnu-bonita-human-task");
var ZgwnuBonitaHumanTaskMapping = /** @class */ (function () {
    function ZgwnuBonitaHumanTaskMapping() {
    }
    ZgwnuBonitaHumanTaskMapping.prototype.mapResponse = function (res) {
        var humanTaskData = new zgwnu_bonita_human_task_1.ZgwnuBonitaHumanTask(res.json());
        return humanTaskData;
    };
    ZgwnuBonitaHumanTaskMapping.prototype.mapResponseArray = function (res) {
        var humanTaskDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            humanTaskDataArray.push(new zgwnu_bonita_human_task_1.ZgwnuBonitaHumanTask(body));
        }
        return humanTaskDataArray;
    };
    return ZgwnuBonitaHumanTaskMapping;
}());
exports.ZgwnuBonitaHumanTaskMapping = ZgwnuBonitaHumanTaskMapping;
//# sourceMappingURL=zgwnu-bonita-human-task-mapping.js.map