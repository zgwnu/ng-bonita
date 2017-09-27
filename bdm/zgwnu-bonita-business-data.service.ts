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
import { ZgwnuBonitaBusinessDataListInterface } from './zgwnu-bonita-business-data-list.interface'
import { ZgwnuBonitaIsDateTypeInterface } from './zgwnu-bonita-is-date-type.interface'

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
    getBusinessData<T extends ZgwnuBonitaBusinessDataObjectInterface>(
        businessDataType: string, 
        persistenceId: number,  
        isDateType: ZgwnuBonitaIsDateTypeInterface): Observable<T> {

        return this.httpClient.get(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataType + 
                '/' + persistenceId.toString())
            .map(body => this.mapBusinessData<T>(body, isDateType))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapBusinessData<T extends ZgwnuBonitaBusinessDataObjectInterface>(
        dataObject: Object,
        isDateType: ZgwnuBonitaIsDateTypeInterface): T {

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
                            dataArray.push(this.mapBusinessData<Object>(dataItem, isDateType))
                        }
                        businessDataObject[dataObjectKey] = dataArray
                    } else {
                        businessDataObject[dataObjectKey] = this.mapBusinessData<Object>(
                            dataObject[dataObjectKey], isDateType)
                    }
                    break
                default:
                    console.log('dataProperty not mapped = ', dataObject[dataObjectKey])
                }
            }
        }
        return <T>businessDataObject
    }

    // Bonita Rest Api Business Data Query
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bdm-api#toc1
    //
    // Request URL template: ../API/bdm/businessData/_businessDataType_?q=_queryName_
    //                       &p=0&c=10&f=param=value
    //
    queryBusinessData<T extends ZgwnuBonitaBusinessDataObjectInterface>(
        businessDataType: string, 
        queryParms: ZgwnuBonitaBusinessDataQueryParms,
        isDateType: ZgwnuBonitaIsDateTypeInterface): Observable<ZgwnuBonitaBusinessDataListInterface> {

        return this.httpClient.get<Object[]>(
            this.businessDataResourceUrl + '/' + 
            this.configService.businessDataModelPackage + '.' + businessDataType + 
            '?' + queryParms.getUrlEncondedParms())
            .map(body => this.mapBusinessDataList<T>(body, isDateType))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapBusinessDataList<T extends ZgwnuBonitaBusinessDataObjectInterface>(
        dataObjectArray: Object[], 
        isDateType: ZgwnuBonitaIsDateTypeInterface): ZgwnuBonitaBusinessDataListInterface {

        let businessDataList: ZgwnuBonitaBusinessDataListInterface = { items: [] }
        for (let dataObject of dataObjectArray) {
            businessDataList.items.push(this.mapBusinessData<T>(dataObject, isDateType))
        }
        return businessDataList
    }

}