// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBusinessDataInterface } from './zgwnu-bonita-business-data.interface'

export interface ZgwnuBonitaBusinessDataObjectInterface extends ZgwnuBonitaBusinessDataInterface {
    businessDataType: string
    parseDataItem(dataItem: ZgwnuBonitaBusinessDataInterface): void
}