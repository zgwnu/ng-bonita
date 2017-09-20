// ANGULAR Imports
import { Injectable } from '@angular/core'

@Injectable()
export class ZgwnuBonitaFileUploadProgressService {
    loaded: number
    total: number

    get percentDone(): number {
        return Math.round(100 * this.loaded / this.total)
    }
}