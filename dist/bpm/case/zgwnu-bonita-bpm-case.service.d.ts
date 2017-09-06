import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms';
import { ZgwnuBonitaCase } from './zgwnu-bonita-case';
export declare class ZgwnuBonitaBpmCaseService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private resourcePath;
    private resourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    searchCases(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaCase[]>;
    private buildSearchRequest(searchParms);
    getCase(caseId: string): Observable<ZgwnuBonitaCase>;
    getCaseContext(caseId: string): Observable<any>;
}
