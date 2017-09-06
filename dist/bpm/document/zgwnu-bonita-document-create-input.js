var ZgwnuBonitaDocumentCreateInput = /** @class */ (function () {
    function ZgwnuBonitaDocumentCreateInput(inputData) {
        if (inputData) {
            this.caseId = inputData.caseId;
            this.name = inputData.name;
            if (inputData.file) {
                this.file = inputData.file;
            }
            if (inputData.url) {
                this.file = inputData.url;
            }
            if (inputData.fileName) {
                this.file = inputData.fileName;
            }
            if (inputData.contentMimetype) {
                this.file = inputData.contentMimetype;
            }
            if (inputData.description) {
                this.file = inputData.description;
            }
        }
    }
    return ZgwnuBonitaDocumentCreateInput;
}());
export { ZgwnuBonitaDocumentCreateInput };
//# sourceMappingURL=zgwnu-bonita-document-create-input.js.map