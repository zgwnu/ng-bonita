import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaHumanTask } from './zgwnu-bonita-human-task';
export declare class ZgwnuBonitaHumanTaskMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaHumanTask;
    mapResponseArray(res: Response): ZgwnuBonitaHumanTask[];
}
