import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { ZgwnuBonitaHandlerService } from './zgwnu-bonita-handler.service'

@Injectable()
export abstract class ZgwnuBonitaClientService extends HttpClient {

    constructor(
        private handlerService: ZgwnuBonitaHandlerService,  
    )
    {
        super(handlerService)
    }

}