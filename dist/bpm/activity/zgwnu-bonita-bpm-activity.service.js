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
// ZaakgerichtWerken.nu Bonita Rest Api BPM Activity Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc1
//
//
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaActivityMapping } from './zgwnu-bonita-activity-mapping';
var ZgwnuBonitaBpmActivityService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBpmActivityService, _super);
    function ZgwnuBonitaBpmActivityService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        _this.ACTIVITY_RESOURCE_PATH = '/bpm/activity';
        _this.activityResourceUrl = configService.bonitaUrls.apiUrl + _this.ACTIVITY_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmActivityService.prototype.searchActivities = function (searchParms) {
        var activityMapping = new ZgwnuBonitaActivityMapping();
        return this.http.get(this.buildActivitySearchRequest(searchParms), this.configService.options)
            .map(activityMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmActivityService.prototype.buildActivitySearchRequest = function (searchParms) {
        return this.activityResourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmActivityService.prototype.getActivity = function (activityId) {
        var activityMapping = new ZgwnuBonitaActivityMapping();
        return this.http.get(this.activityResourceUrl + '/' + activityId, this.configService.options)
            .map(activityMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmActivityService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmActivityService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaBpmActivityService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaBpmActivityService };
//# sourceMappingURL=zgwnu-bonita-bpm-activity.service.js.map