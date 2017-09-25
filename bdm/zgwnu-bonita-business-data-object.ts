// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBusinessDataObjectInterface } from './zgwnu-bonita-business-data-object.interface'

export abstract class ZgwnuBonitaBusinessDataObject implements ZgwnuBonitaBusinessDataObjectInterface {
  persistenceId?: number
  persistenceId_string?: string
  persistenceVersion?: number
  persistenceVersion_string?: string

  mapObject(objectKey: string, objectValue: Object) {
    console.log(objectKey, objectValue)
  }
}
