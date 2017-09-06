import { Response } from '@angular/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/observable/throw';
import { ZgwnuBonitaDataMappingInterface } from './zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaResponse } from './zgwnu-bonita-response';
export declare abstract class ZgwnuBonitaRestApiService {
    protected mapping: ZgwnuBonitaDataMappingInterface;
    protected mapSuccessResponse(res: Response): ZgwnuBonitaResponse;
    protected handleResponseError(error: Response | any): ErrorObservable;
}
