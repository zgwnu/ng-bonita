// ZaakgerichtWerken.nu Bonita Rest Api BPM Task Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc5
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
import { ZgwnuBonitaResponse } from '../../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuBonitaTaskDataInterface } from './zgwnu-bonita-task-data.interface'
import { ZgwnuBonitaTask } from './zgwnu-bonita-task'

@Injectable()
export class ZgwnuBonitaBpmTaskService {
    private readonly RESOURCE_PATH: string = '/bpm/task'
    private resourceUrl: string

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
        this.resourceUrl = configService.bonitaUrls.apiUrl + this.RESOURCE_PATH
    }

    searchTasks(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaTask[]> {
        return this.httpClient.get<ZgwnuBonitaTaskDataInterface[]>(
            this.resourceUrl + '?' + searchParms.getUrlEncondedParms())
            .map(this.mapTasks)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapTasks(body: ZgwnuBonitaTaskDataInterface[]): ZgwnuBonitaTask[] {
        let humanTasks: ZgwnuBonitaTask[] = []
        for (let data of body) {
            humanTasks.push(new ZgwnuBonitaTask(data))   
        }
        return humanTasks
    }


    getTask(taskId: string): Observable<ZgwnuBonitaTask> {
        return this.httpClient.get<ZgwnuBonitaTaskDataInterface>(this.resourceUrl + '/' + taskId)
            .map(this.mapTask)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapTask(body: ZgwnuBonitaTaskDataInterface): ZgwnuBonitaTask {
        return new ZgwnuBonitaTask(body)
    }

}