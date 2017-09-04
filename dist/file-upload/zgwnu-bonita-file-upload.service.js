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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var zgwnu_bonita_rest_api_service_1 = require("../rest-api/zgwnu-bonita-rest-api.service");
var zgwnu_bonita_config_service_1 = require("../rest-api/zgwnu-bonita-config.service");
var zgwnu_bonita_file_upload_response_1 = require("./zgwnu-bonita-file-upload-response");
var ZgwnuBonitaFileUploadService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaFileUploadService, _super);
    function ZgwnuBonitaFileUploadService(configService, http) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http;
        return _this;
    }
    ZgwnuBonitaFileUploadService.prototype.uploadFile = function (file, fileId) {
        return this.servletUploadFile(this.configService.fileUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadProcess = function (file, fileId) {
        return this.servletUploadFile(this.configService.processUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadOrganization = function (file, fileId) {
        return this.servletUploadFile(this.configService.organizationUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadActors = function (file, fileId) {
        return this.servletUploadFile(this.configService.actorsUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadImage = function (file, fileId) {
        return this.servletUploadFile(this.configService.imageUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.servletUploadFile = function (servletUrl, file, fileId) {
        var formData = new FormData();
        formData.append(fileId, file, file.name);
        var uploadHeaders = new http_1.Headers();
        var uploadOptions = new http_1.RequestOptions({ headers: uploadHeaders });
        this.configService.appendSessionOptions(uploadOptions);
        return this.http.post(servletUrl, formData, uploadOptions)
            .map(this.mapFileUploadResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaFileUploadService.prototype.mapFileUploadResponse = function (res) {
        var fileUploadResponse = new zgwnu_bonita_file_upload_response_1.ZgwnuBonitaFileUploadResponse();
        fileUploadResponse.status = res.status;
        fileUploadResponse.statusText = res.statusText;
        fileUploadResponse.tempPath = res._body;
        return fileUploadResponse;
    };
    ZgwnuBonitaFileUploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [zgwnu_bonita_config_service_1.ZgwnuBonitaConfigService,
            http_1.Http])
    ], ZgwnuBonitaFileUploadService);
    return ZgwnuBonitaFileUploadService;
}(zgwnu_bonita_rest_api_service_1.ZgwnuBonitaRestApiService));
exports.ZgwnuBonitaFileUploadService = ZgwnuBonitaFileUploadService;
//# sourceMappingURL=zgwnu-bonita-file-upload.service.js.map