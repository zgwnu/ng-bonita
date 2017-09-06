var ZgwnuBonitaUrls = /** @class */ (function () {
    function ZgwnuBonitaUrls(hostUrl) {
        // Bonita Server Config Urls
        this._hostUrl = 'http://localhost:8080';
        // default bonita path configuration
        this.BASE_PATH = '/bonita';
        this.API_PATH = '/API';
        this.FILE_UPLOAD_PATH = '/portal/fileUpload';
        this.PROCESS_UPLOAD_PATH = '/portal/processUpload';
        this.ORGANIZATION_UPLOAD_PATH = '/portal/organizationUpload';
        this.ACTORS_UPLOAD_PATH = '/portal/actorsUpload';
        this.IMAGE_UPLOAD_PATH = '/portal/imageUpload';
        this.FORMS_DOCUMENT_IMAGE_PATH = '/portal/formsDocumentImage';
        if (hostUrl)
            this._hostUrl = hostUrl;
        this._baseUrl = this._hostUrl + this.BASE_PATH;
        this._apiUrl = this._baseUrl + this.API_PATH;
        this._fileUploadUrl = this._baseUrl + this.FILE_UPLOAD_PATH;
        this._processUploadUrl = this._baseUrl + this.PROCESS_UPLOAD_PATH;
        this._organizationUploadUrl = this._baseUrl + this.ORGANIZATION_UPLOAD_PATH;
        this._actorsUploadUrl = this._baseUrl + this.ACTORS_UPLOAD_PATH;
        this._imageUploadUrl = this._baseUrl + this.IMAGE_UPLOAD_PATH;
        this._formsDocumentImageUrl = this._baseUrl + this.FORMS_DOCUMENT_IMAGE_PATH;
    }
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "baseUrl", {
        get: function () {
            return this._baseUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "apiUrl", {
        get: function () {
            return this._apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "fileUploadUrl", {
        get: function () {
            return this._fileUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "processUploadUrl", {
        get: function () {
            return this._processUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "organizationUploadUrl", {
        get: function () {
            return this._organizationUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "actorsUploadUrl", {
        get: function () {
            return this._actorsUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "imageUploadUrl", {
        get: function () {
            return this._imageUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "formsDocumentImageUrl", {
        get: function () {
            return this._formsDocumentImageUrl;
        },
        enumerable: true,
        configurable: true
    });
    return ZgwnuBonitaUrls;
}());
export { ZgwnuBonitaUrls };
//# sourceMappingURL=zgwnu-bonita-urls.js.map