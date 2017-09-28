export class ZgwnuBonitaUrls {
    // Bonita Studio default (local development)
    private readonly LOCAL_HOST_URL = 'http://localhost:8080'

    // Bonita Server Config Urls
    private _hostUrl: string
    private _baseUrl: string
    private _apiUrl: string
    private _fileUploadUrl: string
    private _processUploadUrl: string
    private _organizationUploadUrl: string
    private _actorsUploadUrl: string
    private _imageUploadUrl: string
    private _formsDocumentImageUrl: string

    // Bonita path configuration
    private readonly BASE_PATH = '/bonita'
    private readonly API_PATH = '/API'
    private readonly FILE_UPLOAD_PATH = '/portal/fileUpload'
    private readonly PROCESS_UPLOAD_PATH = '/portal/processUpload'
    private readonly ORGANIZATION_UPLOAD_PATH = '/portal/organizationUpload'
    private readonly ACTORS_UPLOAD_PATH = '/portal/actorsUpload'
    private readonly IMAGE_UPLOAD_PATH = '/portal/imageUpload'
    private readonly FORMS_DOCUMENT_IMAGE_PATH = '/portal/formsDocumentImage'
    
    constructor(hostUrl?: string)
    {
        if (hostUrl) {
            this.hostUrl = hostUrl 
        } else {
            this.hostUrl = this.LOCAL_HOST_URL
        }
    }

    set hostUrl(hostUrl: string) {
        this._baseUrl = hostUrl + this.BASE_PATH
        this._apiUrl = this._baseUrl + this.API_PATH
        this._fileUploadUrl = this._baseUrl + this.FILE_UPLOAD_PATH
        this._processUploadUrl = this._baseUrl + this.PROCESS_UPLOAD_PATH
        this._organizationUploadUrl = this._baseUrl + this.ORGANIZATION_UPLOAD_PATH
        this._actorsUploadUrl = this._baseUrl + this.ACTORS_UPLOAD_PATH
        this._imageUploadUrl = this._baseUrl + this.IMAGE_UPLOAD_PATH
        this._formsDocumentImageUrl = this._baseUrl + this.FORMS_DOCUMENT_IMAGE_PATH
    }

    get baseUrl() {
        return this._baseUrl
    }

    get apiUrl() {
        return this._apiUrl
    }

    get fileUploadUrl() {
        return this._fileUploadUrl
    }


    get processUploadUrl() {
        return this._processUploadUrl
    }

    get organizationUploadUrl() {
        return this._organizationUploadUrl
    }

    get actorsUploadUrl() {
        return this._actorsUploadUrl
    }

    get imageUploadUrl() {
        return this._imageUploadUrl
    }

    get formsDocumentImageUrl() {
        return this._formsDocumentImageUrl
    }

}