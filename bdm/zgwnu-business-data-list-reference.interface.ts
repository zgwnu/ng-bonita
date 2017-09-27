// ZGWNU Ng Bonita Module Imports
import { ZgwnuBusinessDataReferenceInterface } from './zgwnu-business-data-reference.interface'

export interface ZgwnuBusinessDataListReferenceInterface extends ZgwnuBusinessDataReferenceInterface {
    storageIds: number[] // storage ids in number format
    storageIds_string: string[] // storage ids in string format
}