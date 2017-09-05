import { Response } from '@angular/http'

import { ZgwnuBonitaDataMappingInterface } from '../rest-api/zgwnu-bonita-data-mapping.interface'
import { ZgwnuBonitaSession } from './zgwnu-bonita-session'


export class ZgwnuBonitaSessionMapping implements ZgwnuBonitaDataMappingInterface {

    mapResponse(res: Response) {
        let body = res.json()
        let headers: any
        if (res.headers != null) {
            headers = res.headers
        }
        let sessionData: ZgwnuBonitaSession = new ZgwnuBonitaSession(body, headers)
        return sessionData
    }

    mapResponseArray(res: Response) {
        return this.mapResponse(res)
    }

}