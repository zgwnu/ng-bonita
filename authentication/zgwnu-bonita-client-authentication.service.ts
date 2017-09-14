// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaResponse } from '../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaCredentials } from './zgwnu-bonita-credentials'

// Internal Used
export interface GetSessionInterface {
    
}

@Injectable()
export class ZgwnuBonitaClientAuthenticationService {
    private readonly LOGIN_SERVICE_PATH = '/loginservice'

    constructor(
        private httpClient: HttpClient, 
        private configService: ZgwnuBonitaConfigService,  
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
    }

    login(creds: ZgwnuBonitaCredentials): Observable<ZgwnuBonitaResponse> {
        let loginUrl: string = this.configService.bonitaUrls.baseUrl + this.LOGIN_SERVICE_PATH
        let loginBody: string = 
            'username=' + creds.username + '&password=' + creds.password + '&redirect=false'
        let loginHeaders: HttpHeaders = 
            new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

        return this.httpClient.post(
            loginUrl, 
            loginBody,
            { 
                headers: loginHeaders,
                observe: 'response',
                responseType: 'json'
            }
        )
        .map(this.responseMapService.mapBonitaResponse)
        .catch(this.responseMapService.catchBonitaError)
    }

}
