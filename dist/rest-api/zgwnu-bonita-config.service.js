"use strict";
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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var ZgwnuBonitaConfigService = /** @class */ (function () {
    function ZgwnuBonitaConfigService(location) {
        // default zgwnu Business Data Model Package configuration
        this.businessDataModelPackage = 'com.zaakgerichtwerkennu.model';
        // default bonita path configuration
        this.basePath = '/bonita';
        this.apiPath = '/API';
        this.fileUploadPath = '/portal/fileUpload';
        this.processUploadPath = '/portal/processUpload';
        this.organizationUploadPath = '/portal/organizationUpload';
        this.actorsUploadPath = '/portal/actorsUpload';
        this.imageUploadPath = '/portal/imageUpload';
        this.formsDocumentImagePath = '/portal/formsDocumentImage';
        // rest api options
        this.bonitaSessionTokenKey = 'X-Bonita-API-Token';
        this.defaultHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.defaultHeaders });
        this.initialize();
    }
    ZgwnuBonitaConfigService.prototype.initialize = function () {
        if (location.hostname == 'localhost') {
            // local development server configuration (Bonita Studio with Angular JIT)
            this.hostUrl = 'http://localhost:8080';
        }
        else {
            // external test or production server configuration (Bonita Platform with AOT WAR deployment)
            this.hostUrl = location.origin;
        }
        this.configUrls();
    };
    ZgwnuBonitaConfigService.prototype.configUrls = function () {
        this.baseUrl = this.hostUrl + this.basePath;
        this.apiUrl = this.baseUrl + this.apiPath;
        this.fileUploadUrl = this.baseUrl + this.fileUploadPath;
        this.processUploadUrl = this.baseUrl + this.processUploadPath;
        this.organizationUploadUrl = this.baseUrl + this.organizationUploadPath;
        this.actorsUploadUrl = this.baseUrl + this.actorsUploadPath;
        this.imageUploadUrl = this.baseUrl + this.imageUploadPath;
        this.formsDocumentImageUrl = this.baseUrl + this.formsDocumentImagePath;
    };
    Object.defineProperty(ZgwnuBonitaConfigService.prototype, "session", {
        get: function () {
            return this._session;
        },
        set: function (session) {
            this._session = session;
            this.configSendOptions();
        },
        enumerable: true,
        configurable: true
    });
    ZgwnuBonitaConfigService.prototype.configSendOptions = function () {
        var defaultSendHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.sendOptions = new http_1.RequestOptions({ headers: defaultSendHeaders });
        this.appendSessionOptions(this.sendOptions);
    };
    ZgwnuBonitaConfigService.prototype.appendSessionOptions = function (optionsRef) {
        if (this._session.token) {
            optionsRef.headers.append(this.bonitaSessionTokenKey, this._session.token);
        }
    };
    ZgwnuBonitaConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [common_1.Location])
    ], ZgwnuBonitaConfigService);
    return ZgwnuBonitaConfigService;
}());
exports.ZgwnuBonitaConfigService = ZgwnuBonitaConfigService;
//# sourceMappingURL=zgwnu-bonita-config.service.js.map