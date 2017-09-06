var ZgwnuBonitaDataMapping = /** @class */ (function () {
    function ZgwnuBonitaDataMapping() {
    }
    ZgwnuBonitaDataMapping.prototype.mapResponseArray = function (res) {
        var dataArray = res.json();
        return dataArray || [];
    };
    ZgwnuBonitaDataMapping.prototype.mapResponse = function (res) {
        var dataObject = res.json();
        return dataObject || {};
    };
    return ZgwnuBonitaDataMapping;
}());
export { ZgwnuBonitaDataMapping };
//# sourceMappingURL=zgwnu-bonita-data-mapping.js.map