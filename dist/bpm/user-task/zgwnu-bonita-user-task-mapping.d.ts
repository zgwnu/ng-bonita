import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaUserTask } from './zgwnu-bonita-user-task';
export declare class ZgwnuBonitaUserTaskMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaUserTask;
    mapResponseArray(res: Response): ZgwnuBonitaUserTask[];
}
