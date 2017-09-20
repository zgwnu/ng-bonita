// ZaakgerichtWerken.nu Bonita Rest Api BPM Case Document Service
// --------------------------------------------------------------------------
//
// based on https://documentation.bonitasoft.com/?page=bpm-api#toc16
//
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaSearchParms } from '../zgwnu-bonita-search-parms'
import { ZgwnuBonitaDocumentDataInterface } from './zgwnu-bonita-document-data.interface'
import { ZgwnuBonitaDocument } from './zgwnu-bonita-document'
import { ZgwnuBonitaDocumentCreateInput } from './zgwnu-bonita-document-create-input'
import { ZgwnuBonitaDocumentUpdateInput } from './zgwnu-bonita-document-update-input'

@Injectable()
export class ZgwnuBonitaBpmDocumentService {
    private resourcePath: string = '/bpm/caseDocument'
    private resourceUrl: string

    constructor(
        private configService: ZgwnuBonitaConfigService,
        private httpClient: HttpClient, 
        private responseMapService: ZgwnuBonitaResponseMapService, 
    ) 
    { 
        this.resourceUrl = configService.bonitaUrls.apiUrl + this.resourcePath
    }

    private mapDocument(body: ZgwnuBonitaDocumentDataInterface): ZgwnuBonitaDocument {
        return new ZgwnuBonitaDocument(body)
    }  

    private mapDocuments(body: ZgwnuBonitaDocumentDataInterface[]): ZgwnuBonitaDocument[] {
        let documents: ZgwnuBonitaDocument[] = []
        for (let data of body) documents.push(new ZgwnuBonitaDocument(data))
        return documents
    }  

    createDocument(documentCreateInput: ZgwnuBonitaDocumentCreateInput): Observable<ZgwnuBonitaDocument> {
        return this.httpClient.post<ZgwnuBonitaDocumentDataInterface>(
            this.resourceUrl,
            documentCreateInput,
            {
                headers: this.configService.sendHeaders,
                observe: 'body',
                responseType: 'json'
            }
        )
        .map(this.mapDocument)
        .catch(this.responseMapService.catchBonitaError)
    }

    updateDocument(documentId: string, documentUpdateInput: ZgwnuBonitaDocumentUpdateInput): Observable<ZgwnuBonitaDocument> {
        return this.httpClient.put<ZgwnuBonitaDocumentDataInterface>(
            this.resourceUrl + '/' + documentId,
            documentUpdateInput,
            {
                headers: this.configService.sendHeaders,
                observe: 'body',
                responseType: 'json'
            }
        )
        .map(this.mapDocument)
        .catch(this.responseMapService.catchBonitaError)
    }

    getDocument(documentId: string): Observable<ZgwnuBonitaDocument> {
        return this.httpClient.get<ZgwnuBonitaDocumentDataInterface>(
            this.resourceUrl + '/' + documentId
        )
        .map(this.mapDocument)
        .catch(this.responseMapService.catchBonitaError)
    }

    searchDocuments(searchParms: ZgwnuBonitaSearchParms): Observable<ZgwnuBonitaDocument[]> {
        return this.httpClient.get<ZgwnuBonitaDocumentDataInterface[]>(
            this.resourceUrl + '?' + searchParms.getUrlEncondedParms()
        )
        .map(this.mapDocuments)
        .catch(this.responseMapService.catchBonitaError)
    }

    private buildSearchRequest(searchParms: ZgwnuBonitaSearchParms): string {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms()
    }


}