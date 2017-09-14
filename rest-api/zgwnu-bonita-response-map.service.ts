// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpResponse, HttpErrorResponse } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaResponse } from '../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaErrorResponse } from '../rest-api/zgwnu-bonita-error-response'

@Injectable()
export class ZgwnuBonitaResponseMapService {

    mapBonitaResponse(response: HttpResponse<Object>): ZgwnuBonitaResponse {
        let bonitaResponse: ZgwnuBonitaResponse = new ZgwnuBonitaResponse()
        bonitaResponse.status = response.status
        bonitaResponse.statusText = response.statusText
        return bonitaResponse
    }

    catchBonitaError(httpError: HttpErrorResponse): ErrorObservable {
        let bonitaError: ZgwnuBonitaErrorResponse = new ZgwnuBonitaErrorResponse()
        if (httpError.error instanceof Error) {
            // A client-side or network error occurred
            let error: Error = httpError.error
            bonitaError.status = 0
            bonitaError.statusText = error.name
            bonitaError.message = error.message
            bonitaError.explanations = [error.stack]
        } else {
            // A Bonita Rest Api Server Error occured
            
        }
        return Observable.throw(bonitaError)
    }
    
}