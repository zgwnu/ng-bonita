"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// ZaakgerichtWerken.nu Bonita Rest Api BPM User Task Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc6
//
//
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var zgwnu_bonita_rest_api_service_1 = require("../../rest-api/zgwnu-bonita-rest-api.service");
var zgwnu_bonita_config_service_1 = require("../../rest-api/zgwnu-bonita-config.service");
var zgwnu_bonita_bpm_task_update_input_1 = require("../task/zgwnu-bonita-bpm-task-update-input");
var zgwnu_bonita_user_task_mapping_1 = require("./zgwnu-bonita-user-task-mapping");
var ZgwnuBonitaBpmUserTaskService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmUserTaskService, _super);
    function ZgwnuBonitaBpmUserTaskService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.USER_TASK_RESOURCE_PATH = '/bpm/userTask';
        // configure resource urls
        _this.userTaskResourceUrl = configService.apiUrl + _this.USER_TASK_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmUserTaskService.prototype.getUserTask = function (userTaskId) {
        var userTaskMapping = new zgwnu_bonita_user_task_mapping_1.ZgwnuBonitaUserTaskMapping();
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
        var body = new zgwnu_bonita_bpm_task_update_input_1.ZgwnuBonitaBpmTaskUpdateInput();
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
    ZgwnuBonitaBpmUserTaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [zgwnu_bonita_config_service_1.ZgwnuBonitaConfigService,
            http_1.Http])
    ], ZgwnuBonitaBpmUserTaskService);
    return ZgwnuBonitaBpmUserTaskService;
}(zgwnu_bonita_rest_api_service_1.ZgwnuBonitaRestApiService));
exports.ZgwnuBonitaBpmUserTaskService = ZgwnuBonitaBpmUserTaskService;
//# sourceMappingURL=zgwnu-bonita-bpm-user-task.service.js.map