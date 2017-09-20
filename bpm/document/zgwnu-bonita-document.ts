// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaUtils } from '../../rest-api/zgwnu-bonita-utils'
import { ZgwnuBonitaDocumentDataInterface } from './zgwnu-bonita-document-data.interface'

export class ZgwnuBonitaDocument {

    constructor(data?: ZgwnuBonitaDocumentDataInterface)
    {
        if (data) {
            const utils = new ZgwnuBonitaUtils()
            this.id = data.id
            this.creationDate = utils.getDateValue(data.creationDate)
            this.author = data.author
            this.index = data.index
            this.contentMimetype = data.contentMimetype
            this.caseId = data.caseId  
            this.contentStorageId = data.contentStorageId
            this.isInternal = data.isInternal
            this.description = data.description
            this.name = data.name
            this.fileName = data.fileName
            this.submittedBy = data.submittedBy
            this.url = data.url
            this.version = data.version
        }
    }

    id: string // documentId 
    creationDate: Date // date and time 
    author: string // submittorUserId 
    index: number // index in a list of documents, or -1 for a single document 
    contentMimetype: string // MIMEtype 
    caseId: string // caseId  
    contentStorageId: string // storageId  
    isInternal: boolean // true | false  
    description: string //  description  
    name: string // name  
    fileName: string // filename  
    submittedBy: string // submittorUserId  
    url: string // urlForDownload  
    version: string // version
}