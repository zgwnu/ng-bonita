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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Data Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc13
//
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaCaseVariableMapping } from './zgwnu-bonita-case-variable-mapping';
var ZgwnuBonitaBpmDataService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmDataService, _super);
    function ZgwnuBonitaBpmDataService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.caseVariableResourcePath = '/bpm/caseVariable';
        // configure resource url
        _this.caseVariableResourceUrl = configService.bonitaUrls.apiUrl + _this.caseVariableResourcePath;
        return _this;
    }
    // CaseVariable
    //
    // based on http://documentation.bonitasoft.com/?page=bpm-api#toc15
    //
    //
    ZgwnuBonitaBpmDataService.prototype.getCaseVariable = function (caseId, variableName) {
        var caseVariableMapping = new ZgwnuBonitaCaseVariableMapping();
        return this.http.get(this.caseVariableResourceUrl + '/' + caseId + '/' + variableName, this.configService.options)
            .map(caseVariableMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmDataService.prototype.searchCaseVariables = function (searchParms) {
        var caseVariableMapping = new ZgwnuBonitaCaseVariableMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(caseVariableMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmDataService.prototype.buildSearchRequest = function (searchParms) {
        return this.caseVariableResourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmDataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmDataService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBpmDataService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBpmDataService };
//# sourceMappingURL=zgwnu-bonita-bpm-data.service.js.map