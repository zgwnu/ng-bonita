// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaProgressInterface } from '../rest-api/zgwnu-bonita-progress.interface'

export class ZgwnuBonitaFileUploadProgress implements ZgwnuBonitaProgressInterface {
    loaded: number
    total: number

    get percentDone(): number {
        let percentDoneValue: number = 0
        if ((this.loaded) && (this.total)) percentDoneValue = Math.round(100 * this.loaded / this.total)
        return percentDoneValue
    }
}