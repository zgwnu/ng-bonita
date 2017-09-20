export interface ZgwnuBonitaDocumentDataInterface {
    id: string // documentId 
    creationDate: string // date and time 
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