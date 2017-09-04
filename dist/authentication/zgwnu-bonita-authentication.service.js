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
// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var zgwnu_bonita_rest_api_service_1 = require("../rest-api/zgwnu-bonita-rest-api.service");
var zgwnu_bonita_config_service_1 = require("../rest-api/zgwnu-bonita-config.service");
var zgwnu_bonita_session_mapping_1 = require("../rest-api/zgwnu-bonita-session-mapping");
var ZgwnuBonitaAuthenticationService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaAuthenticationService, _super);
    function ZgwnuBonitaAuthenticationService(configService, http, router) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.router = router;
        _this.LOGIN_SERVICE_PATH = '/loginservice';
        _this.CURRENT_SESSION_RESOURCE_PATH = '/system/session/unusedid';
        // initialize authentication using current session
        _this.getCurrentSession()
            .subscribe(function (currentSession) { return configService.session = currentSession; });
        return _this;
    }
    ZgwnuBonitaAuthenticationService.prototype.executeLogin = function (creds) {
        var credsUrlEncoded = 'username=' + creds.username + '&password=' + creds.password + '&redirect=false';
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        var postUrl = this.configService.baseUrl + this.LOGIN_SERVICE_PATH;
        return this.http.post(postUrl, credsUrlEncoded, options)
            .map(this.mapSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaAuthenticationService.prototype.getCurrentSession = function () {
        var sessionMapping = new zgwnu_bonita_session_mapping_1.ZgwnuBonitaSessionMapping();
        return this.http.get(this.configService.apiUrl + this.CURRENT_SESSION_RESOURCE_PATH, this.configService.options)
            .map(sessionMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaAuthenticationService.prototype.login = function (creds) {
        var _this = this;
        this.executeLogin(creds)
            .subscribe(function (successResponse) {
            _this.successResponse = successResponse;
            _this.getCurrentSession()
                .subscribe(function (session) {
                if (creds.username == session.user_name) {
                    _this.configService.session = session;
                    if (creds.navigateTo) {
                        _this.router.navigate([creds.navigateTo]);
                    }
                }
            }, function (errorResponse) { return _this.errorResponse = errorResponse; });
        }, function (errorResponse) { return _this.errorResponse = errorResponse; });
    };
    ZgwnuBonitaAuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [zgwnu_bonita_config_service_1.ZgwnuBonitaConfigService,
            http_1.Http,
            router_1.Router])
    ], ZgwnuBonitaAuthenticationService);
    return ZgwnuBonitaAuthenticationService;
}(zgwnu_bonita_rest_api_service_1.ZgwnuBonitaRestApiService));
exports.ZgwnuBonitaAuthenticationService = ZgwnuBonitaAuthenticationService;
//# sourceMappingURL=zgwnu-bonita-authentication.service.js.map