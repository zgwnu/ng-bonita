import { ZgwnuBonitaUtils } from '../../rest-api/zgwnu-bonita-utils';
var ZgwnuBonitaProcessDefinition = /** @class */ (function () {
    function ZgwnuBonitaProcessDefinition(processDefinitionData) {
        var utils = new ZgwnuBonitaUtils();
        if (processDefinitionData) {
            this.id = processDefinitionData.id;
            this.icon = processDefinitionData.icon;
            this.displayDescription = processDefinitionData.displayDescription;
            this.deploymentDate = utils.getDateValue(processDefinitionData.deploymentDate);
            this.description = processDefinitionData.description;
            this.activationState = processDefinitionData.activationState;
            this.name = processDefinitionData.name;
            this.deployedBy = processDefinitionData.deployedBy;
            this.displayName = processDefinitionData.displayName;
            this.actorinitiatorid = processDefinitionData.actorinitiatorid;
            this.last_update_date = utils.getDateValue(processDefinitionData.last_update_date);
            this.configurationState = processDefinitionData.configurationState;
            this.version = processDefinitionData.version;
        }
    }
    return ZgwnuBonitaProcessDefinition;
}());
export { ZgwnuBonitaProcessDefinition };
//# sourceMappingURL=zgwnu-bonita-process-definition.js.map