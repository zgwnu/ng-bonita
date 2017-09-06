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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Human Task Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc3
//
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaHumanTaskMapping } from './zgwnu-bonita-human-task-mapping';
var ZgwnuBonitaBpmHumanTaskService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmHumanTaskService, _super);
    function ZgwnuBonitaBpmHumanTaskService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.HUMAN_TASK_RESOURCE_PATH = '/bpm/humanTask';
        _this.humanTaskResourceUrl = configService.bonitaUrls.apiUrl + _this.HUMAN_TASK_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmHumanTaskService.prototype.searchHumanTasks = function (searchParms) {
        var humanTaskMapping = new ZgwnuBonitaHumanTaskMapping();
        return this.http.get(this.buildHumanTaskSearchRequest(searchParms), this.configService.options)
            .map(humanTaskMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmHumanTaskService.prototype.buildHumanTaskSearchRequest = function (searchParms) {
        return this.humanTaskResourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmHumanTaskService.prototype.getHumanTask = function (humanTaskId) {
        var humanTaskMapping = new ZgwnuBonitaHumanTaskMapping();
        return this.http.get(this.humanTaskResourceUrl + '/' + humanTaskId, this.configService.options)
            .map(humanTaskMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmHumanTaskService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmHumanTaskService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBpmHumanTaskService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBpmHumanTaskService };
//# sourceMappingURL=zgwnu-bonita-bpm-human-task.service.js.map