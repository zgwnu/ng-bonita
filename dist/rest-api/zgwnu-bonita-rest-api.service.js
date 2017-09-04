"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ZaakgerichtWerken.nu Bonita Rest Api Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=_rest-api
//
//
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
var zgwnu_bonita_data_mapping_1 = require("./zgwnu-bonita-data-mapping");
var zgwnu_bonita_response_1 = require("./zgwnu-bonita-response");
var zgwnu_bonita_error_response_1 = require("./zgwnu-bonita-error-response");
var ZgwnuBonitaRestApiService = /** @class */ (function () {
    function ZgwnuBonitaRestApiService() {
        this.mapping = new zgwnu_bonita_data_mapping_1.ZgwnuBonitaDataMapping();
    }
    ZgwnuBonitaRestApiService.prototype.mapSuccessResponse = function (res) {
        var successResponse = new zgwnu_bonita_response_1.ZgwnuBonitaResponse();
        successResponse.status = res.status;
        successResponse.statusText = res.statusText;
        return successResponse;
    };
    ZgwnuBonitaRestApiService.prototype.handleResponseError = function (error) {
        var errorResponse = new zgwnu_bonita_error_response_1.ZgwnuBonitaErrorResponse();
        if (error instanceof http_1.Response) {
            errorResponse.status = error.status;
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
        return Observable_1.Observable.throw(errorResponse);
    };
    ZgwnuBonitaRestApiService = __decorate([
        core_1.Injectable()
    ], ZgwnuBonitaRestApiService);
    return ZgwnuBonitaRestApiService;
}());
exports.ZgwnuBonitaRestApiService = ZgwnuBonitaRestApiService;
//# sourceMappingURL=zgwnu-bonita-rest-api.service.js.map