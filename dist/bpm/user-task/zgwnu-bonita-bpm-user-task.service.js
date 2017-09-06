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
// ZaakgerichtWerken.nu Bonita Rest Api BPM User Task Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc6
//
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaBpmTaskUpdateInput } from '../task/zgwnu-bonita-bpm-task-update-input';
import { ZgwnuBonitaUserTaskMapping } from './zgwnu-bonita-user-task-mapping';
var ZgwnuBonitaBpmUserTaskService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmUserTaskService, _super);
    function ZgwnuBonitaBpmUserTaskService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.USER_TASK_RESOURCE_PATH = '/bpm/userTask';
        // configure resource urls
        _this.userTaskResourceUrl = configService.bonitaUrls.apiUrl + _this.USER_TASK_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmUserTaskService.prototype.getUserTask = function (userTaskId) {
        var userTaskMapping = new ZgwnuBonitaUserTaskMapping();
        return this.http.get(this.userTaskResourceUrl + '/' + userTaskId, this.configService.options)
            .map(userTaskMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmUserTaskService.prototype.getUserTaskContext = function (userTaskId) {
        return this.http.get(this.userTaskResourceUrl + '/' + userTaskId + '/context', this.configService.options)
            .map(this.mapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmUserTaskService.prototype.assignUserTask = function (userTaskId, userId) {
        var body = new ZgwnuBonitaBpmTaskUpdateInput();
        if (userId) {
            // assign to specified user
            body.assigned_id = userId;
        }
        else {
            // assign to current logged user
            body.assigned_id = this.configService.session.user_id;
        }
        var putUrl = this.userTaskResourceUrl + '/' + userTaskId;
        return this.http.put(putUrl, body, this.configService.sendOptions)
            .map(this.mapSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmUserTaskService.prototype.executeUserTask = function (userTaskId, contractValues) {
        var postUrl = this.userTaskResourceUrl + '/' + userTaskId + '/execution';
        return this.http.post(postUrl, contractValues, this.configService.sendOptions)
            .map(this.mapSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmUserTaskService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmUserTaskService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBpmUserTaskService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBpmUserTaskService };
//# sourceMappingURL=zgwnu-bonita-bpm-user-task.service.js.map