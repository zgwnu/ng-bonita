import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

@Injectable()
export class ZgwnuBonitaClientInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    return next
    .handle(req)
    .do(event => {
        //console.log('ZgwnuBonitaClientInterceptorService.event = ', event)
    })
}
}