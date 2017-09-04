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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Process Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc28
//
//
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var zgwnu_bonita_rest_api_service_1 = require("../../rest-api/zgwnu-bonita-rest-api.service");
var zgwnu_bonita_utils_1 = require("../../rest-api/zgwnu-bonita-utils");
var zgwnu_bonita_config_service_1 = require("../../rest-api/zgwnu-bonita-config.service");
var zgwnu_bonita_process_definition_mapping_1 = require("./zgwnu-bonita-process-definition-mapping");
var zgwnu_bonita_create_case_success_response_1 = require("./zgwnu-bonita-create-case-success-response");
var zgwnu_bonita_deploy_process_definition_success_response_1 = require("./zgwnu-bonita-deploy-process-definition-success-response");
var zgwnu_bonita_process_update_success_response_1 = require("./zgwnu-bonita-process-update-success-response");
var ZgwnuBonitaBpmProcessService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmProcessService, _super);
    function ZgwnuBonitaBpmProcessService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.RESOURCE_PATH = '/bpm/process';
        // configure resource urls
        _this.resourceUrl = configService.apiUrl + _this.RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmProcessService.prototype.searchProcessDefinitions = function (searchParms) {
        var processDefinitionMapping = new zgwnu_bonita_process_definition_mapping_1.ZgwnuBonitaProcessDefinitionMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(processDefinitionMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.buildSearchRequest = function (searchParms) {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmProcessService.prototype.getProcessDefinition = function (processDefinitionId) {
        var processDefinitionMapping = new zgwnu_bonita_process_definition_mapping_1.ZgwnuBonitaProcessDefinitionMapping();
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
        var successResponse = new zgwnu_bonita_create_case_success_response_1.ZgwnuBonitaCreateCaseSuccessResponse();
        successResponse.status = res.status;
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
        var utils = new zgwnu_bonita_utils_1.ZgwnuBonitaUtils();
        var successResponse = new zgwnu_bonita_deploy_process_definition_success_response_1.ZgwnuBonitaDeployProcessDefinitionSuccessResponse();
        successResponse.status = res.status;
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
        var updateRes = new zgwnu_bonita_process_update_success_response_1.ZgwnuBonitaProcessUpdateSuccessResponse();
        updateRes.status = res.status;
        updateRes.statusText = res.statusText;
        return updateRes;
    };
    ZgwnuBonitaBpmProcessService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [zgwnu_bonita_config_service_1.ZgwnuBonitaConfigService,
            http_1.Http])
    ], ZgwnuBonitaBpmProcessService);
    return ZgwnuBonitaBpmProcessService;
}(zgwnu_bonita_rest_api_service_1.ZgwnuBonitaRestApiService));
exports.ZgwnuBonitaBpmProcessService = ZgwnuBonitaBpmProcessService;
//# sourceMappingURL=zgwnu-bonita-bpm-process.service.js.map