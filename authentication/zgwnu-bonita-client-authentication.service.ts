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
import { ZgwnuBonitaResponse } from '../rest-api/zgwnu-bonita-response'
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

    login(creds: ZgwnuBonitaCredentials, resp: (response: ZgwnuBonitaResponse, error?: any) => void) {
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
                let bonitaResponse: ZgwnuBonitaResponse = new ZgwnuBonitaResponse()
                bonitaResponse.status = response.status
                bonitaResponse.statusText = response.statusText
                this.getSession(() => {
                    resp(bonitaResponse)
                })
            },
            error => {
                resp(undefined, error)
            }
        )
    }

    getSession(resp: () => void) {
        this.httpClient.get(this.configService.bonitaUrls.apiUrl + this.SESSION_RESOURCE_PATH)
        .subscribe(
            body => {
                console.log(body)
            },
            error => {
                console.log(error)
            }
        )
    }

}
