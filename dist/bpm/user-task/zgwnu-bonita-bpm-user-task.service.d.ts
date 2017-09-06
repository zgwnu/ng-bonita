import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaUserTask } from './zgwnu-bonita-user-task';
import { ZgwnuBonitaResponse } from '../../rest-api/zgwnu-bonita-response';
export declare class ZgwnuBonitaBpmUserTaskService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private readonly USER_TASK_RESOURCE_PATH;
    private userTaskResourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    getUserTask(userTaskId: string): Observable<ZgwnuBonitaUserTask>;
    getUserTaskContext(userTaskId: string): Observable<any>;
    assignUserTask(userTaskId: string, userId?: string): Observable<ZgwnuBonitaResponse>;
    executeUserTask(userTaskId: string, contractValues: any): Observable<ZgwnuBonitaResponse>;
}
