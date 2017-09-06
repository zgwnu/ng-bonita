// Bonita Rest Api Search Parameters
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc13
//
// Request URL template: .../API/resource?p={page}&c={count}&o={order}
//                       &s={query}&f={filter_name}={filter_value}&f=...
//
var ZgwnuBonitaSearchParms = /** @class */ (function () {
    function ZgwnuBonitaSearchParms(page, count, order, query, filters, deploys) {
        this.page = page;
        this.count = count;
        this.order = order;
        this.query = query;
        this.filters = filters;
        this.deploys = deploys;
    }
    ZgwnuBonitaSearchParms.prototype.getUrlEncondedParms = function () {
        var buildParms;
        // p: index of the page to display
        buildParms = 'p=' + String(this.page);
        // c: maximum number of elements to retrieve
        buildParms = buildParms + '&c=' + String(this.count);
        // o: order of presentation of values in response: 
        //    must be either attributeName ASC or attributeName DESC.
        if (this.order) {
            buildParms = buildParms + '&o=' + encodeURIComponent(this.order);
        }
        // s: search on name or search indexes. 
        //    If word-based search is disabled, s=Valid returns 
        //    matches containing the string "valid" at the start of the attribute value
        if (this.query) {
            buildParms = buildParms + '&s=' + encodeURIComponent(this.query);
        }
        // f: list of filters, specified as attributeName=attributeValue. 
        //    To filter on more than one attribute, specify an f parameters for each attribute.
        if (this.filters) {
            for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
                var filter = _a[_i];
                buildParms = buildParms + '&f=' + encodeURIComponent(filter);
            }
        }
        // d: on some resources, in GET methods the d (deploy) URL query parameter can be used to extend the response objects. 
        //    The value of this parameter consists of an attribute for which you want to make an extended request (called a deploy) 
        //    and retrieve attributes of a linked resource.
        //    This means that instead of retrieving the ID or a parent or referenced resource, you can retrieve the full object.
        if (this.deploys) {
            for (var _b = 0, _c = this.deploys; _b < _c.length; _b++) {
                var deploy = _c[_b];
                buildParms = buildParms + '&d=' + encodeURIComponent(deploy);
            }
        }
        // return spaces '+' encoded
        var urlEncodedParms = buildParms.replace(/%20/g, '+');
        return urlEncodedParms;
    };
    return ZgwnuBonitaSearchParms;
}());
export { ZgwnuBonitaSearchParms };
//# sourceMappingURL=zgwnu-bonita-search-parms.js.map