import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { ZgwnuBonitaUrls } from './zgwnu-bonita-urls';
var ZgwnuBonitaConfigService = /** @class */ (function () {
    function ZgwnuBonitaConfigService(bonitaUrls) {
        this.bonitaUrls = bonitaUrls;
        // default zgwnu Business Data Model Package configuration
        this.businessDataModelPackage = 'com.zaakgerichtwerkennu.model';
        // rest api options
        this.bonitaSessionTokenKey = 'X-Bonita-API-Token';
        this.defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.defaultHeaders });
    }
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
        var defaultSendHeaders = new Headers({ 'Content-Type': 'application/json' });
        this.sendOptions = new RequestOptions({ headers: defaultSendHeaders });
        this.appendSessionOptions(this.sendOptions);
    };
    ZgwnuBonitaConfigService.prototype.appendSessionOptions = function (optionsRef) {
        if (this._session.token) {
            if (!optionsRef.headers) {
                optionsRef.headers = this.defaultHeaders;
            }
            optionsRef.headers.append(this.bonitaSessionTokenKey, this._session.token);
        }
    };
    ZgwnuBonitaConfigService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaConfigService.ctorParameters = function () { return [
        { type: ZgwnuBonitaUrls, },
    ]; };
    return ZgwnuBonitaConfigService;
}());
export { ZgwnuBonitaConfigService };
//# sourceMappingURL=zgwnu-bonita-config.service.js.map