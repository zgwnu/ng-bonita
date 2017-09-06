// ZaakgerichtWerken.nu Bonita Rest Api Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=_rest-api
//
//
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { ZgwnuBonitaDataMapping } from './zgwnu-bonita-data-mapping';
import { ZgwnuBonitaResponse } from './zgwnu-bonita-response';
import { ZgwnuBonitaErrorResponse } from './zgwnu-bonita-error-response';
var ZgwnuBonitaRestApiService = /** @class */ (function () {
    function ZgwnuBonitaRestApiService() {
        this.mapping = new ZgwnuBonitaDataMapping();
    }
    ZgwnuBonitaRestApiService.prototype.mapSuccessResponse = function (res) {
        var successResponse = new ZgwnuBonitaResponse();
        successResponse.status = res.status;
        if (res.statusText)
            successResponse.statusText = res.statusText;
        return successResponse;
    };
    ZgwnuBonitaRestApiService.prototype.handleResponseError = function (error) {
        var errorResponse = new ZgwnuBonitaErrorResponse();
        if (error instanceof Response) {
            errorResponse.status = error.status;
            if (error.statusText)
                errorResponse.statusText = error.statusText;
            var body = error.json();
            errorResponse.exception = body.exception;
            errorResponse.message = body.message;
            errorResponse.explanations = body.explanations;
        }
        else {
            errorResponse.status = 0;
            errorResponse.statusText = error.message ? error.message : error.toString();
        }
        return Observable.throw(errorResponse);
    };
    ZgwnuBonitaRestApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaRestApiService.ctorParameters = function () { return []; };
    return ZgwnuBonitaRestApiService;
}());
export { ZgwnuBonitaRestApiService };
//# sourceMappingURL=zgwnu-bonita-rest-api.service.js.map