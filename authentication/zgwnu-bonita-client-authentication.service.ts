// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaCredentials } from './zgwnu-bonita-credentials'

@Injectable()
export class ZgwnuBonitaClientAuthenticationService {
    private readonly LOGIN_SERVICE_PATH = '/loginservice'
    private readonly SESSION_RESOURCE_PATH = '/system/session/unusedid'

    constructor(
        private configService: ZgwnuBonitaConfigService,  
        private httpClient: HttpClient, 
    )
    {
    }

    login(creds: ZgwnuBonitaCredentials, resp: (success: boolean) => void) {
        let loginUrl: string = this.configService.bonitaUrls.baseUrl + this.LOGIN_SERVICE_PATH
        let loginBody: string = 
            'username=' + creds.username + '&password=' + creds.password + '&redirect=false'
        let loginHeaders: HttpHeaders = 
            new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

        this.httpClient.post(
            loginUrl, 
            loginBody,
            { 
                headers: loginHeaders,
                observe: 'response',
                responseType: 'json'
            }
        )
        .subscribe(
            response => {
                console.log(response)
                resp(true)
            },
            error => {
                console.log(error)
                resp(false)
            }
        )
    }

}
