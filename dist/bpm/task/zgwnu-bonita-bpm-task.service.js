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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Task Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc5
//
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaTaskMapping } from './zgwnu-bonita-task-mapping';
var ZgwnuBonitaBpmTaskService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmTaskService, _super);
    function ZgwnuBonitaBpmTaskService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.TASK_RESOURCE_PATH = '/bpm/task';
        _this.taskResourceUrl = configService.bonitaUrls.apiUrl + _this.TASK_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmTaskService.prototype.searchTasks = function (searchParms) {
        var taskMapping = new ZgwnuBonitaTaskMapping();
        return this.http.get(this.buildTaskSearchRequest(searchParms), this.configService.options)
            .map(taskMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmTaskService.prototype.buildTaskSearchRequest = function (searchParms) {
        return this.taskResourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmTaskService.prototype.getTask = function (taskId) {
        var taskMapping = new ZgwnuBonitaTaskMapping();
        return this.http.get(this.taskResourceUrl + '/' + taskId, this.configService.options)
            .map(taskMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmTaskService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmTaskService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBpmTaskService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBpmTaskService };
//# sourceMappingURL=zgwnu-bonita-bpm-task.service.js.map