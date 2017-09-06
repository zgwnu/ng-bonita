import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaCredentials } from './zgwnu-bonita-credentials';
import { ZgwnuBonitaSession } from '../rest-api/zgwnu-bonita-session';
import { ZgwnuBonitaResponse } from '../rest-api/zgwnu-bonita-response';
import { ZgwnuBonitaErrorResponse } from '../rest-api/zgwnu-bonita-error-response';
export declare class ZgwnuBonitaAuthenticationService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private router;
    private readonly LOGIN_SERVICE_PATH;
    private readonly CURRENT_SESSION_RESOURCE_PATH;
    successResponse: ZgwnuBonitaResponse;
    errorResponse: ZgwnuBonitaErrorResponse;
    constructor(configService: ZgwnuBonitaConfigService, http: Http, router: Router);
    private executeLogin(creds);
    getCurrentSession(): Observable<ZgwnuBonitaSession>;
    login(creds: ZgwnuBonitaCredentials): void;
}
