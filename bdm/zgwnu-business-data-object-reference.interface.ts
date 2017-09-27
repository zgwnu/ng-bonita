// ZGWNU Ng Bonita Module Imports
import { ZgwnuBusinessDataReferenceInterface } from './zgwnu-business-data-reference.interface'

export interface ZgwnuBusinessDataObjectReferenceInterface extends ZgwnuBusinessDataReferenceInterface {
    storageId: number // storage id in number format
    storageId_string: string // storage id in string format
}