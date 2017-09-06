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
// ZaakgerichtWerken.nu Bonita Rest Api File Upload Service
// --------------------------------------------------------------------------
//
// based on: http://documentation.bonitasoft.com/?page=manage-files-using-upload-servlet-and-rest-api
//         : http://stackoverflow.com/questions/36352405/file-upload-with-angular2-to-rest-api
//
//
// To-Do:
// (1) map uploadFile Success Response to BonitaContractInputFile
//     including File Content-Type etc...
//
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaFileUploadResponse } from './zgwnu-bonita-file-upload-response';
var ZgwnuBonitaFileUploadService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaFileUploadService, _super);
    function ZgwnuBonitaFileUploadService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        return _this;
    }
    ZgwnuBonitaFileUploadService.prototype.uploadFile = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.fileUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadProcess = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.processUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadOrganization = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.organizationUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadActors = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.actorsUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadImage = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.imageUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.servletUploadFile = function (servletUrl, file, fileId) {
        var formData = new FormData();
        formData.append(fileId, file, file.name);
        var uploadHeaders = new Headers();
        var uploadOptions = new RequestOptions({ headers: uploadHeaders });
        this.configService.appendSessionOptions(uploadOptions);
        return this.http.post(servletUrl, formData, uploadOptions)
            .map(this.mapFileUploadResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaFileUploadService.prototype.mapFileUploadResponse = function (res) {
        var fileUploadResponse = new ZgwnuBonitaFileUploadResponse();
        fileUploadResponse.status = res.status;
        fileUploadResponse.statusText = res.statusText;
        fileUploadResponse.tempPath = res._body;
        return fileUploadResponse;
    };
    ZgwnuBonitaFileUploadService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaFileUploadService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: Http, },
    ]; };
    return ZgwnuBonitaFileUploadService;
}(ZgwnuBonitaRestApiService));
export { ZgwnuBonitaFileUploadService };
//# sourceMappingURL=zgwnu-bonita-file-upload.service.js.map