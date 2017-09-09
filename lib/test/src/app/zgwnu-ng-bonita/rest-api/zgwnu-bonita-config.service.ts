import { Injectable } from '@angular/core'
import { Headers, RequestOptions } from '@angular/http'

@Injectable()
export class ZgwnuBonitaConfigService {
    // default zgwnu Business Data Model Package configuration
    public businessDataModelPackage: string = 'com.zaakgerichtwerkennu.model'

    // rest api options
    readonly bonitaSessionTokenKey: string = 'X-Bonita-API-Token'
    private defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' })
    public options: RequestOptions = new RequestOptions({ headers: this.defaultHeaders })
    public sendOptions: RequestOptions


}