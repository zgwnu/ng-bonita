// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//
import { Injectable } from '@angular/core'
import { Headers, RequestOptions } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

import { ZgwnuBonitaHttpService } from '../rest-api/zgwnu-bonita-http.service'
import { ZgwnuBonitaBackendService } from '../rest-api/zgwnu-bonita-backend.service'
//import { ZgwnuBonitaRestApiService } from '../rest-api/zgwnu-bonita-rest-api.service'
import { ZgwnuBonitaDataMappingInterface } from '../rest-api/zgwnu-bonita-data-mapping.interface'
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaCredentials } from './zgwnu-bonita-credentials'
import { ZgwnuBonitaSession } from '../rest-api/zgwnu-bonita-session'
import { ZgwnuBonitaSessionMapping } from '../rest-api/zgwnu-bonita-session-mapping'
import { ZgwnuBonitaResponse } from '../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaErrorResponse } from '../rest-api/zgwnu-bonita-error-response'

@Injectable()
export class ZgwnuBonitaAuthenticationService extends ZgwnuBonitaHttpService {
    private readonly LOGIN_SERVICE_PATH = '/loginservice'
    private readonly CURRENT_SESSION_RESOURCE_PATH = '/system/session/unusedid'

    successResponse: ZgwnuBonitaResponse
    errorResponse: ZgwnuBonitaErrorResponse

    constructor(
        private configService: ZgwnuBonitaConfigService,
        private bonitaBackend: ZgwnuBonitaBackendService, 
        )
    { 
        super(bonitaBackend)
    }

    login(creds: ZgwnuBonitaCredentials): Observable<ZgwnuBonitaResponse> {
        let credsUrlEncoded: string = 'username=' + creds.username + '&password=' + creds.password + '&redirect=false'
        let headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
        let options: RequestOptions = new RequestOptions({ headers: headers })
        let postUrl: string = this.configService.bonitaUrls.baseUrl + this.LOGIN_SERVICE_PATH

        return this.post(postUrl, credsUrlEncoded, options)
                        .map(this.mapSuccessResponse)
                        .catch(this.handleResponseError)
    }

    getSession(): Observable<ZgwnuBonitaSession> {
        let sessionMapping: ZgwnuBonitaDataMappingInterface = new ZgwnuBonitaSessionMapping()
        return this.get(this.configService.bonitaUrls.apiUrl + this.CURRENT_SESSION_RESOURCE_PATH, this.configService.options)
                .map(sessionMapping.mapResponse)
                .catch(this.handleResponseError)

    }

}