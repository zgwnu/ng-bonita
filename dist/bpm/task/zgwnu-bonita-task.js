var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ZgwnuBonitaActivity } from '../activity/zgwnu-bonita-activity';
var ZgwnuBonitaTask = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaTask, _super);
    function ZgwnuBonitaTask(taskData) {
        return _super.call(this, taskData) || this;
    }
    return ZgwnuBonitaTask;
}(ZgwnuBonitaActivity));
export { ZgwnuBonitaTask };
//# sourceMappingURL=zgwnu-bonita-task.js.map