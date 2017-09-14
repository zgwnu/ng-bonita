// ZaakgerichtWerken.nu Bonita Rest Api BPM Process Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc28
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuBonitaProcessDefinitionDataInterface } from './zgwnu-bonita-process-definition-data.interface'
import { ZgwnuBonitaProcessDefinition } from './zgwnu-bonita-process-definition'

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
        // NOTE: => variant met HttpParms?
        let searchUrl: string = this.resourceUrl + '?' + searchParms.getUrlEncondedParms()
        return this.httpClient.get<ZgwnuBonitaProcessDefinitionDataInterface[]>(searchUrl)
            .map(this.mapProcessDefinitions)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapProcessDefinitions(body: ZgwnuBonitaProcessDefinitionDataInterface[]): ZgwnuBonitaProcessDefinition[] {
        let processDefinitions: ZgwnuBonitaProcessDefinition[] = []
        for (let data of body) {
            let processDefinition: ZgwnuBonitaProcessDefinition = new ZgwnuBonitaProcessDefinition(data)
        }
        return processDefinitions
    }

}