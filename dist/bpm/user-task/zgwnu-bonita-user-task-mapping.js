import { ZgwnuBonitaUserTask } from './zgwnu-bonita-user-task';
var ZgwnuBonitaUserTaskMapping = /** @class */ (function () {
    function ZgwnuBonitaUserTaskMapping() {
    }
    ZgwnuBonitaUserTaskMapping.prototype.mapResponse = function (res) {
        var userTaskData = new ZgwnuBonitaUserTask(res.json());
        return userTaskData;
    };
    ZgwnuBonitaUserTaskMapping.prototype.mapResponseArray = function (res) {
        var userTaskDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            userTaskDataArray.push(new ZgwnuBonitaUserTask(body));
        }
        return userTaskDataArray;
    };
    return ZgwnuBonitaUserTaskMapping;
}());
export { ZgwnuBonitaUserTaskMapping };
//# sourceMappingURL=zgwnu-bonita-user-task-mapping.js.map