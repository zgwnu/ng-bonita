// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//
import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

import { ZgwnuBonitaRestApiService } from '../rest-api/zgwnu-bonita-rest-api.service'
import { ZgwnuBonitaDataMappingInterface } from '../rest-api/zgwnu-bonita-data-mapping.interface'
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaCredentials } from './zgwnu-bonita-credentials'
import { ZgwnuBonitaSession } from './zgwnu-bonita-session'
import { ZgwnuBonitaSessionMapping } from './zgwnu-bonita-session-mapping'
import { ZgwnuBonitaResponse } from '../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaErrorResponse } from '../rest-api/zgwnu-bonita-error-response'

@Injectable()
export class ZgwnuBonitaAuthenticationService extends ZgwnuBonitaRestApiService {
    private readonly LOGIN_SERVICE_PATH = '/loginservice'
    private readonly CURRENT_SESSION_RESOURCE_PATH = '/system/session/unusedid'

    successResponse: ZgwnuBonitaResponse
    errorResponse: ZgwnuBonitaErrorResponse

    constructor(
        private configService: ZgwnuBonitaConfigService,
        private http: Http
        )
    { 
        super()
    }

    login(creds: ZgwnuBonitaCredentials): Observable<ZgwnuBonitaResponse> {
        let credsUrlEncoded: string = 'username=' + creds.username + '&password=' + creds.password + '&redirect=false'
        let headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
        let options: RequestOptions = new RequestOptions({ headers: headers })
        let postUrl: string = this.configService.bonitaUrls.baseUrl + this.LOGIN_SERVICE_PATH

        return this.http.post(postUrl, credsUrlEncoded, options)
                        .map(this.mapSuccessResponse)
                        .catch(this.handleResponseError)
    }

    getSession(): Observable<ZgwnuBonitaSession> {
        let sessionMapping: ZgwnuBonitaDataMappingInterface = new ZgwnuBonitaSessionMapping()
        return this.http.get(this.configService.bonitaUrls.apiUrl + this.CURRENT_SESSION_RESOURCE_PATH, this.configService.options)
                .map(sessionMapping.mapResponse)
                .catch(this.handleResponseError)

    }

}