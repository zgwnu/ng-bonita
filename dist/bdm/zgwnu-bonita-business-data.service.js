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
// ZaakgerichtWerken.nu Bonita Rest Api Business Data Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bdm-api#
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service';
import { ZgwnuSingleBusinessDataRefence } from './zgwnu-single-business-data-reference';
import { ZgwnuMultipleBusinessDataRefence } from './zgwnu-multiple-business-data-reference';
var ZgwnuBonitaBusinessDataService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBusinessDataService, _super);
    function ZgwnuBonitaBusinessDataService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.resourcePath = '/bdm';
        _this.resourceUrl = configService.bonitaUrls.apiUrl + _this.resourcePath;
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
        return this.configService.bonitaUrls.baseUrl + '/' + businessDataContext.link;
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
        var dataReference = new ZgwnuSingleBusinessDataRefence(res.json());
        return dataReference;
    };
    ZgwnuBonitaBusinessDataService.prototype.getMultipleBusinessDataReference = function (caseId, businessDataObjectType) {
        return this.getBusinessDataReference(caseId, businessDataObjectType)
            .map(this.mapSingleBusinessDataReference)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.mapMultipleBusinessDataReference = function (res) {
        var dataReference = new ZgwnuMultipleBusinessDataRefence(res.json());
        return dataReference;
    };
    ZgwnuBonitaBusinessDataService.prototype.getBusinessDataReference = function (caseId, businessDataObjectType) {
        return this.http.get(this.resourceUrl + '/businessDataReference/' + caseId + '/' + businessDataObjectType, this.configService.options);
    };
    ZgwnuBonitaBusinessDataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBusinessDataService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBusinessDataService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBusinessDataService };
//# sourceMappingURL=zgwnu-bonita-business-data.service.js.map