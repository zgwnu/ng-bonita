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
import { ZgwnuBonitaContractInputFile } from './zgwnu-bonita-contract-input-file'

@Injectable()
export class ZgwnuBonitaFileUploadService {

    constructor(
        private httpClient: HttpClient,  
        private configService: ZgwnuBonitaConfigService, 
        private responseMapService: ZgwnuBonitaResponseMapService,  
    ) 
    { 
    }

    uploadFile(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFile(this.configService.bonitaUrls.fileUploadUrl, file, fileId)
    }

    uploadProcess(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFile(this.configService.bonitaUrls.processUploadUrl, file, fileId)
    }

    uploadOrganization(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFile(this.configService.bonitaUrls.organizationUploadUrl, file, fileId)
    }

    uploadActors(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFile(this.configService.bonitaUrls.actorsUploadUrl, file, fileId)
    }

    uploadImage(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFile(this.configService.bonitaUrls.imageUploadUrl, file, fileId)
    }

    private servletUploadFile(servletUrl: string, file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        let formData: FormData = new FormData()
        formData.append(fileId, file, file.name)
        return this.httpClient.post(
            servletUrl,
            formData,
            {
                headers: this.configService.sendHeaders,
                observe: 'body',
                responseType: 'text' // body with tempFile is a text string
            }
        )
        .map(body => this.mapContractInputFile(body, file))
        .catch(this.responseMapService.catchBonitaError)        
    }

    private mapContractInputFile(body: string, file: File): ZgwnuBonitaContractInputFile {
        let inputFile: ZgwnuBonitaContractInputFile = new ZgwnuBonitaContractInputFile()
        if (body != null) {
            inputFile.tempPath = body
        }
        inputFile.contentType = file.type
        inputFile.fileName = file.name
        return inputFile
    }

    uploadFileRequest(file: File, fileId: string): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.fileUploadUrl, file, fileId)
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
                responseType: 'text'
            }
        )
        return this.httpClient.request(servletRequest)
            .map(this.mapServletRequest)
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapServletRequest(event: HttpEvent<Object>): ZgwnuBonitaContractInputFile {
        let inputFile: ZgwnuBonitaContractInputFile = new ZgwnuBonitaContractInputFile()
        if (event.type === HttpEventType.UploadProgress) {
            // This is an upload progress event. Compute and show the % done:
            const percentDone = Math.round(100 * event.loaded / event.total);
            console.log(`File is ${percentDone}% uploaded.`)
        } else if (event instanceof HttpResponse) {
            if (event.body != null) {
                inputFile.tempPath = <string>event.body
            }
        }
        return inputFile
    }

}