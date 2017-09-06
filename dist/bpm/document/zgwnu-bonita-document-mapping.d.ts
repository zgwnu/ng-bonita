import { Response } from '@angular/http';
import { ZgwnuBonitaDataMappingInterface } from '../../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaDocument } from './zgwnu-bonita-document';
export declare class ZgwnuBonitaDocumentMapping implements ZgwnuBonitaDataMappingInterface {
    mapResponse(res: Response): ZgwnuBonitaDocument;
    mapResponseArray(res: Response): ZgwnuBonitaDocument[];
}
