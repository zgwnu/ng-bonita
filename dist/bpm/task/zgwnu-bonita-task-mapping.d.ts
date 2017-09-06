import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaTask } from './zgwnu-bonita-task';
export declare class ZgwnuBonitaTaskMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaTask;
    mapResponseArray(res: Response): ZgwnuBonitaTask[];
}
