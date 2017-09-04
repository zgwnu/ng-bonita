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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Case Document Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc17
//
//
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var zgwnu_bonita_rest_api_service_1 = require("../../rest-api/zgwnu-bonita-rest-api.service");
var zgwnu_bonita_config_service_1 = require("../../rest-api/zgwnu-bonita-config.service");
var zgwnu_bonita_document_mapping_1 = require("./zgwnu-bonita-document-mapping");
var ZgwnuBonitaBpmCaseDocumentService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmCaseDocumentService, _super);
    function ZgwnuBonitaBpmCaseDocumentService(configService, http, sanitizer) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.sanitizer = sanitizer;
        _this.resourcePath = '/bpm/caseDocument';
        // configure resource urls
        _this.resourceUrl = configService.apiUrl + _this.resourcePath;
        return _this;
    }
    ZgwnuBonitaBpmCaseDocumentService.prototype.createDocument = function (documentCreateInput) {
        var documentMapping = new zgwnu_bonita_document_mapping_1.ZgwnuBonitaDocumentMapping();
        return this.http.post(this.resourceUrl, documentCreateInput, this.configService.sendOptions)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.updateDocument = function (documentId, documentUpdateInput) {
        var documentMapping = new zgwnu_bonita_document_mapping_1.ZgwnuBonitaDocumentMapping();
        return this.http.put(this.resourceUrl + '/' + documentId, documentUpdateInput, this.configService.sendOptions)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.getDocument = function (documentId) {
        var documentMapping = new zgwnu_bonita_document_mapping_1.ZgwnuBonitaDocumentMapping();
        return this.http.get(this.resourceUrl + '/' + documentId, this.configService.options)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.searchDocuments = function (searchParms) {
        var documentMapping = new zgwnu_bonita_document_mapping_1.ZgwnuBonitaDocumentMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(documentMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.buildSearchRequest = function (searchParms) {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.getSafeFormsDocumentImageUrl = function (documentId) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.configService.formsDocumentImageUrl + "?document=" + documentId);
    };
    ZgwnuBonitaBpmCaseDocumentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [zgwnu_bonita_config_service_1.ZgwnuBonitaConfigService,
            http_1.Http,
            platform_browser_1.DomSanitizer])
    ], ZgwnuBonitaBpmCaseDocumentService);
    return ZgwnuBonitaBpmCaseDocumentService;
}(zgwnu_bonita_rest_api_service_1.ZgwnuBonitaRestApiService));
exports.ZgwnuBonitaBpmCaseDocumentService = ZgwnuBonitaBpmCaseDocumentService;
//# sourceMappingURL=zgwnu-bonita-bpm-case-document.service.js.map