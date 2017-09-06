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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Case (Process Instance) Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc23
//
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaCaseMapping } from './zgwnu-bonita-case-mapping';
var ZgwnuBonitaBpmCaseService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmCaseService, _super);
    function ZgwnuBonitaBpmCaseService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.resourcePath = '/bpm/case';
        // configure resource urls
        _this.resourceUrl = configService.bonitaUrls.apiUrl + _this.resourcePath;
        return _this;
    }
    ZgwnuBonitaBpmCaseService.prototype.searchCases = function (searchParms) {
        var caseMapping = new ZgwnuBonitaCaseMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(caseMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseService.prototype.buildSearchRequest = function (searchParms) {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmCaseService.prototype.getCase = function (caseId) {
        var caseMapping = new ZgwnuBonitaCaseMapping();
        return this.http.get(this.resourceUrl + '/' + caseId, this.configService.options)
            .map(caseMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseService.prototype.getCaseContext = function (caseId) {
        return this.http.get(this.resourceUrl + '/' + caseId + '/context', this.configService.options)
            .map(this.mapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmCaseService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBpmCaseService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBpmCaseService };
//# sourceMappingURL=zgwnu-bonita-bpm-case.service.js.map