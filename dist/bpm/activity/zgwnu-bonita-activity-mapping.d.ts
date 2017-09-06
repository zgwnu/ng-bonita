import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaActivity } from './zgwnu-bonita-activity';
export declare class ZgwnuBonitaActivityMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaActivity;
    mapResponseArray(res: Response): ZgwnuBonitaActivity[];
}
