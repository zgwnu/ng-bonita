// ZaakgerichtWerken.nu Bonita Rest Api BPM Case (Process Instance) Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc23
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaResponse } from '../../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuBonitaCaseDataInterface } from './zgwnu-bonita-case-data.interface'
import { ZgwnuBonitaCase } from './zgwnu-bonita-case'


@Injectable()
export class ZgwnuBonitaBpmCaseService {
    private readonly RESOURCE_PATH = '/bpm/case'
    private resourceUrl: string

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
        this.resourceUrl = configService.bonitaUrls.apiUrl + this.RESOURCE_PATH
    }

    searchCases(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaCase[]> {
        return this.httpClient.get<ZgwnuBonitaCaseDataInterface[]>(
            this.resourceUrl + '?' + searchParms.getUrlEncondedParms())
            .pipe(
                map(this.mapCases),
                catchError(this.responseMapService.catchBonitaError)
            )
    }

    private mapCases(body: ZgwnuBonitaCaseDataInterface[]): ZgwnuBonitaCase[] {
        let cases: ZgwnuBonitaCase[] = []
        for (let data of body) {
            cases.push(new ZgwnuBonitaCase(data))   
        }
        console.log('mapCases.cases', cases)
        return cases
    }


    getCase(caseId: string): Observable<ZgwnuBonitaCase> {
        return this.httpClient.get<ZgwnuBonitaCaseDataInterface>(this.resourceUrl + '/' + caseId)
        .pipe(
            map(this.mapCase),
            catchError(this.responseMapService.catchBonitaError)
        )
    }

    private mapCase(body: ZgwnuBonitaCaseDataInterface): ZgwnuBonitaCase {
        return new ZgwnuBonitaCase(body)
    }


    getCaseContext(caseId: string): Observable<any> {
        return this.httpClient.get(this.resourceUrl + '/' + caseId + '/context')
        .pipe(catchError(this.responseMapService.catchBonitaError))   
    }

}