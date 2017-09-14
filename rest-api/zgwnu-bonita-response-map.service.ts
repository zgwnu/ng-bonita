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

@Injectable()
export class ZgwnuBonitaResponseMapService {

    mapBonitaResponse(response: HttpResponse<Object>): ZgwnuBonitaResponse {
        let bonitaResponse: ZgwnuBonitaResponse = new ZgwnuBonitaResponse()
        bonitaResponse.status = response.status
        bonitaResponse.statusText = response.statusText
        return bonitaResponse
    }

    catchBonitaError(error: HttpErrorResponse): ErrorObservable {
        return Observable.throw(error)
    }
    
}