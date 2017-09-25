// ANGULAR Imports
import { Injectable } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBusinessDataObjectInterface } from './zgwnu-bonita-business-data-object.interface'
import { ZgwnuBonitaBusinessDataObjectListInterface } from './zgwnu-bonita-business-data-object-list.interface'

@Injectable()
export class ZgwnuBonitaDataObjectMapService {

    mapObject<T extends ZgwnuBonitaBusinessDataObjectInterface>(dataObject: Object, businessDataObject: T): void {
        for (let dataObjectKey in dataObject) {
            console.log('dataObjectKey', dataObjectKey)
            let dataObjectType: string = typeof dataObjectKey
            console.log('dataObjectType', dataObjectType)
            switch(dataObjectType) {
              // direct mapping object to object
              case 'string' || 'number' || 'boolean': 
                businessDataObject[dataObjectKey] = dataObject[dataObjectKey]
                break
              // indirect mapping of custom objects (that need a specific constructor)
              case 'object': 
                businessDataObject.mapObject(dataObjectKey, dataObject[dataObjectKey])
                break
              default:
                console.log('dataProperty not mapped = ', dataObject[dataObjectKey])
              }
            }
    }

}