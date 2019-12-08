// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaSessionInterface } from '../rest-api/zgwnu-bonita-session.interface'
import { ZgwnuBonitaSession } from '../rest-api/zgwnu-bonita-session'
import { ZgwnuBonitaResponse } from '../rest-api/zgwnu-bonita-response'

@Injectable()
export class ZgwnuBonitaSessionService {
    private readonly SESSION_RESOURCE_PATH = '/system/session/unusedid'

    constructor(
        private httpClient: HttpClient, 
        private configService: ZgwnuBonitaConfigService,  
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
    }

    getSession(): Observable<ZgwnuBonitaSession> {
        return this.httpClient.get<ZgwnuBonitaSessionInterface>(
            this.configService.bonitaUrls.apiUrl + this.SESSION_RESOURCE_PATH,
            { observe: 'response' }
        )
        .pipe(
            map(response => this.mapBonitaSession(response, this.configService)),
            catchError(this.responseMapService.catchBonitaError)
        )
    }

    private mapBonitaSession(response: HttpResponse<ZgwnuBonitaSessionInterface>, configService: ZgwnuBonitaConfigService): ZgwnuBonitaSession {
        let session: ZgwnuBonitaSession = new ZgwnuBonitaSession()
        // get session data from response Body
        if (response.body) {
            session.conf = response.body.conf
            session.is_technical_user = response.body.is_technical_user
            session.session_id = response.body.session_id
            session.tenant = response.body.tenant
            session.token = response.headers.get(configService.bonitaSessionTokenKey) || ''
            session.user_id = response.body.user_id
            session.user_name = response.body.user_name
            session.version = response.body.version
        }
        // store Bonita Session Data in Config Service
        this.configService.session = session
        return session
    }

}
