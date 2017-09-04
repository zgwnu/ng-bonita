"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_task_1 = require("./zgwnu-bonita-task");
var ZgwnuBonitaTaskMapping = /** @class */ (function () {
    function ZgwnuBonitaTaskMapping() {
    }
    ZgwnuBonitaTaskMapping.prototype.mapResponse = function (res) {
        var taskData = new zgwnu_bonita_task_1.ZgwnuBonitaTask(res.json());
        return taskData;
    };
    ZgwnuBonitaTaskMapping.prototype.mapResponseArray = function (res) {
        var taskDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            taskDataArray.push(new zgwnu_bonita_task_1.ZgwnuBonitaTask(body));
        }
        return taskDataArray;
    };
    return ZgwnuBonitaTaskMapping;
}());
exports.ZgwnuBonitaTaskMapping = ZgwnuBonitaTaskMapping;
//# sourceMappingURL=zgwnu-bonita-task-mapping.js.map