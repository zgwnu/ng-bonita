// ZaakgerichtWerken.nu Bonita Rest Api BPM Activity Service
// --------------------------------------------------------------------------
//
// based on https://documentation.bonitasoft.com/?page=bpm-api#toc1
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
import { ZgwnuBonitaActivityInterface } from './zgwnu-bonita-activity.interface'
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

    searchActivities(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaActivity[]> {
        return this.httpClient.get<ZgwnuBonitaActivityInterface[]>(
            this.resourceUrl + '?' + searchParms.getUrlEncondedParms())
            .map(this.mapActivities)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapActivities(body: ZgwnuBonitaActivityInterface[]): ZgwnuBonitaActivity[] {
        let activities: ZgwnuBonitaActivity[] = []
        for (let data of body) {
            activities.push(new ZgwnuBonitaActivity(data))   
        }
        return activities
    }


    getActivity(activityId: string): Observable<ZgwnuBonitaActivity> {
        return this.httpClient.get<ZgwnuBonitaActivityInterface>(this.resourceUrl + '/' + activityId)
            .map(this.mapActivity)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapActivity(body: ZgwnuBonitaActivityInterface): ZgwnuBonitaActivity {
        return new ZgwnuBonitaActivity(body)
    }

}