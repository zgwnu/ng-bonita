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
import { ZgwnuBonitaFileUploadResponse } from '../../file-upload/zgwnu-bonita-file-upload-response'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuBonitaProcessDefinitionDataInterface } from './zgwnu-bonita-process-definition-data.interface'
import { ZgwnuBonitaProcessDefinition } from './zgwnu-bonita-process-definition'
import { ZgwnuBonitaCreateCaseSuccessResponse } from './zgwnu-bonita-create-case-success-response'
import { ZgwnuBonitaDeployProcessDefinitionSuccessResponse } from './zgwnu-bonita-deploy-process-definition-success-response'
import { ZgwnuBonitaProcessUpdateInput } from './zgwnu-bonita-process-update-input'
import { ZgwnuBonitaProcessUpdateSuccessResponse } from './zgwnu-bonita-process-update-success-response'

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
    createCase(processId: string, contractInput: any): Observable<ZgwnuBonitaCreateCaseSuccessResponse> {
        return this.httpClient.post(
            this.resourceUrl + '/' + processId + '/instantiation',
            contractInput,
            {
                headers: this.configService.sendHeaders,
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


    // Deploy a process definition
    //
    // based on: http://documentation.bonitasoft.com/?page=bpm-api#toc28
    //
    // Post URL template: ../API/bpm/process
    //
    deployProcessDefinition(processUploadResponse: ZgwnuBonitaFileUploadResponse): Observable<ZgwnuBonitaDeployProcessDefinitionSuccessResponse> {
        return this.httpClient.post(
            this.resourceUrl,
            { "fileupload": processUploadResponse.tempPath },
            {
                headers: this.configService.sendHeaders,
                observe: 'response',
                responseType: 'json'
            }
        )
        .map(this.mapDeployProcessDefinitionSuccessResponse)
        .catch(this.responseMapService.catchBonitaError)
    }

    private mapDeployProcessDefinitionSuccessResponse(response: HttpResponse<Object>): ZgwnuBonitaDeployProcessDefinitionSuccessResponse {
        let successResponse: ZgwnuBonitaDeployProcessDefinitionSuccessResponse = new ZgwnuBonitaDeployProcessDefinitionSuccessResponse()
        successResponse.status = response.status
        successResponse.statusText = response.statusText
        successResponse.id = response.body['id']
        successResponse.deploymentDate = response.body['deploymentDate']
        successResponse.description = response.body['description']
        successResponse.activationState = response.body['activationState']
        successResponse.name = response.body['name']
        successResponse.displayName = response.body['displayName']
        successResponse.actorinitiatorid = response.body['actorinitiatorid'] 
        successResponse.last_update_date = response.body['last_update_date']
        successResponse.configurationState = response.body['configurationState']
        successResponse.version = response.body['version']        
        return successResponse
    }



    updateProcessDefinition(processDefinitionId: string, updateInput: ZgwnuBonitaProcessUpdateInput):  Observable<ZgwnuBonitaProcessUpdateSuccessResponse> {
        return this.httpClient.put(
            this.resourceUrl + '/' + processDefinitionId,
            updateInput,
            {
                headers: this.configService.sendHeaders,
                observe: 'response',
                responseType: 'json'
            }
        )
        .map(this.mapUpdateProcessDefinitionUpdateSuccessResponse)
        .catch(this.responseMapService.catchBonitaError)
    }

    private mapUpdateProcessDefinitionUpdateSuccessResponse(response: HttpResponse<Object>): ZgwnuBonitaProcessUpdateSuccessResponse {
        let successResponse: ZgwnuBonitaProcessUpdateSuccessResponse = new ZgwnuBonitaProcessUpdateSuccessResponse()
        successResponse.status = response.status
        successResponse.statusText = response.statusText
        return successResponse
    }
}