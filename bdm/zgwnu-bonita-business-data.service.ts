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
import { ZgwnuBonitaBusinessDataQueryParms } from './zgwnu-bonita-business-data-query-parms'
import { ZgwnuBonitaBusinessDataContext } from './zgwnu-bonita-business-data-context'
import { ZgwnuSingleBusinessDataRefence } from './zgwnu-single-business-data-reference'
import { ZgwnuMultipleBusinessDataRefence } from './zgwnu-multiple-business-data-reference'
import { ZgwnuBonitaBusinessDataObjectInterface } from './zgwnu-bonita-business-data-object.interface'
import { ZgwnuBonitaBusinessDataObjectListInterface } from './zgwnu-bonita-business-data-object-list.interface'

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
    getBusinessData<T>(businessDataObject: ZgwnuBonitaBusinessDataObjectInterface, 
        persistenceId: number): Observable<void> {
        return this.httpClient.get<T>(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataObject.businessDataType + 
                '/' + persistenceId.toString())
            .map(body => businessDataObject.parseDataItem(<any>body))
            .catch(this.responseMapService.catchBonitaError)
    }

    getBusinessDataTest<T extends ZgwnuBonitaBusinessDataObjectInterface>(businessDataType: string,
        persistenceId: number): Observable<T> {
        return this.httpClient.get(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataType + 
            '/' + persistenceId.toString())
            .map(body => this.mapBusinessDataObject<T>(body))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapBusinessDataObject<T>(body: Object): T {
        let objectT: T
        let bodyKeys: string[] = Object.keys(body)
        let bodyKeyIndex: number = 0

        for (let keyT in objectT) {
            let typeOfKeyT = typeof objectT[keyT]
            console.log('typeOfKeyT', typeOfKeyT)
            let bodyKey: string = bodyKeys[bodyKeyIndex]
            console.log('bodyKey', bodyKey)

            switch (typeOfKeyT) {
                // basic object types
                case 'number' || 'string' || 'boolean': 
                    objectT[keyT] = body[bodyKey]
                default:
                    console.log('objectT[keyT]', objectT[keyT])
            }

            
        }
        return objectT
    }

    // Bonita Rest Api Business Data Query
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bdm-api#toc1
    //
    // Request URL template: ../API/bdm/businessData/_businessDataType_?q=_queryName_
    //                       &p=0&c=10&f=param=value
    //
    queryBusinessData<T>(businessDataObjectList: ZgwnuBonitaBusinessDataObjectListInterface, 
        queryParms: ZgwnuBonitaBusinessDataQueryParms): Observable<void> {
        return this.httpClient.get<T[]>(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataObjectList.businessDataType + 
            '?' + queryParms.getUrlEncondedParms())
            .map(body => businessDataObjectList.parseDataItems(<any[]>body))
            .catch(this.responseMapService.catchBonitaError)
    }

}