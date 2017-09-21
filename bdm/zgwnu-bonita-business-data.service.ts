// ZaakgerichtWerken.nu Bonita Rest Api Business Data Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bdm-api#
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaBusinessDataObject } from './zgwnu-bonita-business-data-object'
import { ZgwnuBonitaBusinessDataQueryParms } from './zgwnu-bonita-business-data-query-parms'
import { ZgwnuBonitaBusinessDataContext } from './zgwnu-bonita-business-data-context'
import { ZgwnuSingleBusinessDataRefence } from './zgwnu-single-business-data-reference'
import { ZgwnuMultipleBusinessDataRefence } from './zgwnu-multiple-business-data-reference'

@Injectable()
export class ZgwnuBonitaBusinessDataService {
    private readonly RESOURCE_PATH = '/bdm'
    private readonly BUSSINESS_DATA_RESOURCE_PATH = this.RESOURCE_PATH + '/businessData'
    private readonly BUSSINESS_DATA_REFERENCE_RESOURCE_PATH = this.RESOURCE_PATH + '/businessDataReference'
    private businessDataResourceUrl: string
    private businessDataReferenceResourceUrl: string
    
    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    )
    {
        this.businessDataResourceUrl = configService.bonitaUrls.apiUrl + this.BUSSINESS_DATA_RESOURCE_PATH
        this.businessDataReferenceResourceUrl = configService.bonitaUrls.apiUrl + this.BUSSINESS_DATA_REFERENCE_RESOURCE_PATH
    }
    
    // Bonita Rest Api Business Data
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bdm-api#toc0
    //
    // Request URL template: ../API/bdm/businessData/:businessDataType/:persistenceId
    //
    getBusinessData<T>(businessDataObject: ZgwnuBonitaBusinessDataObject, persistenceId: number): Observable<ZgwnuBonitaBusinessDataObject> {
        return this.httpClient.get<T>(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataObject.businessDataType + 
                '/' + persistenceId.toString())
            .map(body => this.mapBusinessDataItem<T>(body, businessDataObject))
            .catch(this.responseMapService.catchBonitaError)
    }

    mapBusinessDataItem<T>(body: T, businessDataObject: ZgwnuBonitaBusinessDataObject): ZgwnuBonitaBusinessDataObject {
        businessDataObject.parseData(body)
        return businessDataObject
    }        


    // Bonita Rest Api Business Data Query
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bdm-api#toc1
    //
    // Request URL template: ../API/bdm/businessData/_businessDataType_?q=_queryName_
    //                       &p=0&c=10&f=param=value
    //
    queryBusinessData<T>(businessDataObject: ZgwnuBonitaBusinessDataObject, queryParms: ZgwnuBonitaBusinessDataQueryParms): Observable<ZgwnuBonitaBusinessDataObject[]> {
        return this.httpClient.get<T[]>(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataObject.businessDataType + 
            '?' + queryParms.getUrlEncondedParms())
            .map(body => this.mapBusinessDataItems<T>(body, businessDataObject))
            .catch(this.responseMapService.catchBonitaError)
    }

    mapBusinessDataItems<T>(body: T[], businessDataObject: ZgwnuBonitaBusinessDataObject): ZgwnuBonitaBusinessDataObject[] {
        let dataItems: ZgwnuBonitaBusinessDataObject[] = []
        for (let data of body) {
            businessDataObject.parseData(data)
            dataItems.push(businessDataObject)
        }
        return dataItems
    }        

}