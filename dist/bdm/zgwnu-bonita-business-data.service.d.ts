import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ZgwnuBonitaRestApiService } from '../rest-api/zgwnu-bonita-rest-api.service';
import { ZgwnuBonitaDataMappingInterface } from '../rest-api/zgwnu-bonita-data-mapping.interface';
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service';
import { ZgwnuBonitaBusinessDataQueryParms } from './zgwnu-bonita-business-data-query-parms';
import { ZgwnuBonitaBusinessDataContext } from './zgwnu-bonita-business-data-context';
export declare class ZgwnuBonitaBusinessDataService extends ZgwnuBonitaRestApiService {
    private configService;
    private http;
    private resourcePath;
    private resourceUrl;
    constructor(configService: ZgwnuBonitaConfigService, http: Http);
    getBusinessData(businessDataObjectType: string, persistenceId: number, mappingParm?: ZgwnuBonitaDataMappingInterface): Observable<any>;
    protected buildGetRequestUrl(businessDataObjectType: string, persistenceId: number): string;
    queryBusinessData(businessDataObjectType: string, queryParms: ZgwnuBonitaBusinessDataQueryParms, mappingParm?: ZgwnuBonitaDataMappingInterface): Observable<any>;
    protected buildQueryRequestUrl(businessDataObjectType: string, queryParms: ZgwnuBonitaBusinessDataQueryParms): string;
    getBusinessDataFromContext(businessDataContext: ZgwnuBonitaBusinessDataContext, mappingParm?: ZgwnuBonitaDataMappingInterface): Observable<any>;
    protected buildGetFromContextUrl(businessDataContext: ZgwnuBonitaBusinessDataContext): string;
    private getMapping(mappingParm?);
    private getSingleBusinessDataReference(caseId, businessDataObjectType);
    private mapSingleBusinessDataReference(res);
    private getMultipleBusinessDataReference(caseId, businessDataObjectType);
    private mapMultipleBusinessDataReference(res);
    private getBusinessDataReference(caseId, businessDataObjectType);
}
