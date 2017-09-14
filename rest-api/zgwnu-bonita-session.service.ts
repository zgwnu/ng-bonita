// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

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
        .map(response => this.mapBonitaSession(response, this.configService))
        .catch(this.responseMapService.catchBonitaError)
    }

    private mapBonitaSession(response: HttpResponse<ZgwnuBonitaSessionInterface>, configService: ZgwnuBonitaConfigService): ZgwnuBonitaSession {
        let session: ZgwnuBonitaSession = new ZgwnuBonitaSession()
        // get session data from response Body
        session = response.body
        // get Bonita CRSF Security Token from response Headers
        session.token = response.headers.get(configService.bonitaSessionTokenKey)
        // save Bonita Session Data as Config
        this.configService.session = session
        return session
    }

}
