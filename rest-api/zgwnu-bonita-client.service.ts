import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { ZgwnuBonitaClientHandlerService } from './zgwnu-bonita-client-handler.service'

@Injectable()
export abstract class ZgwnuBonitaClientService extends HttpClient {

    constructor(
        private handlerService: ZgwnuBonitaClientHandlerService,  
    )
    {
        super(handlerService)
    }

}