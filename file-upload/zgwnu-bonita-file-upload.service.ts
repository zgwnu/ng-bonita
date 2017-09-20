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
import { HttpClient, HttpResponse, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http'

// RXJS Imports
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import { map } from 'rxjs/operator/map'
import 'rxjs/add/operator/catch'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaConfigService } from '../rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaResponseMapService } from '../rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaFileUploadProgressService } from './zgwnu-bonita-file-upload-progress.service'
import { ZgwnuBonitaContractInputFile } from './zgwnu-bonita-contract-input-file'

@Injectable()
export class ZgwnuBonitaFileUploadService {

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
        private progressService: ZgwnuBonitaFileUploadProgressService,  
    ) 
    { 
    }

    uploadFileRequest(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.fileUploadUrl, file, fileId)
    }

    uploadProcessRequest(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.processUploadUrl, file, fileId)
    }

    uploadOrganizationRequest(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.organizationUploadUrl, file, fileId)
    }

    uploadActorsRequest(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.actorsUploadUrl, file, fileId)
    }

    uploadImageRequest(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.imageUploadUrl, file, fileId)
    }


    private servletUploadFileRequest(servletUrl: string, file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        let formData: FormData = new FormData()
        formData.append(fileId, file, file.name)
        const servletRequest = new HttpRequest(
            'POST',
            servletUrl,
            formData,
            {
                headers: this.configService.sendHeaders,
                reportProgress: true,
                responseType: 'text' // body with tempFile is a text string
            }
        )
        return this.httpClient.request(servletRequest)
            .map(event => this.mapServletRequest(event, file, this.progressService))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapServletRequest(event: HttpEvent<Object>, file: File, 
        progressService: ZgwnuBonitaFileUploadProgressService): ZgwnuBonitaContractInputFile {
        let inputFile: ZgwnuBonitaContractInputFile = new ZgwnuBonitaContractInputFile()
        inputFile.contentType = file.type
        inputFile.fileName = file.name

        if (event.type === HttpEventType.UploadProgress) {
            progressService.loaded = event.loaded
            progressService.total = event.total
            console.log(`File is ${progressService.percentDone}% uploaded.`)
        } else if (event instanceof HttpResponse) {
            if (event.body != null) {
                inputFile.tempPath = <string>event.body
            }
        }
        return inputFile
    }

}