import { Injectable } from '@angular/core'
import { HttpHandler } from '@angular/common/http'

@Injectable()
export class ZgwnuBonitaHandlerService extends HttpHandler {

    constructor(

    )
    {
        super()
    }

    handle(req: any): any {
        console.log('ZgwnuBonitaClientHandler.handle', req)
    }
    
}