/* 
ZaakgerichtWerken.nu Bonita Rest Api BPM User Task Service
--------------------------------------------------------------------------

based on http://documentation.bonitasoft.com/?page=bpm-api#toc6

Fixes:
    Issue 1:    assignUserTask() HttpClient 'Http failure during parsing' error
                Fixed by changing httpClient "responseType" parameter from
                'json' to 'text'

*/

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponse } from '../../rest-api/zgwnu-bonita-response'
import { ZgwnuBonitaResponseMapService } from '../../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuBonitaUserTaskDataInterface } from './zgwnu-bonita-user-task-data.interface'
import { ZgwnuBonitaUserTask } from './zgwnu-bonita-user-task'
import { ZgwnuBonitaUserTaskUpdateInput } from './zgwnu-bonita-user-task-update-input'

@Injectable()
export class ZgwnuBonitaBpmUserTaskService {
    private readonly RESOURCE_PATH: string = '/bpm/userTask'
    private resourceUrl: string

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
        this.resourceUrl = configService.bonitaUrls.apiUrl + this.RESOURCE_PATH
    }

    getUserTask(userTaskId: string): Observable<ZgwnuBonitaUserTask> {
        return this.httpClient.get<ZgwnuBonitaUserTaskDataInterface>(this.resourceUrl + '/' + userTaskId)
        .pipe(
            map(this.mapUserTask),
            catchError(this.responseMapService.catchBonitaError)
        )
    }

    private mapUserTask(body: ZgwnuBonitaUserTaskDataInterface): ZgwnuBonitaUserTask {
        return new ZgwnuBonitaUserTask(body)
    }


    getUserTaskContext(userTaskId: string): Observable<any> {
        return this.httpClient.get(this.resourceUrl + '/' + userTaskId + '/context')
        .pipe(catchError(this.responseMapService.catchBonitaError))
    }


    assignUserTask(userTaskId: string, userId?: string): Observable<ZgwnuBonitaResponse> {
        let updateInput: ZgwnuBonitaUserTaskUpdateInput = new ZgwnuBonitaUserTaskUpdateInput()

        if (userId) {
            // assign to specified user
            updateInput.assigned_id = userId
        } else {
            // assign to current logged user
            updateInput.assigned_id = this.configService.session.user_id
        }

        return this.httpClient.put(
            this.resourceUrl + '/' + userTaskId,
            updateInput,
            {
                headers: this.configService.sendHeaders,
                observe: 'response',
                responseType: 'text'
            }
        )
        .pipe(
            map(this.responseMapService.mapBonitaResponse),
            catchError(this.responseMapService.catchBonitaError)
        )

    }
    
    executeUserTask(userTaskId: string, contractValues: any): Observable<ZgwnuBonitaResponse> {
        return this.httpClient.post(
            this.resourceUrl + '/' + userTaskId + '/execution',
            contractValues,
            {
                headers: this.configService.sendHeaders,
                observe: 'response',
                responseType: 'json'
            }
        )
        .pipe(
            map(this.responseMapService.mapBonitaResponse),
            catchError(this.responseMapService.catchBonitaError)
        )
    }

}