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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Case Document Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc17
//
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaDocumentMapping } from './zgwnu-bonita-document-mapping';
var ZgwnuBonitaBpmCaseDocumentService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmCaseDocumentService, _super);
    function ZgwnuBonitaBpmCaseDocumentService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.resourcePath = '/bpm/caseDocument';
        // configure resource urls
        _this.resourceUrl = configService.bonitaUrls.apiUrl + _this.resourcePath;
        return _this;
    }
    ZgwnuBonitaBpmCaseDocumentService.prototype.createDocument = function (documentCreateInput) {
        var documentMapping = new ZgwnuBonitaDocumentMapping();
        return this.http.post(this.resourceUrl, documentCreateInput, this.configService.sendOptions)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.updateDocument = function (documentId, documentUpdateInput) {
        var documentMapping = new ZgwnuBonitaDocumentMapping();
        return this.http.put(this.resourceUrl + '/' + documentId, documentUpdateInput, this.configService.sendOptions)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.getDocument = function (documentId) {
        var documentMapping = new ZgwnuBonitaDocumentMapping();
        return this.http.get(this.resourceUrl + '/' + documentId, this.configService.options)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.searchDocuments = function (searchParms) {
        var documentMapping = new ZgwnuBonitaDocumentMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(documentMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.buildSearchRequest = function (searchParms) {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmCaseDocumentService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmCaseDocumentService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBpmCaseDocumentService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBpmCaseDocumentService };
//# sourceMappingURL=zgwnu-bonita-bpm-case-document.service.js.map