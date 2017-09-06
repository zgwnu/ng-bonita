import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaFileUploadResponse } from './zgwnu-bonita-file-upload-response';
export declare class ZgwnuBonitaFileUploadService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    uploadFile(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse>;
    uploadProcess(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse>;
    uploadOrganization(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse>;
    uploadActors(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse>;
    uploadImage(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse>;
    private servletUploadFile(servletUrl, file, fileId);
    private mapFileUploadResponse(res);
}
