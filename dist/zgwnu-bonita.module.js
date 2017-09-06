import { NgModule } from '@angular/core';
import { ZgwnuBonitaBusinessDataService } from './bdm';
import { ZgwnuBonitaBpmUserTaskService } from './bpm/user-task';
import { ZgwnuBonitaBpmHumanTaskService } from './bpm/human-task';
import { ZgwnuBonitaBpmTaskService } from './bpm/task';
import { ZgwnuBonitaBpmActivityService } from './bpm/activity';
import { ZgwnuBonitaBpmDataService } from './bpm/data';
import { ZgwnuBonitaBpmCaseDocumentService } from './bpm/document';
import { ZgwnuBonitaBpmCaseService } from './bpm/case';
import { ZgwnuBonitaBpmProcessService } from './bpm/process';
import { ZgwnuBonitaAuthenticationService } from './authentication';
import { ZgwnuBonitaConfigService } from './rest-api';
import { ZgwnuBonitaFileUploadService } from './file-upload';
var ZgwnuBonitaModule = /** @class */ (function () {
    function ZgwnuBonitaModule() {
    }
    ZgwnuBonitaModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        ZgwnuBonitaConfigService,
                        ZgwnuBonitaAuthenticationService,
                        ZgwnuBonitaBpmProcessService,
                        ZgwnuBonitaBpmCaseService,
                        ZgwnuBonitaBpmCaseDocumentService,
                        ZgwnuBonitaBpmDataService,
                        ZgwnuBonitaBpmActivityService,
                        ZgwnuBonitaBpmActivityService,
                        ZgwnuBonitaBpmTaskService,
                        ZgwnuBonitaBpmHumanTaskService,
                        ZgwnuBonitaBpmUserTaskService,
                        ZgwnuBonitaBusinessDataService,
                        ZgwnuBonitaFileUploadService,
                    ]
                },] },
    ];
    /** @nocollapse */
    ZgwnuBonitaModule.ctorParameters = function () { return []; };
    return ZgwnuBonitaModule;
}());
export { ZgwnuBonitaModule };
//# sourceMappingURL=zgwnu-bonita.module.js.map