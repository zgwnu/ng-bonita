import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms';
import { ZgwnuBonitaHumanTask } from './zgwnu-bonita-human-task';
export declare class ZgwnuBonitaBpmHumanTaskService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private readonly HUMAN_TASK_RESOURCE_PATH;
    private humanTaskResourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    searchHumanTasks(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaHumanTask[]>;
    private buildHumanTaskSearchRequest(searchParms);
    getHumanTask(humanTaskId: string): Observable<ZgwnuBonitaHumanTask>;
}
