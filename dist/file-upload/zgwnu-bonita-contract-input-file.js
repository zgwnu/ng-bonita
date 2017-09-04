"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.ZgwnuBonitaContractInputFile = ZgwnuBonitaContractInputFile;
//# sourceMappingURL=zgwnu-bonita-contract-input-file.js.map