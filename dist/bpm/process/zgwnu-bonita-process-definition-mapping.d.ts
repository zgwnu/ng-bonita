import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaProcessDefinition } from './zgwnu-bonita-process-definition';
export declare class ZgwnuBonitaProcessDefinitionMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaProcessDefinition;
    mapResponseArray(res: Response): ZgwnuBonitaProcessDefinition[];
}
