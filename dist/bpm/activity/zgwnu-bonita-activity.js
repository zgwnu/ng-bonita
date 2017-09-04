"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_activity_deploy_actor_1 = require("./zgwnu-bonita-activity-deploy-actor");
var zgwnu_bonita_utils_1 = require("../../rest-api/zgwnu-bonita-utils");
var ZgwnuBonitaActivity = /** @class */ (function () {
    function ZgwnuBonitaActivity(activityData) {
        var utils = new zgwnu_bonita_utils_1.ZgwnuBonitaUtils();
        this.id = activityData.id;
        this.type = activityData.type;
        this.name = activityData.name;
        this.displayName = activityData.displayName;
        this.description = activityData.description;
        this.displayDescription = activityData.displayDescription;
        this.state = activityData.state;
        this.reached_state_date = utils.getDateValue(activityData.reached_state_date);
        this.last_update_date = utils.getDateValue(activityData.last_update_date);
        this.dueDate = utils.getDateValue(activityData.dueDate);
        this.priority = activityData.priority;
        this.processId = activityData.processId;
        this.parentCaseId = activityData.parentCaseId;
        this.rootCaseId = activityData.rootCaseId;
        this.rootContainerId = activityData.rootContainerId;
        this.executedBy = activityData.executedBy;
        this.executedBySubstitute = activityData.executedBySubstitute;
        if (this.actorId instanceof zgwnu_bonita_activity_deploy_actor_1.ZgwnuBonitaActivityDeployActor) {
            this.actorId.id = activityData.actorId.id;
            this.actorId.process_id = activityData.actorId.process_id;
            this.actorId.description = activityData.actorId.description;
            this.actorId.name = activityData.actorId.name;
            this.actorId.displayName = activityData.actorId.displayName;
        }
        else {
            this.actorId = activityData.actorId;
        }
        this.assigned_id = activityData.assigned_id;
        if (activityData.assigned_date != '') {
            this.assigned_date = utils.getDateValue(activityData.assigned_date);
        }
    }
    return ZgwnuBonitaActivity;
}());
exports.ZgwnuBonitaActivity = ZgwnuBonitaActivity;
//# sourceMappingURL=zgwnu-bonita-activity.js.map