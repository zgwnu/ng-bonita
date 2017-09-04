"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ZaakgerichtWerken.nu Bonita Rest Api Business Data Query Parameters
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bdm-api#toc1
//
// Request URL template: ../API/bdm/businessData/_businessDataType_?q=_queryName_
//                       &p=0&c=10&f=param=value
//
var ZgwnuBonitaBusinessDataQueryParms = /** @class */ (function () {
    function ZgwnuBonitaBusinessDataQueryParms(queryName, page, count, parameterValues) {
        this.queryName = queryName;
        this.page = page;
        this.count = count;
        this.parameterValues = parameterValues;
    }
    ZgwnuBonitaBusinessDataQueryParms.prototype.getUrlEncondedParms = function () {
        var buildParms;
        // q=queryName - the query name
        buildParms = '&q=' + this.queryName;
        // p: index of the page to display
        buildParms = buildParms + '&p=' + String(this.page);
        // c: the maximum number of results in the page
        buildParms = buildParms + '&c=' + String(this.count);
        // f=parameter=value - sets the parameter value according to business data query parameters 
        //             defined in Bonita BPM Studio For a Boolean parameter, 
        //             the accepted values are true or false.
        if (this.parameterValues != undefined) {
            for (var _i = 0, _a = this.parameterValues; _i < _a.length; _i++) {
                var value = _a[_i];
                buildParms = buildParms + '&f=' + encodeURIComponent(value);
            }
        }
        // return spaces '+' encoded
        var urlEncodedParms = buildParms.replace(/%20/g, '+');
        return urlEncodedParms;
    };
    return ZgwnuBonitaBusinessDataQueryParms;
}());
exports.ZgwnuBonitaBusinessDataQueryParms = ZgwnuBonitaBusinessDataQueryParms;
//# sourceMappingURL=zgwnu-bonita-business-data-query-parms.js.map