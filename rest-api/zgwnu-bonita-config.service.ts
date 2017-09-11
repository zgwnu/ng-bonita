import { Injectable } from '@angular/core'
import { Headers, RequestOptions } from '@angular/http'

import { ZgwnuBonitaSession } from './zgwnu-bonita-session'
import { ZgwnuBonitaUrls } from './zgwnu-bonita-urls'

@Injectable()
export class ZgwnuBonitaConfigService {
    // default zgwnu Business Data Model Package configuration
    public businessDataModelPackage: string = 'com.zgwnu.model'

    // urlconfig
    public bonitaUrls: ZgwnuBonitaUrls = new ZgwnuBonitaUrls()

    // rest api options
    readonly bonitaSessionTokenKey: string = 'X-Bonita-API-Token'
    private defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' })
    public options: RequestOptions = new RequestOptions({ headers: this.defaultHeaders })
    public sendOptions: RequestOptions

    // current session
    private _session: ZgwnuBonitaSession

    constructor ()
    {
    }

    set session(session: ZgwnuBonitaSession) {
        this._session = session
        this.configSendOptions()
    }

    get session() {
        return this._session
    }

    private configSendOptions() {
        let defaultSendHeaders: Headers = new Headers({ 'Content-Type': 'application/json' })
        this.sendOptions = new RequestOptions({ headers: defaultSendHeaders })
        this.appendSessionOptions(this.sendOptions)
    }

    appendSessionOptions(optionsRef: RequestOptions) {
        if (this._session.token) {
            if (!optionsRef.headers) {
                optionsRef.headers = this.defaultHeaders
            }
            optionsRef.headers.append(this.bonitaSessionTokenKey, this._session.token)
        }
    }

}