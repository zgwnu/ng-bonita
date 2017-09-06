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
// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaSessionMapping } from '../rest-api/zgwnu-bonita-session-mapping';
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
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        var postUrl = this.configService.bonitaUrls.baseUrl + this.LOGIN_SERVICE_PATH;
        return this.http.post(postUrl, credsUrlEncoded, options)
            .map(this.mapSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaAuthenticationService.prototype.getCurrentSession = function () {
        var sessionMapping = new ZgwnuBonitaSessionMapping();
        return this.http.get(this.configService.bonitaUrls.apiUrl + this.CURRENT_SESSION_RESOURCE_PATH, this.configService.options)
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
    ZgwnuBonitaAuthenticationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaAuthenticationService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
        { type: Router, },
    ]; };
    return ZgwnuBonitaAuthenticationService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaAuthenticationService };
//# sourceMappingURL=zgwnu-bonita-authentication.service.js.map