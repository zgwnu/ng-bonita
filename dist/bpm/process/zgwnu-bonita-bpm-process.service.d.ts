import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms';
import { ZgwnuBonitaFileUploadResponse } from '../../file-upload/zgwnu-bonita-file-upload-response';
import { ZgwnuBonitaProcessDefinition } from './zgwnu-bonita-process-definition';
import { ZgwnuBonitaCreateCaseSuccessResponse } from './zgwnu-bonita-create-case-success-response';
import { ZgwnuBonitaDeployProcessDefinitionSuccessResponse } from './zgwnu-bonita-deploy-process-definition-success-response';
import { ZgwnuBonitaProcessUpdateInput } from './zgwnu-bonita-process-update-input';
import { ZgwnuBonitaProcessUpdateSuccessResponse } from './zgwnu-bonita-process-update-success-response';
export declare class ZgwnuBonitaBpmProcessService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private readonly RESOURCE_PATH;
    private resourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    searchProcessDefinitions(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaProcessDefinition[]>;
    private buildSearchRequest(searchParms);
    getProcessDefinition(processDefinitionId: string): Observable<ZgwnuBonitaProcessDefinition>;
    createCase(processId: string, contractValues: any): Observable<ZgwnuBonitaCreateCaseSuccessResponse>;
    private mapCreateCaseSuccessResponse(res);
    deployProcessDefinition(processUploadResponse: ZgwnuBonitaFileUploadResponse): Observable<ZgwnuBonitaDeployProcessDefinitionSuccessResponse>;
    private mapDeployProcessDefinitionSuccessResponse(res);
    updateProcessDefinition(processDefinitionId: string, updateInput: ZgwnuBonitaProcessUpdateInput): Observable<ZgwnuBonitaProcessUpdateSuccessResponse>;
    private mapUpdateProcessDefinitionUpdateSuccessResponse(res);
}
