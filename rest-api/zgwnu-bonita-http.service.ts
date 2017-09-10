import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable'
import 'rxjs/add/observable/throw'

import { ZgwnuBonitaDataMappingInterface } from './zgwnu-bonita-data-mapping.interface'
import { ZgwnuBonitaDataMapping } from './zgwnu-bonita-data-mapping'
import { ZgwnuBonitaResponse } from './zgwnu-bonita-response'
import { ZgwnuBonitaErrorResponse } from './zgwnu-bonita-error-response'
import { ZgwnuBonitaBackendService } from '../rest-api/zgwnu-bonita-backend.service'
import { ZgwnuBonitaRequestOptions } from './zgwnu-bonita-request-options'

@Injectable()
export abstract class ZgwnuBonitaHttpService extends Http {

    constructor(
        private backendService: ZgwnuBonitaBackendService,
        private requestOptions: ZgwnuBonitaRequestOptions,
    )
    {
        super(backendService, requestOptions)
    }

    protected mapping: ZgwnuBonitaDataMappingInterface = new ZgwnuBonitaDataMapping()
    
        protected mapSuccessResponse(res: Response) {
            let successResponse: ZgwnuBonitaResponse = new ZgwnuBonitaResponse()
            successResponse.status = res.status
            if (res.statusText) successResponse.statusText = res.statusText
            return successResponse
        }
    
        protected handleResponseError(error: Response | any) {
            let errorResponse: ZgwnuBonitaErrorResponse = new ZgwnuBonitaErrorResponse()
            if (error instanceof Response) {
                errorResponse.status = error.status
                if (error.statusText) errorResponse.statusText = error.statusText
                const body = error.json()
                errorResponse.exception = body.exception
                errorResponse.message = body.message
                errorResponse.explanations = body.explanations
            } else {
                errorResponse.status = 0
                errorResponse.statusText = error.message ? error.message : error.toString()
            }
            return Observable.throw(errorResponse)
        }

}