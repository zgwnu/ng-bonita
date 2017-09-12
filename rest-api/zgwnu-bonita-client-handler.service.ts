import { Injectable } from '@angular/core'
import { HttpHandler } from '@angular/common/http'

@Injectable()
export class ZgwnuBonitaClientHandlerService extends HttpHandler {

    constructor(

    )
    {
        super()
    }

    handle(req: any): any {
        console.log('ZgwnuBonitaClientHandlerService.handle', req)
    }
    
}