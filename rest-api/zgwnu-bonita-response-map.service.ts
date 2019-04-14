// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpResponse, HttpErrorResponse } from '@angular/common/http'

// RXJS Imports
import { Observable, throwError } from 'rxjs'


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

    catchBonitaError(httpError: HttpErrorResponse) : Observable<any> {
        let bonitaError: ZgwnuBonitaErrorResponse = new ZgwnuBonitaErrorResponse()
        bonitaError.status = httpError.status
        bonitaError.statusText = httpError.statusText
        if (httpError.message) bonitaError.message = httpError.message
        if (httpError.error) {
            if (httpError.error.error) bonitaError.exception = httpError.error.error
            if (httpError.error.text) bonitaError.explanations = httpError.error.text
        }
        return throwError(bonitaError)
    }
    
}