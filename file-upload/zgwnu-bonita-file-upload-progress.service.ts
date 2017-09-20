// ANGULAR Imports
import { Injectable } from '@angular/core'

@Injectable()
export class ZgwnuBonitaFileUploadProgressService {
    loaded: number
    total: number

    get percentDone(): number {
        let percentDoneValue: number = 0
        if ((this.loaded) && (this.total)) percentDoneValue = Math.round(100 * this.loaded / this.total)
        return percentDoneValue
    }
}