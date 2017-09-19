// ZaakgerichtWerken.nu Bonita Rest Api BPM Data Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc13
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuCaseVariableDataInterface } from './zgwnu-bonita-case-variable-data.interface'
import { ZgwnuBonitaCaseVariable } from './zgwnu-bonita-case-variable'

@Injectable()
export class ZgwnuBonitaBpmDataService {
    private readonly RESOURCE_PATH: string = '/bpm/caseVariable'
    private resourceUrl: string

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
        this.resourceUrl = configService.bonitaUrls.apiUrl + this.RESOURCE_PATH
    }

    // CaseVariable
    //
    // based on http://documentation.bonitasoft.com/?page=bpm-api#toc15
    //
    //
    searchCaseVariables(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaCaseVariable[]> {        
        return this.httpClient.get<ZgwnuCaseVariableDataInterface[]>(
            this.resourceUrl + '?' + searchParms.getUrlEncondedParms())
            .map(this.mapCaseVariables)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapCaseVariables(body: ZgwnuCaseVariableDataInterface[]): ZgwnuBonitaCaseVariable[] {
        let caseVariables: ZgwnuBonitaCaseVariable[] = []
        for (let data of body) {
            caseVariables.push(new ZgwnuBonitaCaseVariable(data))   
        }
        return caseVariables
    }


    getCaseVariable(caseId: string, variableName: string): Observable<ZgwnuBonitaCaseVariable> {
        return this.httpClient.get<ZgwnuCaseVariableDataInterface>(
            this.resourceUrl + '/' + caseId + '/' + variableName)
            .map(this.mapCaseVariable)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapCaseVariable(body: ZgwnuCaseVariableDataInterface): ZgwnuBonitaCaseVariable {
        return new ZgwnuBonitaCaseVariable(body)
    }

}