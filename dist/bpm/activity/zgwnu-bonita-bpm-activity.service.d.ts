import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms';
import { ZgwnuBonitaActivity } from './zgwnu-bonita-activity';
export declare class ZgwnuBonitaBpmActivityService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private readonly ACTIVITY_RESOURCE_PATH;
    private activityResourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    searchActivities(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaActivity[]>;
    private buildActivitySearchRequest(searchParms);
    getActivity(activityId: string): Observable<ZgwnuBonitaActivity>;
}
