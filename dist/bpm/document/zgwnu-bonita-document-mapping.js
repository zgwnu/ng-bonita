"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zgwnu_bonita_document_1 = require("./zgwnu-bonita-document");
var ZgwnuBonitaDocumentMapping = /** @class */ (function () {
    function ZgwnuBonitaDocumentMapping() {
    }
    ZgwnuBonitaDocumentMapping.prototype.mapResponse = function (res) {
        var documentData = new zgwnu_bonita_document_1.ZgwnuBonitaDocument(res.json());
        return documentData;
    };
    ZgwnuBonitaDocumentMapping.prototype.mapResponseArray = function (res) {
        var documentDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            documentDataArray.push(new zgwnu_bonita_document_1.ZgwnuBonitaDocument(body));
        }
        return documentDataArray;
    };
    return ZgwnuBonitaDocumentMapping;
}());
exports.ZgwnuBonitaDocumentMapping = ZgwnuBonitaDocumentMapping;
//# sourceMappingURL=zgwnu-bonita-document-mapping.js.map