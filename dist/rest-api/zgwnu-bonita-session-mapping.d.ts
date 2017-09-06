import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaSession } from './zgwnu-bonita-session';
export declare class ZgwnuBonitaSessionMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaSession;
    mapResponseArray(res: Response): ZgwnuBonitaSession;
}
