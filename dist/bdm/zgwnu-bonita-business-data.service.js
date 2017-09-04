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
// ZaakgerichtWerken.nu Bonita Rest Api Business Data Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bdm-api#
//
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var zgwnu_bonita_rest_api_service_1 = require("../rest-api/zgwnu-bonita-rest-api.service");
var zgwnu_bonita_config_service_1 = require("../rest-api/zgwnu-bonita-config.service");
var zgwnu_single_business_data_reference_1 = require("./zgwnu-single-business-data-reference");
var zgwnu_multiple_business_data_reference_1 = require("./zgwnu-multiple-business-data-reference");
var ZgwnuBonitaBusinessDataService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBusinessDataService, _super);
    function ZgwnuBonitaBusinessDataService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.resourcePath = '/bdm';
        _this.resourceUrl = configService.apiUrl + _this.resourcePath;
        return _this;
    }
    // Bonita Rest Api Business Data
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bdm-api#toc0
    //
    // Request URL template: ../API/bdm/businessData/:businessDataType/:persistenceId
    //
    ZgwnuBonitaBusinessDataService.prototype.getBusinessData = function (businessDataObjectType, persistenceId, mappingParm) {
        var mapping = this.getMapping(mappingParm);
        return this.http.get(this.buildGetRequestUrl(businessDataObjectType, persistenceId), this.configService.options)
            .map(mapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.buildGetRequestUrl = function (businessDataObjectType, persistenceId) {
        return this.resourceUrl + '/businessData/' +
            this.configService.businessDataModelPackage + '.' + businessDataObjectType +
            '/' + persistenceId.toString();
    };
    // Bonita Rest Api Business Data Query
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bdm-api#toc1
    //
    // Request URL template: ../API/bdm/businessData/_businessDataType_?q=_queryName_
    //                       &p=0&c=10&f=param=value
    //
    ZgwnuBonitaBusinessDataService.prototype.queryBusinessData = function (businessDataObjectType, queryParms, mappingParm) {
        var mapping = this.getMapping(mappingParm);
        return this.http.get(this.buildQueryRequestUrl(businessDataObjectType, queryParms), this.configService.options)
            .map(mapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.buildQueryRequestUrl = function (businessDataObjectType, queryParms) {
        return this.resourceUrl + '/businessData/' +
            this.configService.businessDataModelPackage + '.' + businessDataObjectType +
            '?' + queryParms.getUrlEncondedParms();
    };
    // Bonita Rest Api get Business Data from context
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bpm-api#toc6
    //
    ZgwnuBonitaBusinessDataService.prototype.getBusinessDataFromContext = function (businessDataContext, mappingParm) {
        var mapping = this.getMapping(mappingParm);
        return this.http.get(this.buildGetFromContextUrl(businessDataContext), this.configService.options)
            .map(mapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.buildGetFromContextUrl = function (businessDataContext) {
        return this.configService.baseUrl + '/' + businessDataContext.link;
    };
    ZgwnuBonitaBusinessDataService.prototype.getMapping = function (mappingParm) {
        if (mappingParm) {
            return mappingParm;
        }
        else {
            return this.mapping;
        }
    };
    // Bonita Rest Api get Business Data from context
    // --------------------------------------------------------------------------
    //    
    // base on http://documentation.bonitasoft.com/?page=bdm-api#toc2
    //
    ZgwnuBonitaBusinessDataService.prototype.getSingleBusinessDataReference = function (caseId, businessDataObjectType) {
        return this.getBusinessDataReference(caseId, businessDataObjectType)
            .map(this.mapSingleBusinessDataReference)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.mapSingleBusinessDataReference = function (res) {
        var dataReference = new zgwnu_single_business_data_reference_1.ZgwnuSingleBusinessDataRefence(res.json());
        return dataReference;
    };
    ZgwnuBonitaBusinessDataService.prototype.getMultipleBusinessDataReference = function (caseId, businessDataObjectType) {
        return this.getBusinessDataReference(caseId, businessDataObjectType)
            .map(this.mapSingleBusinessDataReference)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.mapMultipleBusinessDataReference = function (res) {
        var dataReference = new zgwnu_multiple_business_data_reference_1.ZgwnuMultipleBusinessDataRefence(res.json());
        return dataReference;
    };
    ZgwnuBonitaBusinessDataService.prototype.getBusinessDataReference = function (caseId, businessDataObjectType) {
        return this.http.get(this.resourceUrl + '/businessDataReference/' + caseId + '/' + businessDataObjectType, this.configService.options);
    };
    ZgwnuBonitaBusinessDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [zgwnu_bonita_config_service_1.ZgwnuBonitaConfigService,
            http_1.Http])
    ], ZgwnuBonitaBusinessDataService);
    return ZgwnuBonitaBusinessDataService;
}(zgwnu_bonita_rest_api_service_1.ZgwnuBonitaRestApiService));
exports.ZgwnuBonitaBusinessDataService = ZgwnuBonitaBusinessDataService;
//# sourceMappingURL=zgwnu-bonita-business-data.service.js.map