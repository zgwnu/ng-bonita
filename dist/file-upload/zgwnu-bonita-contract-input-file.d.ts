import { ZgwnuBonitaFileUploadResponse } from './zgwnu-bonita-file-upload-response';
export declare class ZgwnuBonitaContractInputFile {
    constructor(fileInput?: File, responseInput?: ZgwnuBonitaFileUploadResponse);
    filename: string;
    contentType: string;
    tempPath: string;
}
