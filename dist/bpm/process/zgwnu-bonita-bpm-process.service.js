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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Process Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc28
//
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaUtils } from '../../rest-api/zgwnu-bonita-utils';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaProcessDefinitionMapping } from './zgwnu-bonita-process-definition-mapping';
import { ZgwnuBonitaCreateCaseSuccessResponse } from './zgwnu-bonita-create-case-success-response';
import { ZgwnuBonitaDeployProcessDefinitionSuccessResponse } from './zgwnu-bonita-deploy-process-definition-success-response';
import { ZgwnuBonitaProcessUpdateSuccessResponse } from './zgwnu-bonita-process-update-success-response';
var ZgwnuBonitaBpmProcessService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmProcessService, _super);
    function ZgwnuBonitaBpmProcessService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.RESOURCE_PATH = '/bpm/process';
        // configure resource urls
        _this.resourceUrl = configService.bonitaUrls.apiUrl + _this.RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmProcessService.prototype.searchProcessDefinitions = function (searchParms) {
        var processDefinitionMapping = new ZgwnuBonitaProcessDefinitionMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(processDefinitionMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.buildSearchRequest = function (searchParms) {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmProcessService.prototype.getProcessDefinition = function (processDefinitionId) {
        var processDefinitionMapping = new ZgwnuBonitaProcessDefinitionMapping();
        return this.http.get(this.resourceUrl + '/' + processDefinitionId, this.configService.options)
            .map(processDefinitionMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    // Start a process using an instantiation contract
    //
    // based on: http://documentation.bonitasoft.com/?page=bpm-api#toc23
    //
    // Post URL template: ../API/bpm/process/:processId/instantiation
    //
    ZgwnuBonitaBpmProcessService.prototype.createCase = function (processId, contractValues) {
        var postUrl = this.resourceUrl + '/' + processId + '/instantiation';
        return this.http.post(postUrl, contractValues, this.configService.sendOptions)
            .map(this.mapCreateCaseSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.mapCreateCaseSuccessResponse = function (res) {
        var successResponse = new ZgwnuBonitaCreateCaseSuccessResponse();
        successResponse.status = res.status;
        if (res.statusText)
            successResponse.statusText = res.statusText;
        successResponse.caseId = res.json().caseId;
        return successResponse;
    };
    // Deploy a process definition
    //
    // based on: http://documentation.bonitasoft.com/?page=bpm-api#toc28
    //
    // Post URL template: ../API/bpm/process
    //
    ZgwnuBonitaBpmProcessService.prototype.deployProcessDefinition = function (processUploadResponse) {
        var requestPayload = { "fileupload": processUploadResponse.tempPath };
        return this.http.post(this.resourceUrl, requestPayload, this.configService.sendOptions)
            .map(this.mapDeployProcessDefinitionSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.mapDeployProcessDefinitionSuccessResponse = function (res) {
        var utils = new ZgwnuBonitaUtils();
        var successResponse = new ZgwnuBonitaDeployProcessDefinitionSuccessResponse();
        successResponse.status = res.status;
        if (res.statusText)
            successResponse.statusText = res.statusText;
        var body = res.json();
        successResponse.id = body.id;
        successResponse.deploymentDate = utils.getDateValue(body.deploymentDate);
        successResponse.description = body.description;
        successResponse.activationState = body.activationState;
        successResponse.name = body.name;
        successResponse.displayName = body.displayName;
        successResponse.actorinitiatorid = body.actorinitiatorid;
        successResponse.last_update_date = utils.getDateValue(body.last_update_date);
        successResponse.configurationState = body.configurationState;
        successResponse.version = body.version;
        return successResponse;
    };
    ZgwnuBonitaBpmProcessService.prototype.updateProcessDefinition = function (processDefinitionId, updateInput) {
        return this.http.put(this.resourceUrl + '/' + processDefinitionId, updateInput, this.configService.sendOptions)
            .map(this.mapUpdateProcessDefinitionUpdateSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.mapUpdateProcessDefinitionUpdateSuccessResponse = function (res) {
        var updateRes = new ZgwnuBonitaProcessUpdateSuccessResponse();
        updateRes.status = res.status;
        if (res.statusText)
            updateRes.statusText = res.statusText;
        return updateRes;
    };
    ZgwnuBonitaBpmProcessService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmProcessService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBpmProcessService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBpmProcessService };
//# sourceMappingURL=zgwnu-bonita-bpm-process.service.js.map