import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms';
import { ZgwnuBonitaTask } from './zgwnu-bonita-task';
export declare class ZgwnuBonitaBpmTaskService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private readonly TASK_RESOURCE_PATH;
    private taskResourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    searchTasks(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaTask[]>;
    private buildTaskSearchRequest(searchParms);
    getTask(taskId: string): Observable<ZgwnuBonitaTask>;
}
