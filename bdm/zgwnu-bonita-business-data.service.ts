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
import { ZgwnuBonitaBusinessDataObjectInterface } from './zgwnu-bonita-business-data-object.interface'
import { ZgwnuBonitaBusinessDataListInterface } from './zgwnu-bonita-business-data-list.interface'
import { ZgwnuBonitaIsDateTypeInterface } from './zgwnu-bonita-is-date-type.interface'
import { ZgwnuIsDateTypeFunction } from './zgwnu-bonita-is-date-type.function'

@Injectable()
/**
 * 
 * Bonita Rest Api Business Data Service
 * based on http://documentation.bonitasoft.com/?page=bdm-api#toc0
 * 
*/
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
    
    /**
     * 
     * Get Bonita Business Data for one Object
     * based on http://documentation.bonitasoft.com/?page=bdm-api#toc0
     * 
     * @template T 
     * @param businessDataType explained
     * @param persistenceId 
     * @param isDateType 
     * @returns Business Data Object Data
     * 
     */
    getBusinessData<T extends ZgwnuBonitaBusinessDataObjectInterface>(
        businessDataType: string, 
        persistenceId: number,  
        isDateType?: ZgwnuBonitaIsDateTypeInterface): Observable<T> {

        return this.httpClient.get(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataType + 
                '/' + persistenceId.toString())
            .map(body => this.mapBusinessData<T>(body, isDateType))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapBusinessData<T extends ZgwnuBonitaBusinessDataObjectInterface>(
        dataObject: Object,
        isDateType?: ZgwnuBonitaIsDateTypeInterface): T {

        let businessData: Object = {}
        businessData = this.mapBusinessDataObject(dataObject, isDateType)
        return <T>businessData
    }

    private mapBusinessDataObject(
        dataObject: Object,
        isDateType?: ZgwnuBonitaIsDateTypeInterface): Object {

        if (!isDateType) isDateType = ZgwnuIsDateTypeFunction
        let businessDataObject: Object = {}

        for (let dataObjectKey in dataObject) {
            if (isDateType(dataObjectKey)) {
                businessDataObject[dataObjectKey] = new Date(dataObject[dataObjectKey])
            } else {
                switch(typeof dataObject[dataObjectKey]) {
                case 'string': 
                    businessDataObject[dataObjectKey] = dataObject[dataObjectKey]
                    break
                case 'number': 
                    businessDataObject[dataObjectKey] = dataObject[dataObjectKey]
                    break
                case 'boolean': 
                    businessDataObject[dataObjectKey] = dataObject[dataObjectKey]
                    break
                case 'object': 
                    if (dataObject[dataObjectKey] instanceof Array) {
                        let dataArray: Object[] = []
                        for (let dataItem of dataObject[dataObjectKey]) {
                            dataArray.push(this.mapBusinessDataObject(dataItem, isDateType))
                        }
                        businessDataObject[dataObjectKey] = dataArray
                    } else {
                        businessDataObject[dataObjectKey] = this.mapBusinessDataObject(
                            dataObject[dataObjectKey], isDateType)
                    }
                    break
                default:
                    console.log('dataProperty not mapped = ', dataObject[dataObjectKey])
                }
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
    queryBusinessData<T extends ZgwnuBonitaBusinessDataListInterface>(
        businessDataType: string, 
        queryParms: ZgwnuBonitaBusinessDataQueryParms,
        isDateType?: ZgwnuBonitaIsDateTypeInterface): Observable<T> {

        return this.httpClient.get<Object[]>(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataType + 
            '?' + queryParms.getUrlEncondedParms())
            .map(body => this.mapBusinessDataList<T>(body, isDateType))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapBusinessDataList<T extends ZgwnuBonitaBusinessDataListInterface>(
        dataObjectArray: Object[], 
        isDateType?: ZgwnuBonitaIsDateTypeInterface): T {

        let businessDataList: T = <T>{}
        businessDataList.items = []

        for (let dataObject of dataObjectArray) {
            businessDataList.items.push(this.mapBusinessDataObject(dataObject, isDateType))
        }
        
        return businessDataList
    }

}