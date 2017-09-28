import { Injectable } from '@angular/core'
import { HttpHeaders } from '@angular/common/http'

import { ZgwnuBonitaSession } from './zgwnu-bonita-session'
import { ZgwnuBonitaUrls } from './zgwnu-bonita-urls'

@Injectable()
export class ZgwnuBonitaConfigService {
    public businessDataModelPackage: string = 'com.zgwnu.model'
    public bonitaUrls: ZgwnuBonitaUrls = new ZgwnuBonitaUrls()
    readonly bonitaSessionTokenKey: string = 'X-Bonita-API-Token'
    sendHeaders: HttpHeaders
    private _session: ZgwnuBonitaSession

    set session(session: ZgwnuBonitaSession) {
        this._session = session
        this.configSendHeaders()
    }

    get session() {
        return this._session
    }

    private configSendHeaders() {
        if (this._session.token) {
            this.sendHeaders = new HttpHeaders().set(this.bonitaSessionTokenKey, this._session.token)
        } else {
            this.sendHeaders = new HttpHeaders()
        }
    }

}