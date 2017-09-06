var ZgwnuBonitaContractInputFile = /** @class */ (function () {
    function ZgwnuBonitaContractInputFile(fileInput, responseInput) {
        if (fileInput) {
            this.filename = fileInput.name;
            this.contentType = fileInput.type;
        }
        if (responseInput) {
            this.tempPath = responseInput.tempPath;
        }
    }
    return ZgwnuBonitaContractInputFile;
}());
export { ZgwnuBonitaContractInputFile };
//# sourceMappingURL=zgwnu-bonita-contract-input-file.js.map