// ZaakgerichtWerken.nu Bonita Rest Api BPM Process Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc28
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaResponse } from '../../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuBonitaProcessDefinitionDataInterface } from './zgwnu-bonita-process-definition-data.interface'
import { ZgwnuBonitaProcessDefinition } from './zgwnu-bonita-process-definition'
import { ZgwnuBonitaCreateCaseSuccessResponse } from './zgwnu-bonita-create-case-success-response'

@Injectable()
export class ZgwnuBonitaBpmProcessService {
    private readonly RESOURCE_PATH: string = '/bpm/process'
    private resourceUrl: string

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
        this.resourceUrl = configService.bonitaUrls.apiUrl + this.RESOURCE_PATH
    }

    searchProcessDefinitions(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaProcessDefinition[]> {
        let searchUrl: string = this.resourceUrl + '?' + searchParms.getUrlEncondedParms()
        return this.httpClient.get<ZgwnuBonitaProcessDefinitionDataInterface[]>(searchUrl)
            .map(this.mapProcessDefinitions)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapProcessDefinitions(body: ZgwnuBonitaProcessDefinitionDataInterface[]): ZgwnuBonitaProcessDefinition[] {
        let processDefinitions: ZgwnuBonitaProcessDefinition[] = []
        for (let data of body) {
            processDefinitions.push(new ZgwnuBonitaProcessDefinition(data))
        }
        return processDefinitions
    }

    getProcessDefinition(processDefinitionId: string): Observable<ZgwnuBonitaProcessDefinition> {
        let getUrl: string = this.resourceUrl + '/' + processDefinitionId
        return this.httpClient.get<ZgwnuBonitaProcessDefinitionDataInterface>(getUrl)
            .map(this.mapProcessDefinition)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapProcessDefinition(body: ZgwnuBonitaProcessDefinitionDataInterface): ZgwnuBonitaProcessDefinition {
        let processDefinition: ZgwnuBonitaProcessDefinition = new ZgwnuBonitaProcessDefinition(body)
        return processDefinition
    }


    // Start a process using an instantiation contract
    //
    // based on: http://documentation.bonitasoft.com/?page=bpm-api#toc23
    //
    // Post URL template: ../API/bpm/process/:processId/instantiation
    //
    createCase(processId: string, contractValues: any): Observable<ZgwnuBonitaCreateCaseSuccessResponse> {
        console.log('ZgwnuBonitaBpmProcessService.createCase')
        console.log(this.configService.session)
        let postUrl: string = this.resourceUrl + '/' + processId + '/instantiation'
        let sendHeaders: HttpHeaders = new HttpHeaders().set(
                this.configService.bonitaSessionTokenKey, this.configService.session.token)
        return this.httpClient.post(
            postUrl,
            contractValues,
            {
                headers: sendHeaders,
                observe: 'response',
                responseType: 'json'
            }
        )
        .map(this.mapCreateCaseSuccessResponse)
        .catch(this.responseMapService.catchBonitaError)
    }

    private mapCreateCaseSuccessResponse(response: HttpResponse<Object>): ZgwnuBonitaCreateCaseSuccessResponse {
        let successResponse: ZgwnuBonitaCreateCaseSuccessResponse = new ZgwnuBonitaCreateCaseSuccessResponse()
        successResponse.status = response.status
        successResponse.statusText = response.statusText
        successResponse.caseId = response.body['caseId']
        return successResponse
    }

}