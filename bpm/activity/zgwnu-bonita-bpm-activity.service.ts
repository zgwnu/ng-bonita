// ZaakgerichtWerken.nu Bonita Rest Api BPM Activity Service
// --------------------------------------------------------------------------
//
// based on https://documentation.bonitasoft.com/?page=bpm-api#toc1
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
import { ZgwnuBonitaActivityDataInterface } from './zgwnu-bonita-activity-data.interface'
import { ZgwnuBonitaActivity } from './zgwnu-bonita-activity'


@Injectable()
export class ZgwnuBonitaBpmActivityService {
    private readonly RESOURCE_PATH: string = '/bpm/activity'
    private resourceUrl: string

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
        this.resourceUrl = configService.bonitaUrls.apiUrl + this.RESOURCE_PATH
    }

    searchActivities(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaActivity[]>  {
        return this.httpClient.get<ZgwnuBonitaActivityDataInterface[]>(
            this.resourceUrl + '?' + searchParms.getUrlEncondedParms())
            .pipe(
                map(this.mapActivities),
                catchError(this.responseMapService.catchBonitaError)
            )
    }

    private mapActivities(body: ZgwnuBonitaActivityDataInterface[]): ZgwnuBonitaActivity[] {
        let activities: ZgwnuBonitaActivity[] = []
        for (let data of body) {
            activities.push(new ZgwnuBonitaActivity(data))   
        }
        return activities
    }


    getActivity(activityId: string): Observable<ZgwnuBonitaActivity> {
        return this.httpClient.get<ZgwnuBonitaActivityDataInterface>(this.resourceUrl + '/' + activityId)
        .pipe(
            map(this.mapActivity),
            catchError(this.responseMapService.catchBonitaError)
        )
    }

    private mapActivity(body: ZgwnuBonitaActivityDataInterface): ZgwnuBonitaActivity {
        return new ZgwnuBonitaActivity(body)
    }

}