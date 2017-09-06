import { ZgwnuBonitaHumanTask } from './zgwnu-bonita-human-task';
var ZgwnuBonitaHumanTaskMapping = /** @class */ (function () {
    function ZgwnuBonitaHumanTaskMapping() {
    }
    ZgwnuBonitaHumanTaskMapping.prototype.mapResponse = function (res) {
        var humanTaskData = new ZgwnuBonitaHumanTask(res.json());
        return humanTaskData;
    };
    ZgwnuBonitaHumanTaskMapping.prototype.mapResponseArray = function (res) {
        var humanTaskDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            humanTaskDataArray.push(new ZgwnuBonitaHumanTask(body));
        }
        return humanTaskDataArray;
    };
    return ZgwnuBonitaHumanTaskMapping;
}());
export { ZgwnuBonitaHumanTaskMapping };
//# sourceMappingURL=zgwnu-bonita-human-task-mapping.js.map