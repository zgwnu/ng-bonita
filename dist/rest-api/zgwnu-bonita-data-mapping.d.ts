import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from './zgwnu-bonita-data-mapping.interface';
export declare class ZgwnuBonitaDataMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponseArray(res: Response): any;
    mapResponse(res: Response): any;
}
