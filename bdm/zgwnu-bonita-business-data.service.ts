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
import { ZgwnuBonitaMapBusinessObject } from './zgwnu-bonita-business-data-mapping'
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
    getBusinessDataObject<T extends ZgwnuBonitaBusinessDataObjectInterface>(businessDataType: string, 
        persistenceId: number): Observable<T> {
        return this.httpClient.get(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataType + 
                '/' + persistenceId.toString())
            .map(body => this.mapBusinessDataObject<T>(body))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapBusinessDataObject<T extends ZgwnuBonitaBusinessDataObjectInterface>(dataObject: Object): T {
        let businessDataObject: T = <T>{}

        for (let dataObjectKey in dataObject) {
            switch(typeof dataObject[dataObjectKey]) {
              // direct mapping object to object
              case 'string': 
                businessDataObject[dataObjectKey] = dataObject[dataObjectKey]
                break
              case 'number': 
                businessDataObject[dataObjectKey] = dataObject[dataObjectKey]
                break
              case 'boolean': 
                businessDataObject[dataObjectKey] = dataObject[dataObjectKey]
                break
              // mapping of custom objects (composed)
              case 'object': 
                businessDataObject[dataObjectKey] = this.mapBusinessDataObject<T>(dataObject[dataObjectKey])
                break
              default:
                console.log('dataProperty not mapped = ', dataObject[dataObjectKey])
              }
        }

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
    queryBusinessData<T extends ZgwnuBonitaBusinessDataObjectInterface>( businessDataType: string, 
        queryParms: ZgwnuBonitaBusinessDataQueryParms): Observable<T[]> {
        return this.httpClient.get<Object[]>(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataType + 
            '?' + queryParms.getUrlEncondedParms())
            .map(body => this.mapBusinessDataObjectArray<T>(body))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapBusinessDataObjectArray<T extends ZgwnuBonitaBusinessDataObjectInterface>(dataObjectList: Object[]): T[] {
        let businessDataObjectArray: T[] = []

        for (let dataObject of dataObjectList) {
            businessDataObjectArray.push(this.mapBusinessDataObject(dataObject))
        }

        return businessDataObjectArray
    }

}