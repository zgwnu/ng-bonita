// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBusinessDataInterface } from './zgwnu-bonita-business-data.interface'
import { ZgwnuBonitaBusinessDataObjectInterface } from './zgwnu-bonita-business-data-object.interface'

export interface ZgwnuBonitaBusinessDataObjectListInterface {
    businessDataType: string
    parseDataItems(dataItems: ZgwnuBonitaBusinessDataInterface[]): void
    items: ZgwnuBonitaBusinessDataObjectInterface[]
}