import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaCase } from './zgwnu-bonita-case';
export declare class ZgwnuBonitaCaseMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaCase;
    mapResponseArray(res: Response): ZgwnuBonitaCase[];
}
