import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms';
import { ZgwnuBonitaCaseVariable } from './zgwnu-bonita-case-variable';
export declare class ZgwnuBonitaBpmDataService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private caseVariableResourcePath;
    private caseVariableResourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    getCaseVariable(caseId: string, variableName: string): Observable<ZgwnuBonitaCaseVariable>;
    searchCaseVariables(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaCaseVariable[]>;
    private buildSearchRequest(searchParms);
}
