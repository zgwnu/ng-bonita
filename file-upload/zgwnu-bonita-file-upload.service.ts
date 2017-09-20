// ZaakgerichtWerken.nu Bonita Rest Api File Upload Service
// --------------------------------------------------------------------------
//
// based on: http://documentation.bonitasoft.com/?page=manage-files-using-upload-servlet-and-rest-api
//         : http://stackoverflow.com/questions/36352405/file-upload-with-angular2-to-rest-api
//
//
// To-Do:
// (1) map uploadFile Success Response to BonitaContractInputFile
//     including File Content-Type etc...
//

// ANGULAR Imports
import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operator/map'
import 'rxjs/add/operator/catch'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaFileUploadResponse } from './zgwnu-bonita-file-upload-response'

@Injectable()
export class ZgwnuBonitaFileUploadService {

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    ) 
    { 
    }

    uploadFile(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse> {
        return this.servletUploadFile(this.configService.bonitaUrls.fileUploadUrl, file, fileId)
    }

    uploadProcess(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse> {
        return this.servletUploadFile(this.configService.bonitaUrls.processUploadUrl, file, fileId)
    }

    uploadOrganization(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse> {
        return this.servletUploadFile(this.configService.bonitaUrls.organizationUploadUrl, file, fileId)
    }

    uploadActors(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse> {
        return this.servletUploadFile(this.configService.bonitaUrls.actorsUploadUrl, file, fileId)
    }

    uploadImage(file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse> {
        return this.servletUploadFile(this.configService.bonitaUrls.imageUploadUrl, file, fileId)
    }

    private servletUploadFile(servletUrl: string, file: File, fileId: string): Observable<ZgwnuBonitaFileUploadResponse> {
        let formData: FormData = new FormData()
        formData.append(fileId, file, file.name)
        return this.httpClient.post(
            servletUrl,
            formData,
            {
                headers: this.configService.sendHeaders,
                observe: 'response',
                responseType: 'text' // tempFile response is text string only (not a json object)
            }
        )
        .map(this.mapFileUploadResponse)
        .catch(this.responseMapService.catchBonitaError)        
    }

    private mapFileUploadResponse(response: HttpResponse<Object>): ZgwnuBonitaFileUploadResponse {
        let fileUploadResponse: ZgwnuBonitaFileUploadResponse = new ZgwnuBonitaFileUploadResponse()
        fileUploadResponse.status = response.status
        fileUploadResponse.statusText = response.statusText
        if (response.body != null) {
            fileUploadResponse.tempPath = (<string>response.body)
        }
        return fileUploadResponse
    }

}