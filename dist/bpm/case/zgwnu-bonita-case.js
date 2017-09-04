"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_utils_1 = require("../../rest-api/zgwnu-bonita-utils");
var ZgwnuBonitaCase = /** @class */ (function () {
    function ZgwnuBonitaCase(caseData) {
        var utils = new zgwnu_bonita_utils_1.ZgwnuBonitaUtils();
        this.id = caseData.id;
        this.end_date = utils.getDateValue(caseData.end_date);
        this.failedFlowNodes = caseData.failedFlowNodes;
        this.start = utils.getDateValue(caseData.start);
        this.activeFlowNodes = caseData.activeFlowNodes;
        this.state = caseData.state;
        this.rootCaseId = caseData.rootCaseId;
        this.started_by = caseData.started_by;
        this.processDefinitionId = caseData.processDefinitionId;
        this.last_update_date = utils.getDateValue(caseData.last_update_date);
        if (caseData.searchIndex1Label) {
            this.searchIndex1Label = caseData.searchIndex1Label;
        }
        if (caseData.searchIndex2Label) {
            this.searchIndex2Label = caseData.searchIndex2Label;
        }
        if (caseData.searchIndex3Label) {
            this.searchIndex3Label = caseData.searchIndex2Label;
        }
        if (caseData.searchIndex4Label) {
            this.searchIndex4Label = caseData.searchIndex3Label;
        }
        if (caseData.searchIndex5Label) {
            this.searchIndex5Label = caseData.searchIndex4Label;
        }
        if (caseData.searchIndex1Value) {
            this.searchIndex1Value = caseData.searchIndex1Value;
        }
        if (caseData.searchIndex2Value) {
            this.searchIndex2Value = caseData.searchIndex2Value;
        }
        if (caseData.searchIndex3Value) {
            this.searchIndex3Value = caseData.searchIndex3Value;
        }
        if (caseData.searchIndex4Value) {
            this.searchIndex4Value = caseData.searchIndex4Value;
        }
        if (caseData.searchIndex5Value) {
            this.searchIndex5Value = caseData.searchIndex5Value;
        }
    }
    return ZgwnuBonitaCase;
}());
exports.ZgwnuBonitaCase = ZgwnuBonitaCase;
//# sourceMappingURL=zgwnu-bonita-case.js.map