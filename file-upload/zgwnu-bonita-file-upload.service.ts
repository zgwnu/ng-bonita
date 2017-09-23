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
import { ZgwnuBonitaProgressInterface } from '../rest-api/zgwnu-bonita-progress.interface'
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

    uploadFileRequest(file: File, fileId: string, 
        progress?: ZgwnuBonitaProgressInterface): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.fileUploadUrl, file, fileId, progress)
    }

    uploadProcessRequest(file: File, fileId: string, 
        progress?: ZgwnuBonitaProgressInterface): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.processUploadUrl, file, fileId, progress)
    }

    uploadOrganizationRequest(file: File, fileId: string, 
        progress?: ZgwnuBonitaProgressInterface): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.organizationUploadUrl, file, fileId, progress)
    }

    uploadActorsRequest(file: File, fileId: string, 
        progress?: ZgwnuBonitaProgressInterface): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.actorsUploadUrl, file, fileId, progress)
    }

    uploadImageRequest(file: File, fileId: string, 
        progress?: ZgwnuBonitaProgressInterface): Observable<ZgwnuBonitaContractInputFile> {
        return this.servletUploadFileRequest(this.configService.bonitaUrls.imageUploadUrl, file, fileId, progress)
    }


    private servletUploadFileRequest(servletUrl: string, file: File, fileId: string, 
        progress?: ZgwnuBonitaProgressInterface): Observable<ZgwnuBonitaContractInputFile> {
        let formData: FormData = new FormData()
        formData.append(fileId, file, file.name)
        const servletRequest = new HttpRequest(
            'POST',
            servletUrl,
            formData,
            {
                headers: this.configService.sendHeaders,
                // report progress when there is a progress parm object
                reportProgress: (progress != undefined) && (progress != null),
                // body with tempFile is a text string
                responseType: 'text'
            }
        )
        return this.httpClient.request(servletRequest)
            .map(event => this.mapServletRequest(event, file, progress))
            .catch(this.responseMapService.catchBonitaError)
    }

    private mapServletRequest(event: HttpEvent<Object>, file: File, 
        progress?: ZgwnuBonitaProgressInterface): ZgwnuBonitaContractInputFile {
        let inputFile: ZgwnuBonitaContractInputFile = new ZgwnuBonitaContractInputFile()
        inputFile.contentType = file.type
        inputFile.fileName = file.name

        if (event.type === HttpEventType.UploadProgress) {
            if (progress) {
                progress.loaded = event.loaded
                progress.total = event.total
                console.log(`File is ${progress.percentDone}% uploaded.`)
            }
        } else if (event instanceof HttpResponse) {
            if (event.body != null) {
                inputFile.tempPath = <string>event.body
            }
        }
        return inputFile
    }

}