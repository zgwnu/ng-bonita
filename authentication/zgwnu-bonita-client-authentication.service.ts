// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//
import { Injectable } from '@angular/core'
import { HttpHeaders } from '@angular/common/http'

import { ZgwnuBonitaClientService } from '../rest-api/zgwnu-bonita-client.service'
import { ZgwnuBonitaClientHandlerService } from '../rest-api/zgwnu-bonita-client-handler.service'
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'

import { ZgwnuBonitaCredentials } from './zgwnu-bonita-credentials'

@Injectable()
export class ZgwnuBonitaAuthenticationService extends ZgwnuBonitaClientService {
    private readonly LOGIN_SERVICE_PATH = '/loginservice'
    private readonly SESSION_RESOURCE_PATH = '/system/session/unusedid'

    constructor(
        private AuthenticationHandlerService: ZgwnuBonitaClientHandlerService,  
        private configService: ZgwnuBonitaConfigService,  
    )
    {
        super(AuthenticationHandlerService)
    }

    login(creds: ZgwnuBonitaCredentials) {
        let credsUrlEncoded: string = 'username=' + creds.username + '&password=' + creds.password + '&redirect=false'
        let loginUrl: string = this.configService.bonitaUrls.baseUrl + this.LOGIN_SERVICE_PATH
        let loginHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })

        this.post(loginUrl, credsUrlEncoded, { headers: loginHeaders })
            .subscribe(
                response => console.log(response)
            )
    }

}
