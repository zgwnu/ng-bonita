import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaCaseVariable } from './zgwnu-bonita-case-variable';
export declare class ZgwnuBonitaCaseVariableMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaCaseVariable;
    mapResponseArray(res: Response): ZgwnuBonitaCaseVariable[];
}
