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
import { ErrorObservable } from 'rxjs/observable/ErrorObservable'
import { bindCallback } from 'rxjs/observable/bindCallback'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaSessionInterface } from '../rest-api/zgwnu-bonita-session.interface'
import { ZgwnuBonitaSession } from '../rest-api/zgwnu-bonita-session'
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

    login(creds: ZgwnuBonitaCredentials, resp: (error?: any, response?: ZgwnuBonitaResponse, session?: ZgwnuBonitaSession) => void) {
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
                this.getSession((error, session) => {
                    if (error) {
                        resp(error)
                    } else {
                        resp(undefined, bonitaResponse, session)
                    }
                })
            },
            error => {
                resp(error)
            }
        )
    }

    getSession(resp: (error?: any, session?: ZgwnuBonitaSession) => void) {
        this.httpClient.get<ZgwnuBonitaSessionInterface>(
            this.configService.bonitaUrls.apiUrl + this.SESSION_RESOURCE_PATH,
            { observe: 'response' }
        )
        .subscribe(
            response => {
                let session: ZgwnuBonitaSession = new ZgwnuBonitaSession()
                session = response.body
                session.token = response.headers.get('X-Bonita-API-Token')
                this.configService.session = session
                resp(undefined, session)
            },
            error => {
                resp(error)
            }
        )
    }

    getSessionMapped(): Observable<ZgwnuBonitaSession> {
        return this.httpClient.get<ZgwnuBonitaSessionInterface>(
            this.configService.bonitaUrls.apiUrl + this.SESSION_RESOURCE_PATH,
            { observe: 'response' }
        )
        .map(this.mapBonitaSession)
        .catch(this.catchBonitaError)
    }

    private mapBonitaSession(response: HttpResponse<ZgwnuBonitaSessionInterface>): ZgwnuBonitaSession {
        let session: ZgwnuBonitaSession = new ZgwnuBonitaSession()
        session = response.body
        session.token = response.headers.get('X-Bonita-API-Token')
        this.configService.session = session
        return session
    }

    loginMapped(creds: ZgwnuBonitaCredentials): Observable<ZgwnuBonitaResponse> {
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
        .map(this.mapBonitaResponse)
        .catch(this.catchBonitaError)
        //.catch((error:  HttpErrorResponse) => this.catchBonitaError(error))
    }

    protected mapBonitaResponse(response: HttpResponse<Object>): ZgwnuBonitaResponse {
        let bonitaResponse: ZgwnuBonitaResponse = new ZgwnuBonitaResponse()
        bonitaResponse.status = response.status
        bonitaResponse.statusText = response.statusText
        return bonitaResponse
    }

    protected catchBonitaError(error: HttpErrorResponse): ErrorObservable {
        return Observable.throw(error)
    }

}
