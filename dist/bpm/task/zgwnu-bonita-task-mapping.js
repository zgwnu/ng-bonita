import { ZgwnuBonitaTask } from './zgwnu-bonita-task';
var ZgwnuBonitaTaskMapping = /** @class */ (function () {
    function ZgwnuBonitaTaskMapping() {
    }
    ZgwnuBonitaTaskMapping.prototype.mapResponse = function (res) {
        var taskData = new ZgwnuBonitaTask(res.json());
        return taskData;
    };
    ZgwnuBonitaTaskMapping.prototype.mapResponseArray = function (res) {
        var taskDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            taskDataArray.push(new ZgwnuBonitaTask(body));
        }
        return taskDataArray;
    };
    return ZgwnuBonitaTaskMapping;
}());
export { ZgwnuBonitaTaskMapping };
//# sourceMappingURL=zgwnu-bonita-task-mapping.js.map