import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http'

import { Observable } from 'rxjs'
import { map, catchError, tap } from 'rxjs/operators'

@Injectable()
export class ZgwnuBonitaClientInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    return next
    .handle(req)
    .pipe(
      tap(event => {
          //console.log('ZgwnuBonitaClientInterceptorService.event = ', event)
      })
    )
}
}