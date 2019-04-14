// ZaakgerichtWerken.nu Bonita Rest Api BPM Human Task Service
// --------------------------------------------------------------------------
//
// based on https://documentation.bonitasoft.com/?page=bpm-api#toc3
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaResponse } from '../../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuBonitaHumanTaskDataInterface } from './zgwnu-bonita-human-task-data.interface'
import { ZgwnuBonitaHumanTask } from './zgwnu-bonita-human-task'

@Injectable()
export class ZgwnuBonitaBpmHumanTaskService {
    private readonly RESOURCE_PATH: string = '/bpm/humanTask'
    private resourceUrl: string

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
        this.resourceUrl = configService.bonitaUrls.apiUrl + this.RESOURCE_PATH
    }

    searchHumanTasks(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaHumanTask[]> {
        return this.httpClient.get<ZgwnuBonitaHumanTaskDataInterface[]>(
            this.resourceUrl + '?' + searchParms.getUrlEncondedParms())
            .pipe(
                map(this.mapHumanTasks),
                catchError(this.responseMapService.catchBonitaError)
            )
    }

    private mapHumanTasks(body: ZgwnuBonitaHumanTaskDataInterface[]): ZgwnuBonitaHumanTask[] {
        let humanTasks: ZgwnuBonitaHumanTask[] = []
        for (let data of body) {
            humanTasks.push(new ZgwnuBonitaHumanTask(data))   
        }
        return humanTasks
    }


    getHumanTask(humanTaskId: string): Observable<ZgwnuBonitaHumanTask> {
        return this.httpClient.get<ZgwnuBonitaHumanTaskDataInterface>(this.resourceUrl + '/' + humanTaskId)
        .pipe(
            map(this.mapHumanTask),
            catchError(this.responseMapService.catchBonitaError)
        )
    }

    private mapHumanTask(body: ZgwnuBonitaHumanTaskDataInterface): ZgwnuBonitaHumanTask {
        return new ZgwnuBonitaHumanTask(body)
    }

}