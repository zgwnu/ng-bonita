import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms';
import { ZgwnuBonitaDocument } from './zgwnu-bonita-document';
import { ZgwnuBonitaDocumentCreateInput } from './zgwnu-bonita-document-create-input';
import { ZgwnuBonitaDocumentUpdateInput } from './zgwnu-bonita-document-update-input';
export declare class ZgwnuBonitaBpmCaseDocumentService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private resourcePath;
    private resourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    createDocument(documentCreateInput: ZgwnuBonitaDocumentCreateInput): Observable<ZgwnuBonitaDocument>;
    updateDocument(documentId: string, documentUpdateInput: ZgwnuBonitaDocumentUpdateInput): Observable<ZgwnuBonitaDocument>;
    getDocument(documentId: string): Observable<ZgwnuBonitaDocument>;
    searchDocuments(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaDocument[]>;
    private buildSearchRequest(searchParms);
}
