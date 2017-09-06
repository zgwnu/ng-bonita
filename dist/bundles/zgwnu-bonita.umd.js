(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/http'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/map'), require('rxjs/Observable'), require('rxjs/add/observable/throw'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/http', 'rxjs/add/operator/catch', 'rxjs/add/operator/map', 'rxjs/Observable', 'rxjs/add/observable/throw', '@angular/router'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['zgwnu-bonita'] = {}),global.ng.core,global.ng.http,global.Rx.Observable,global.Rx.Observable,global.Rx,global.Rx.Observable,global.ng.router));
}(this, (function (exports,core,http,_catch,map,Observable,_throw,router) { 'use strict';

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

var ZgwnuBonitaResponse = /** @class */ (function () {
    function ZgwnuBonitaResponse() {
    }
    return ZgwnuBonitaResponse;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZgwnuBonitaErrorResponse = /** @class */ (function (_super) {
    __extends$1(ZgwnuBonitaErrorResponse, _super);
    function ZgwnuBonitaErrorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ZgwnuBonitaErrorResponse;
}(ZgwnuBonitaResponse));

// ZaakgerichtWerken.nu Bonita Rest Api Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=_rest-api
//
//
var ZgwnuBonitaRestApiService = /** @class */ (function () {
    function ZgwnuBonitaRestApiService() {
        this.mapping = new ZgwnuBonitaDataMapping();
    }
    ZgwnuBonitaRestApiService.prototype.mapSuccessResponse = function (res) {
        var successResponse = new ZgwnuBonitaResponse();
        successResponse.status = res.status;
        if (res.statusText)
            successResponse.statusText = res.statusText;
        return successResponse;
    };
    ZgwnuBonitaRestApiService.prototype.handleResponseError = function (error) {
        var errorResponse = new ZgwnuBonitaErrorResponse();
        if (error instanceof http.Response) {
            errorResponse.status = error.status;
            if (error.statusText)
                errorResponse.statusText = error.statusText;
            var body = error.json();
            errorResponse.exception = body.exception;
            errorResponse.message = body.message;
            errorResponse.explanations = body.explanations;
        }
        else {
            errorResponse.status = 0;
            errorResponse.statusText = error.message ? error.message : error.toString();
        }
        return Observable.Observable.throw(errorResponse);
    };
    ZgwnuBonitaRestApiService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaRestApiService.ctorParameters = function () { return []; };
    return ZgwnuBonitaRestApiService;
}());

var ZgwnuBonitaUrls = /** @class */ (function () {
    function ZgwnuBonitaUrls(hostUrl) {
        // Bonita Server Config Urls
        this._hostUrl = 'http://localhost:8080';
        // default bonita path configuration
        this.BASE_PATH = '/bonita';
        this.API_PATH = '/API';
        this.FILE_UPLOAD_PATH = '/portal/fileUpload';
        this.PROCESS_UPLOAD_PATH = '/portal/processUpload';
        this.ORGANIZATION_UPLOAD_PATH = '/portal/organizationUpload';
        this.ACTORS_UPLOAD_PATH = '/portal/actorsUpload';
        this.IMAGE_UPLOAD_PATH = '/portal/imageUpload';
        this.FORMS_DOCUMENT_IMAGE_PATH = '/portal/formsDocumentImage';
        if (hostUrl)
            this._hostUrl = hostUrl;
        this._baseUrl = this._hostUrl + this.BASE_PATH;
        this._apiUrl = this._baseUrl + this.API_PATH;
        this._fileUploadUrl = this._baseUrl + this.FILE_UPLOAD_PATH;
        this._processUploadUrl = this._baseUrl + this.PROCESS_UPLOAD_PATH;
        this._organizationUploadUrl = this._baseUrl + this.ORGANIZATION_UPLOAD_PATH;
        this._actorsUploadUrl = this._baseUrl + this.ACTORS_UPLOAD_PATH;
        this._imageUploadUrl = this._baseUrl + this.IMAGE_UPLOAD_PATH;
        this._formsDocumentImageUrl = this._baseUrl + this.FORMS_DOCUMENT_IMAGE_PATH;
    }
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "baseUrl", {
        get: function () {
            return this._baseUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "apiUrl", {
        get: function () {
            return this._apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "fileUploadUrl", {
        get: function () {
            return this._fileUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "processUploadUrl", {
        get: function () {
            return this._processUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "organizationUploadUrl", {
        get: function () {
            return this._organizationUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "actorsUploadUrl", {
        get: function () {
            return this._actorsUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "imageUploadUrl", {
        get: function () {
            return this._imageUploadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZgwnuBonitaUrls.prototype, "formsDocumentImageUrl", {
        get: function () {
            return this._formsDocumentImageUrl;
        },
        enumerable: true,
        configurable: true
    });
    return ZgwnuBonitaUrls;
}());

var ZgwnuBonitaConfigService = /** @class */ (function () {
    function ZgwnuBonitaConfigService(bonitaUrls) {
        this.bonitaUrls = bonitaUrls;
        // default zgwnu Business Data Model Package configuration
        this.businessDataModelPackage = 'com.zaakgerichtwerkennu.model';
        // rest api options
        this.bonitaSessionTokenKey = 'X-Bonita-API-Token';
        this.defaultHeaders = new http.Headers({ 'Content-Type': 'application/json' });
        this.options = new http.RequestOptions({ headers: this.defaultHeaders });
    }
    Object.defineProperty(ZgwnuBonitaConfigService.prototype, "session", {
        get: function () {
            return this._session;
        },
        set: function (session) {
            this._session = session;
            this.configSendOptions();
        },
        enumerable: true,
        configurable: true
    });
    ZgwnuBonitaConfigService.prototype.configSendOptions = function () {
        var defaultSendHeaders = new http.Headers({ 'Content-Type': 'application/json' });
        this.sendOptions = new http.RequestOptions({ headers: defaultSendHeaders });
        this.appendSessionOptions(this.sendOptions);
    };
    ZgwnuBonitaConfigService.prototype.appendSessionOptions = function (optionsRef) {
        if (this._session.token) {
            if (!optionsRef.headers) {
                optionsRef.headers = this.defaultHeaders;
            }
            optionsRef.headers.append(this.bonitaSessionTokenKey, this._session.token);
        }
    };
    ZgwnuBonitaConfigService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaConfigService.ctorParameters = function () { return [
        { type: ZgwnuBonitaUrls, },
    ]; };
    return ZgwnuBonitaConfigService;
}());

var ZgwnuSingleBusinessDataRefence = /** @class */ (function () {
    function ZgwnuSingleBusinessDataRefence(referenceData) {
        this.name = referenceData.name;
        this.type = referenceData.type;
        this.storageId = referenceData.storageId;
        this.storageId_string = referenceData.storageId_string;
    }
    return ZgwnuSingleBusinessDataRefence;
}());

var ZgwnuMultipleBusinessDataRefence = /** @class */ (function () {
    function ZgwnuMultipleBusinessDataRefence(referenceData) {
        this.name = referenceData.name;
        this.type = referenceData.type;
        this.storageIds = referenceData.storageIds;
        this.storageIds_string = referenceData.storageIds_string;
    }
    return ZgwnuMultipleBusinessDataRefence;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api Business Data Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bdm-api#
//
var ZgwnuBonitaBusinessDataService = /** @class */ (function (_super) {
    __extends(ZgwnuBonitaBusinessDataService, _super);
    function ZgwnuBonitaBusinessDataService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.resourcePath = '/bdm';
        _this.resourceUrl = configService.bonitaUrls.apiUrl + _this.resourcePath;
        return _this;
    }
    // Bonita Rest Api Business Data
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bdm-api#toc0
    //
    // Request URL template: ../API/bdm/businessData/:businessDataType/:persistenceId
    //
    ZgwnuBonitaBusinessDataService.prototype.getBusinessData = function (businessDataObjectType, persistenceId, mappingParm) {
        var mapping = this.getMapping(mappingParm);
        return this.http.get(this.buildGetRequestUrl(businessDataObjectType, persistenceId), this.configService.options)
            .map(mapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.buildGetRequestUrl = function (businessDataObjectType, persistenceId) {
        return this.resourceUrl + '/businessData/' +
            this.configService.businessDataModelPackage + '.' + businessDataObjectType +
            '/' + persistenceId.toString();
    };
    // Bonita Rest Api Business Data Query
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bdm-api#toc1
    //
    // Request URL template: ../API/bdm/businessData/_businessDataType_?q=_queryName_
    //                       &p=0&c=10&f=param=value
    //
    ZgwnuBonitaBusinessDataService.prototype.queryBusinessData = function (businessDataObjectType, queryParms, mappingParm) {
        var mapping = this.getMapping(mappingParm);
        return this.http.get(this.buildQueryRequestUrl(businessDataObjectType, queryParms), this.configService.options)
            .map(mapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.buildQueryRequestUrl = function (businessDataObjectType, queryParms) {
        return this.resourceUrl + '/businessData/' +
            this.configService.businessDataModelPackage + '.' + businessDataObjectType +
            '?' + queryParms.getUrlEncondedParms();
    };
    // Bonita Rest Api get Business Data from context
    // --------------------------------------------------------------------------
    //
    // based on http://documentation.bonitasoft.com/?page=bpm-api#toc6
    //
    ZgwnuBonitaBusinessDataService.prototype.getBusinessDataFromContext = function (businessDataContext, mappingParm) {
        var mapping = this.getMapping(mappingParm);
        return this.http.get(this.buildGetFromContextUrl(businessDataContext), this.configService.options)
            .map(mapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.buildGetFromContextUrl = function (businessDataContext) {
        return this.configService.bonitaUrls.baseUrl + '/' + businessDataContext.link;
    };
    ZgwnuBonitaBusinessDataService.prototype.getMapping = function (mappingParm) {
        if (mappingParm) {
            return mappingParm;
        }
        else {
            return this.mapping;
        }
    };
    // Bonita Rest Api get Business Data from context
    // --------------------------------------------------------------------------
    //    
    // base on http://documentation.bonitasoft.com/?page=bdm-api#toc2
    //
    ZgwnuBonitaBusinessDataService.prototype.getSingleBusinessDataReference = function (caseId, businessDataObjectType) {
        return this.getBusinessDataReference(caseId, businessDataObjectType)
            .map(this.mapSingleBusinessDataReference)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.mapSingleBusinessDataReference = function (res) {
        var dataReference = new ZgwnuSingleBusinessDataRefence(res.json());
        return dataReference;
    };
    ZgwnuBonitaBusinessDataService.prototype.getMultipleBusinessDataReference = function (caseId, businessDataObjectType) {
        return this.getBusinessDataReference(caseId, businessDataObjectType)
            .map(this.mapSingleBusinessDataReference)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBusinessDataService.prototype.mapMultipleBusinessDataReference = function (res) {
        var dataReference = new ZgwnuMultipleBusinessDataRefence(res.json());
        return dataReference;
    };
    ZgwnuBonitaBusinessDataService.prototype.getBusinessDataReference = function (caseId, businessDataObjectType) {
        return this.http.get(this.resourceUrl + '/businessDataReference/' + caseId + '/' + businessDataObjectType, this.configService.options);
    };
    ZgwnuBonitaBusinessDataService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBusinessDataService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBusinessDataService;
}(ZgwnuBonitaRestApiService));

var ZgwnuBonitaBusinessDataContext = /** @class */ (function () {
    function ZgwnuBonitaBusinessDataContext(businessDataRef) {
        this.name = businessDataRef.name;
        this.type = businessDataRef.type;
        this.link = businessDataRef.link;
        this.storageId = businessDataRef.storageId;
        this.storageId_string = businessDataRef.storageId_string;
    }
    return ZgwnuBonitaBusinessDataContext;
}());

var ZgwnuBonitaBusinessDataObject = /** @class */ (function () {
    function ZgwnuBonitaBusinessDataObject(objectData) {
        if (objectData) {
            if (objectData.persistenceId) {
                this.persistenceId = objectData.persistenceId;
            }
            if (objectData.persistenceId_string) {
                this.persistenceId_string = objectData.persistenceId_string;
            }
            if (objectData.persistenceVersion) {
                this.persistenceVersion = objectData.persistenceVersion;
            }
            if (objectData.persistenceVersion_string) {
                this.persistenceVersion_string = objectData.persistenceVersion_string;
            }
        }
    }
    return ZgwnuBonitaBusinessDataObject;
}());

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

var ZgwnuBonitaBpmTaskUpdateInput = /** @class */ (function () {
    function ZgwnuBonitaBpmTaskUpdateInput() {
    }
    return ZgwnuBonitaBpmTaskUpdateInput;
}());

var ZgwnuBonitaActivityDeployActor = /** @class */ (function () {
    function ZgwnuBonitaActivityDeployActor() {
    }
    return ZgwnuBonitaActivityDeployActor;
}());

var ZgwnuBonitaUtils = /** @class */ (function () {
    function ZgwnuBonitaUtils() {
    }
    ZgwnuBonitaUtils.prototype.getDateValue = function (bonitaDateValue) {
        return new Date(bonitaDateValue.substr(0, 10) + 'T' + bonitaDateValue.substr(11));
    };
    return ZgwnuBonitaUtils;
}());

var ZgwnuBonitaActivity = /** @class */ (function () {
    function ZgwnuBonitaActivity(activityData) {
        var utils = new ZgwnuBonitaUtils();
        this.id = activityData.id;
        this.type = activityData.type;
        this.name = activityData.name;
        this.displayName = activityData.displayName;
        this.description = activityData.description;
        this.displayDescription = activityData.displayDescription;
        this.state = activityData.state;
        this.reached_state_date = utils.getDateValue(activityData.reached_state_date);
        this.last_update_date = utils.getDateValue(activityData.last_update_date);
        this.dueDate = utils.getDateValue(activityData.dueDate);
        this.priority = activityData.priority;
        this.processId = activityData.processId;
        this.parentCaseId = activityData.parentCaseId;
        this.rootCaseId = activityData.rootCaseId;
        this.rootContainerId = activityData.rootContainerId;
        this.executedBy = activityData.executedBy;
        this.executedBySubstitute = activityData.executedBySubstitute;
        if (this.actorId instanceof ZgwnuBonitaActivityDeployActor) {
            this.actorId.id = activityData.actorId.id;
            this.actorId.process_id = activityData.actorId.process_id;
            this.actorId.description = activityData.actorId.description;
            this.actorId.name = activityData.actorId.name;
            this.actorId.displayName = activityData.actorId.displayName;
        }
        else {
            this.actorId = activityData.actorId;
        }
        this.assigned_id = activityData.assigned_id;
        if (activityData.assigned_date != '') {
            this.assigned_date = utils.getDateValue(activityData.assigned_date);
        }
    }
    return ZgwnuBonitaActivity;
}());

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZgwnuBonitaUserTask = /** @class */ (function (_super) {
    __extends$3(ZgwnuBonitaUserTask, _super);
    function ZgwnuBonitaUserTask(userTaskData) {
        return _super.call(this, userTaskData) || this;
    }
    return ZgwnuBonitaUserTask;
}(ZgwnuBonitaActivity));

var ZgwnuBonitaUserTaskMapping = /** @class */ (function () {
    function ZgwnuBonitaUserTaskMapping() {
    }
    ZgwnuBonitaUserTaskMapping.prototype.mapResponse = function (res) {
        var userTaskData = new ZgwnuBonitaUserTask(res.json());
        return userTaskData;
    };
    ZgwnuBonitaUserTaskMapping.prototype.mapResponseArray = function (res) {
        var userTaskDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            userTaskDataArray.push(new ZgwnuBonitaUserTask(body));
        }
        return userTaskDataArray;
    };
    return ZgwnuBonitaUserTaskMapping;
}());

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api BPM User Task Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc6
//
//
var ZgwnuBonitaBpmUserTaskService = /** @class */ (function (_super) {
    __extends$2(ZgwnuBonitaBpmUserTaskService, _super);
    function ZgwnuBonitaBpmUserTaskService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.USER_TASK_RESOURCE_PATH = '/bpm/userTask';
        // configure resource urls
        _this.userTaskResourceUrl = configService.bonitaUrls.apiUrl + _this.USER_TASK_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmUserTaskService.prototype.getUserTask = function (userTaskId) {
        var userTaskMapping = new ZgwnuBonitaUserTaskMapping();
        return this.http.get(this.userTaskResourceUrl + '/' + userTaskId, this.configService.options)
            .map(userTaskMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmUserTaskService.prototype.getUserTaskContext = function (userTaskId) {
        return this.http.get(this.userTaskResourceUrl + '/' + userTaskId + '/context', this.configService.options)
            .map(this.mapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmUserTaskService.prototype.assignUserTask = function (userTaskId, userId) {
        var body = new ZgwnuBonitaBpmTaskUpdateInput();
        if (userId) {
            // assign to specified user
            body.assigned_id = userId;
        }
        else {
            // assign to current logged user
            body.assigned_id = this.configService.session.user_id;
        }
        var putUrl = this.userTaskResourceUrl + '/' + userTaskId;
        return this.http.put(putUrl, body, this.configService.sendOptions)
            .map(this.mapSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmUserTaskService.prototype.executeUserTask = function (userTaskId, contractValues) {
        var postUrl = this.userTaskResourceUrl + '/' + userTaskId + '/execution';
        return this.http.post(postUrl, contractValues, this.configService.sendOptions)
            .map(this.mapSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmUserTaskService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmUserTaskService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBpmUserTaskService;
}(ZgwnuBonitaRestApiService));

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZgwnuBonitaHumanTask = /** @class */ (function (_super) {
    __extends$5(ZgwnuBonitaHumanTask, _super);
    function ZgwnuBonitaHumanTask(humanTaskData) {
        return _super.call(this, humanTaskData) || this;
    }
    return ZgwnuBonitaHumanTask;
}(ZgwnuBonitaActivity));

var ZgwnuBonitaHumanTaskMapping = /** @class */ (function () {
    function ZgwnuBonitaHumanTaskMapping() {
    }
    ZgwnuBonitaHumanTaskMapping.prototype.mapResponse = function (res) {
        var humanTaskData = new ZgwnuBonitaHumanTask(res.json());
        return humanTaskData;
    };
    ZgwnuBonitaHumanTaskMapping.prototype.mapResponseArray = function (res) {
        var humanTaskDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            humanTaskDataArray.push(new ZgwnuBonitaHumanTask(body));
        }
        return humanTaskDataArray;
    };
    return ZgwnuBonitaHumanTaskMapping;
}());

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api BPM Human Task Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc3
//
//
var ZgwnuBonitaBpmHumanTaskService = /** @class */ (function (_super) {
    __extends$4(ZgwnuBonitaBpmHumanTaskService, _super);
    function ZgwnuBonitaBpmHumanTaskService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.HUMAN_TASK_RESOURCE_PATH = '/bpm/humanTask';
        _this.humanTaskResourceUrl = configService.bonitaUrls.apiUrl + _this.HUMAN_TASK_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmHumanTaskService.prototype.searchHumanTasks = function (searchParms) {
        var humanTaskMapping = new ZgwnuBonitaHumanTaskMapping();
        return this.http.get(this.buildHumanTaskSearchRequest(searchParms), this.configService.options)
            .map(humanTaskMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmHumanTaskService.prototype.buildHumanTaskSearchRequest = function (searchParms) {
        return this.humanTaskResourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmHumanTaskService.prototype.getHumanTask = function (humanTaskId) {
        var humanTaskMapping = new ZgwnuBonitaHumanTaskMapping();
        return this.http.get(this.humanTaskResourceUrl + '/' + humanTaskId, this.configService.options)
            .map(humanTaskMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmHumanTaskService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmHumanTaskService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBpmHumanTaskService;
}(ZgwnuBonitaRestApiService));

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZgwnuBonitaTask = /** @class */ (function (_super) {
    __extends$7(ZgwnuBonitaTask, _super);
    function ZgwnuBonitaTask(taskData) {
        return _super.call(this, taskData) || this;
    }
    return ZgwnuBonitaTask;
}(ZgwnuBonitaActivity));

var ZgwnuBonitaTaskMapping = /** @class */ (function () {
    function ZgwnuBonitaTaskMapping() {
    }
    ZgwnuBonitaTaskMapping.prototype.mapResponse = function (res) {
        var taskData = new ZgwnuBonitaTask(res.json());
        return taskData;
    };
    ZgwnuBonitaTaskMapping.prototype.mapResponseArray = function (res) {
        var taskDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            taskDataArray.push(new ZgwnuBonitaTask(body));
        }
        return taskDataArray;
    };
    return ZgwnuBonitaTaskMapping;
}());

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api BPM Task Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc5
//
//
var ZgwnuBonitaBpmTaskService = /** @class */ (function (_super) {
    __extends$6(ZgwnuBonitaBpmTaskService, _super);
    function ZgwnuBonitaBpmTaskService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.TASK_RESOURCE_PATH = '/bpm/task';
        _this.taskResourceUrl = configService.bonitaUrls.apiUrl + _this.TASK_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmTaskService.prototype.searchTasks = function (searchParms) {
        var taskMapping = new ZgwnuBonitaTaskMapping();
        return this.http.get(this.buildTaskSearchRequest(searchParms), this.configService.options)
            .map(taskMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmTaskService.prototype.buildTaskSearchRequest = function (searchParms) {
        return this.taskResourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmTaskService.prototype.getTask = function (taskId) {
        var taskMapping = new ZgwnuBonitaTaskMapping();
        return this.http.get(this.taskResourceUrl + '/' + taskId, this.configService.options)
            .map(taskMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmTaskService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmTaskService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBpmTaskService;
}(ZgwnuBonitaRestApiService));

var ZgwnuBonitaActivityMapping = /** @class */ (function () {
    function ZgwnuBonitaActivityMapping() {
    }
    ZgwnuBonitaActivityMapping.prototype.mapResponse = function (res) {
        var activityData = new ZgwnuBonitaActivity(res.json());
        return activityData;
    };
    ZgwnuBonitaActivityMapping.prototype.mapResponseArray = function (res) {
        var activityDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            activityDataArray.push(new ZgwnuBonitaActivity(body));
        }
        return activityDataArray;
    };
    return ZgwnuBonitaActivityMapping;
}());

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api BPM Activity Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc1
//
//
var ZgwnuBonitaBpmActivityService = /** @class */ (function (_super) {
    __extends$8(ZgwnuBonitaBpmActivityService, _super);
    function ZgwnuBonitaBpmActivityService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.ACTIVITY_RESOURCE_PATH = '/bpm/activity';
        _this.activityResourceUrl = configService.bonitaUrls.apiUrl + _this.ACTIVITY_RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmActivityService.prototype.searchActivities = function (searchParms) {
        var activityMapping = new ZgwnuBonitaActivityMapping();
        return this.http.get(this.buildActivitySearchRequest(searchParms), this.configService.options)
            .map(activityMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmActivityService.prototype.buildActivitySearchRequest = function (searchParms) {
        return this.activityResourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmActivityService.prototype.getActivity = function (activityId) {
        var activityMapping = new ZgwnuBonitaActivityMapping();
        return this.http.get(this.activityResourceUrl + '/' + activityId, this.configService.options)
            .map(activityMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmActivityService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmActivityService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBpmActivityService;
}(ZgwnuBonitaRestApiService));

var ZgwnuBonitaCaseVariable = /** @class */ (function () {
    function ZgwnuBonitaCaseVariable(caseVariableData) {
        this.description = caseVariableData.description;
        this.name = caseVariableData.name;
        this.value = caseVariableData.value;
        this.case_id = caseVariableData.case_id;
        this.type = caseVariableData.type;
    }
    return ZgwnuBonitaCaseVariable;
}());

var ZgwnuBonitaCaseVariableMapping = /** @class */ (function () {
    function ZgwnuBonitaCaseVariableMapping() {
    }
    ZgwnuBonitaCaseVariableMapping.prototype.mapResponse = function (res) {
        var caseVariableData = new ZgwnuBonitaCaseVariable(res.json());
        return caseVariableData;
    };
    ZgwnuBonitaCaseVariableMapping.prototype.mapResponseArray = function (res) {
        var caseVariableDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            caseVariableDataArray.push(new ZgwnuBonitaCaseVariable(body));
        }
        return caseVariableDataArray;
    };
    return ZgwnuBonitaCaseVariableMapping;
}());

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api BPM Data Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc13
//
//
var ZgwnuBonitaBpmDataService = /** @class */ (function (_super) {
    __extends$9(ZgwnuBonitaBpmDataService, _super);
    function ZgwnuBonitaBpmDataService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.caseVariableResourcePath = '/bpm/caseVariable';
        // configure resource url
        _this.caseVariableResourceUrl = configService.bonitaUrls.apiUrl + _this.caseVariableResourcePath;
        return _this;
    }
    // CaseVariable
    //
    // based on http://documentation.bonitasoft.com/?page=bpm-api#toc15
    //
    //
    ZgwnuBonitaBpmDataService.prototype.getCaseVariable = function (caseId, variableName) {
        var caseVariableMapping = new ZgwnuBonitaCaseVariableMapping();
        return this.http.get(this.caseVariableResourceUrl + '/' + caseId + '/' + variableName, this.configService.options)
            .map(caseVariableMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmDataService.prototype.searchCaseVariables = function (searchParms) {
        var caseVariableMapping = new ZgwnuBonitaCaseVariableMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(caseVariableMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmDataService.prototype.buildSearchRequest = function (searchParms) {
        return this.caseVariableResourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmDataService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmDataService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBpmDataService;
}(ZgwnuBonitaRestApiService));

var ZgwnuBonitaDocument = /** @class */ (function () {
    function ZgwnuBonitaDocument(documentData) {
        var utils = new ZgwnuBonitaUtils();
        this.id = documentData.id;
        this.creationDate = utils.getDateValue(documentData.creationDate);
        this.author = documentData.author;
        this.index = documentData.index;
        this.contentMimetype = documentData.contentMimetype;
        this.caseId = documentData.caseId;
        this.contentStorageId = documentData.contentStorageId;
        this.isInternal = documentData.isInternal;
        this.description = documentData.description;
        this.name = documentData.name;
        this.fileName = documentData.fileName;
        this.submittedBy = documentData.submittedBy;
        this.url = documentData.url;
        this.version = documentData.version;
    }
    return ZgwnuBonitaDocument;
}());

var ZgwnuBonitaDocumentMapping = /** @class */ (function () {
    function ZgwnuBonitaDocumentMapping() {
    }
    ZgwnuBonitaDocumentMapping.prototype.mapResponse = function (res) {
        var documentData = new ZgwnuBonitaDocument(res.json());
        return documentData;
    };
    ZgwnuBonitaDocumentMapping.prototype.mapResponseArray = function (res) {
        var documentDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            documentDataArray.push(new ZgwnuBonitaDocument(body));
        }
        return documentDataArray;
    };
    return ZgwnuBonitaDocumentMapping;
}());

var __extends$10 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api BPM Case Document Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc17
//
//
var ZgwnuBonitaBpmCaseDocumentService = /** @class */ (function (_super) {
    __extends$10(ZgwnuBonitaBpmCaseDocumentService, _super);
    function ZgwnuBonitaBpmCaseDocumentService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.resourcePath = '/bpm/caseDocument';
        // configure resource urls
        _this.resourceUrl = configService.bonitaUrls.apiUrl + _this.resourcePath;
        return _this;
    }
    ZgwnuBonitaBpmCaseDocumentService.prototype.createDocument = function (documentCreateInput) {
        var documentMapping = new ZgwnuBonitaDocumentMapping();
        return this.http.post(this.resourceUrl, documentCreateInput, this.configService.sendOptions)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.updateDocument = function (documentId, documentUpdateInput) {
        var documentMapping = new ZgwnuBonitaDocumentMapping();
        return this.http.put(this.resourceUrl + '/' + documentId, documentUpdateInput, this.configService.sendOptions)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.getDocument = function (documentId) {
        var documentMapping = new ZgwnuBonitaDocumentMapping();
        return this.http.get(this.resourceUrl + '/' + documentId, this.configService.options)
            .map(documentMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.searchDocuments = function (searchParms) {
        var documentMapping = new ZgwnuBonitaDocumentMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(documentMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseDocumentService.prototype.buildSearchRequest = function (searchParms) {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmCaseDocumentService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmCaseDocumentService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBpmCaseDocumentService;
}(ZgwnuBonitaRestApiService));

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

var ZgwnuBonitaDocumentUpdateInput = /** @class */ (function () {
    function ZgwnuBonitaDocumentUpdateInput() {
    }
    return ZgwnuBonitaDocumentUpdateInput;
}());

var ZgwnuBonitaCase = /** @class */ (function () {
    function ZgwnuBonitaCase(caseData) {
        var utils = new ZgwnuBonitaUtils();
        this.id = caseData.id;
        this.end_date = utils.getDateValue(caseData.end_date);
        this.failedFlowNodes = caseData.failedFlowNodes;
        this.start = utils.getDateValue(caseData.start);
        this.activeFlowNodes = caseData.activeFlowNodes;
        this.state = caseData.state;
        this.rootCaseId = caseData.rootCaseId;
        this.started_by = caseData.started_by;
        this.processDefinitionId = caseData.processDefinitionId;
        this.last_update_date = utils.getDateValue(caseData.last_update_date);
        if (caseData.searchIndex1Label) {
            this.searchIndex1Label = caseData.searchIndex1Label;
        }
        if (caseData.searchIndex2Label) {
            this.searchIndex2Label = caseData.searchIndex2Label;
        }
        if (caseData.searchIndex3Label) {
            this.searchIndex3Label = caseData.searchIndex2Label;
        }
        if (caseData.searchIndex4Label) {
            this.searchIndex4Label = caseData.searchIndex3Label;
        }
        if (caseData.searchIndex5Label) {
            this.searchIndex5Label = caseData.searchIndex4Label;
        }
        if (caseData.searchIndex1Value) {
            this.searchIndex1Value = caseData.searchIndex1Value;
        }
        if (caseData.searchIndex2Value) {
            this.searchIndex2Value = caseData.searchIndex2Value;
        }
        if (caseData.searchIndex3Value) {
            this.searchIndex3Value = caseData.searchIndex3Value;
        }
        if (caseData.searchIndex4Value) {
            this.searchIndex4Value = caseData.searchIndex4Value;
        }
        if (caseData.searchIndex5Value) {
            this.searchIndex5Value = caseData.searchIndex5Value;
        }
    }
    return ZgwnuBonitaCase;
}());

var ZgwnuBonitaCaseMapping = /** @class */ (function () {
    function ZgwnuBonitaCaseMapping() {
    }
    ZgwnuBonitaCaseMapping.prototype.mapResponse = function (res) {
        var caseData = new ZgwnuBonitaCase(res.json());
        return caseData;
    };
    ZgwnuBonitaCaseMapping.prototype.mapResponseArray = function (res) {
        var caseDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            caseDataArray.push(new ZgwnuBonitaCase(body));
        }
        return caseDataArray;
    };
    return ZgwnuBonitaCaseMapping;
}());

var __extends$11 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api BPM Case (Process Instance) Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc23
//
//
var ZgwnuBonitaBpmCaseService = /** @class */ (function (_super) {
    __extends$11(ZgwnuBonitaBpmCaseService, _super);
    function ZgwnuBonitaBpmCaseService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.resourcePath = '/bpm/case';
        // configure resource urls
        _this.resourceUrl = configService.bonitaUrls.apiUrl + _this.resourcePath;
        return _this;
    }
    ZgwnuBonitaBpmCaseService.prototype.searchCases = function (searchParms) {
        var caseMapping = new ZgwnuBonitaCaseMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(caseMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseService.prototype.buildSearchRequest = function (searchParms) {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmCaseService.prototype.getCase = function (caseId) {
        var caseMapping = new ZgwnuBonitaCaseMapping();
        return this.http.get(this.resourceUrl + '/' + caseId, this.configService.options)
            .map(caseMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseService.prototype.getCaseContext = function (caseId) {
        return this.http.get(this.resourceUrl + '/' + caseId + '/context', this.configService.options)
            .map(this.mapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmCaseService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmCaseService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBpmCaseService;
}(ZgwnuBonitaRestApiService));

var ZgwnuBonitaProcessDefinition = /** @class */ (function () {
    function ZgwnuBonitaProcessDefinition(processDefinitionData) {
        var utils = new ZgwnuBonitaUtils();
        if (processDefinitionData) {
            this.id = processDefinitionData.id;
            this.icon = processDefinitionData.icon;
            this.displayDescription = processDefinitionData.displayDescription;
            this.deploymentDate = utils.getDateValue(processDefinitionData.deploymentDate);
            this.description = processDefinitionData.description;
            this.activationState = processDefinitionData.activationState;
            this.name = processDefinitionData.name;
            this.deployedBy = processDefinitionData.deployedBy;
            this.displayName = processDefinitionData.displayName;
            this.actorinitiatorid = processDefinitionData.actorinitiatorid;
            this.last_update_date = utils.getDateValue(processDefinitionData.last_update_date);
            this.configurationState = processDefinitionData.configurationState;
            this.version = processDefinitionData.version;
        }
    }
    return ZgwnuBonitaProcessDefinition;
}());

var ZgwnuBonitaProcessDefinitionMapping = /** @class */ (function () {
    function ZgwnuBonitaProcessDefinitionMapping() {
    }
    ZgwnuBonitaProcessDefinitionMapping.prototype.mapResponse = function (res) {
        console.log(res);
        var processDefinitionData = new ZgwnuBonitaProcessDefinition(res.json());
        return processDefinitionData;
    };
    ZgwnuBonitaProcessDefinitionMapping.prototype.mapResponseArray = function (res) {
        var processDefinitionDataArray = [];
        var bodyArray = res.json();
        for (var _i = 0, bodyArray_1 = bodyArray; _i < bodyArray_1.length; _i++) {
            var body = bodyArray_1[_i];
            processDefinitionDataArray.push(new ZgwnuBonitaProcessDefinition(body));
        }
        return processDefinitionDataArray;
    };
    return ZgwnuBonitaProcessDefinitionMapping;
}());

var __extends$13 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZgwnuBonitaCreateCaseSuccessResponse = /** @class */ (function (_super) {
    __extends$13(ZgwnuBonitaCreateCaseSuccessResponse, _super);
    function ZgwnuBonitaCreateCaseSuccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ZgwnuBonitaCreateCaseSuccessResponse;
}(ZgwnuBonitaResponse));

var __extends$14 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZgwnuBonitaDeployProcessDefinitionSuccessResponse = /** @class */ (function (_super) {
    __extends$14(ZgwnuBonitaDeployProcessDefinitionSuccessResponse, _super);
    function ZgwnuBonitaDeployProcessDefinitionSuccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ZgwnuBonitaDeployProcessDefinitionSuccessResponse;
}(ZgwnuBonitaResponse));

var __extends$15 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZgwnuBonitaProcessUpdateSuccessResponse = /** @class */ (function (_super) {
    __extends$15(ZgwnuBonitaProcessUpdateSuccessResponse, _super);
    function ZgwnuBonitaProcessUpdateSuccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ZgwnuBonitaProcessUpdateSuccessResponse;
}(ZgwnuBonitaResponse));

var __extends$12 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api BPM Process Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=bpm-api#toc28
//
//
var ZgwnuBonitaBpmProcessService = /** @class */ (function (_super) {
    __extends$12(ZgwnuBonitaBpmProcessService, _super);
    function ZgwnuBonitaBpmProcessService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.RESOURCE_PATH = '/bpm/process';
        // configure resource urls
        _this.resourceUrl = configService.bonitaUrls.apiUrl + _this.RESOURCE_PATH;
        return _this;
    }
    ZgwnuBonitaBpmProcessService.prototype.searchProcessDefinitions = function (searchParms) {
        var processDefinitionMapping = new ZgwnuBonitaProcessDefinitionMapping();
        return this.http.get(this.buildSearchRequest(searchParms), this.configService.options)
            .map(processDefinitionMapping.mapResponseArray)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.buildSearchRequest = function (searchParms) {
        return this.resourceUrl + '?' + searchParms.getUrlEncondedParms();
    };
    ZgwnuBonitaBpmProcessService.prototype.getProcessDefinition = function (processDefinitionId) {
        var processDefinitionMapping = new ZgwnuBonitaProcessDefinitionMapping();
        return this.http.get(this.resourceUrl + '/' + processDefinitionId, this.configService.options)
            .map(processDefinitionMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    // Start a process using an instantiation contract
    //
    // based on: http://documentation.bonitasoft.com/?page=bpm-api#toc23
    //
    // Post URL template: ../API/bpm/process/:processId/instantiation
    //
    ZgwnuBonitaBpmProcessService.prototype.createCase = function (processId, contractValues) {
        var postUrl = this.resourceUrl + '/' + processId + '/instantiation';
        return this.http.post(postUrl, contractValues, this.configService.sendOptions)
            .map(this.mapCreateCaseSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.mapCreateCaseSuccessResponse = function (res) {
        var successResponse = new ZgwnuBonitaCreateCaseSuccessResponse();
        successResponse.status = res.status;
        if (res.statusText)
            successResponse.statusText = res.statusText;
        successResponse.caseId = res.json().caseId;
        return successResponse;
    };
    // Deploy a process definition
    //
    // based on: http://documentation.bonitasoft.com/?page=bpm-api#toc28
    //
    // Post URL template: ../API/bpm/process
    //
    ZgwnuBonitaBpmProcessService.prototype.deployProcessDefinition = function (processUploadResponse) {
        var requestPayload = { "fileupload": processUploadResponse.tempPath };
        return this.http.post(this.resourceUrl, requestPayload, this.configService.sendOptions)
            .map(this.mapDeployProcessDefinitionSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.mapDeployProcessDefinitionSuccessResponse = function (res) {
        var utils = new ZgwnuBonitaUtils();
        var successResponse = new ZgwnuBonitaDeployProcessDefinitionSuccessResponse();
        successResponse.status = res.status;
        if (res.statusText)
            successResponse.statusText = res.statusText;
        var body = res.json();
        successResponse.id = body.id;
        successResponse.deploymentDate = utils.getDateValue(body.deploymentDate);
        successResponse.description = body.description;
        successResponse.activationState = body.activationState;
        successResponse.name = body.name;
        successResponse.displayName = body.displayName;
        successResponse.actorinitiatorid = body.actorinitiatorid;
        successResponse.last_update_date = utils.getDateValue(body.last_update_date);
        successResponse.configurationState = body.configurationState;
        successResponse.version = body.version;
        return successResponse;
    };
    ZgwnuBonitaBpmProcessService.prototype.updateProcessDefinition = function (processDefinitionId, updateInput) {
        return this.http.put(this.resourceUrl + '/' + processDefinitionId, updateInput, this.configService.sendOptions)
            .map(this.mapUpdateProcessDefinitionUpdateSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaBpmProcessService.prototype.mapUpdateProcessDefinitionUpdateSuccessResponse = function (res) {
        var updateRes = new ZgwnuBonitaProcessUpdateSuccessResponse();
        updateRes.status = res.status;
        if (res.statusText)
            updateRes.statusText = res.statusText;
        return updateRes;
    };
    ZgwnuBonitaBpmProcessService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaBpmProcessService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaBpmProcessService;
}(ZgwnuBonitaRestApiService));

var ZgwnuBonitaProcessUpdateInput = /** @class */ (function () {
    function ZgwnuBonitaProcessUpdateInput() {
    }
    return ZgwnuBonitaProcessUpdateInput;
}());

var ZgwnuBonitaSession = /** @class */ (function () {
    function ZgwnuBonitaSession(sessionData, headerData) {
        this.user_id = sessionData.user_id;
        this.user_name = sessionData.user_name;
        this.session_id = sessionData.session_id;
        this.conf = sessionData.conf;
        this.is_technical_user = (sessionData.is_technical_user == 'true');
        this.version = sessionData.version;
        if (sessionData.tenant) {
            this.tenant = sessionData.tenant;
        }
        if (headerData) {
            var headers = headerData.toJSON();
            console.log(headers);
            this.token = headers['X-Bonita-API-Token'][0];
        }
    }
    return ZgwnuBonitaSession;
}());

var ZgwnuBonitaSessionMapping = /** @class */ (function () {
    function ZgwnuBonitaSessionMapping() {
    }
    ZgwnuBonitaSessionMapping.prototype.mapResponse = function (res) {
        var body = res.json();
        var headers;
        if (res.headers != null) {
            headers = res.headers;
        }
        var sessionData = new ZgwnuBonitaSession(body, headers);
        return sessionData;
    };
    ZgwnuBonitaSessionMapping.prototype.mapResponseArray = function (res) {
        return this.mapResponse(res);
    };
    return ZgwnuBonitaSessionMapping;
}());

var __extends$16 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api Authentication Service
// --------------------------------------------------------------------------
//
// based on http://documentation.bonitasoft.com/?page=rest-api-overview#toc2
//
//
var ZgwnuBonitaAuthenticationService = /** @class */ (function (_super) {
    __extends$16(ZgwnuBonitaAuthenticationService, _super);
    function ZgwnuBonitaAuthenticationService(configService, http$$1, router$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        _this.router = router$$1;
        _this.LOGIN_SERVICE_PATH = '/loginservice';
        _this.CURRENT_SESSION_RESOURCE_PATH = '/system/session/unusedid';
        // initialize authentication using current session
        _this.getCurrentSession()
            .subscribe(function (currentSession) { return configService.session = currentSession; });
        return _this;
    }
    ZgwnuBonitaAuthenticationService.prototype.executeLogin = function (creds) {
        var credsUrlEncoded = 'username=' + creds.username + '&password=' + creds.password + '&redirect=false';
        var headers = new http.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http.RequestOptions({ headers: headers });
        var postUrl = this.configService.bonitaUrls.baseUrl + this.LOGIN_SERVICE_PATH;
        return this.http.post(postUrl, credsUrlEncoded, options)
            .map(this.mapSuccessResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaAuthenticationService.prototype.getCurrentSession = function () {
        var sessionMapping = new ZgwnuBonitaSessionMapping();
        return this.http.get(this.configService.bonitaUrls.apiUrl + this.CURRENT_SESSION_RESOURCE_PATH, this.configService.options)
            .map(sessionMapping.mapResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaAuthenticationService.prototype.login = function (creds) {
        var _this = this;
        this.executeLogin(creds)
            .subscribe(function (successResponse) {
            _this.successResponse = successResponse;
            _this.getCurrentSession()
                .subscribe(function (session) {
                if (creds.username == session.user_name) {
                    _this.configService.session = session;
                    if (creds.navigateTo) {
                        _this.router.navigate([creds.navigateTo]);
                    }
                }
            }, function (errorResponse) { return _this.errorResponse = errorResponse; });
        }, function (errorResponse) { return _this.errorResponse = errorResponse; });
    };
    ZgwnuBonitaAuthenticationService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaAuthenticationService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
        { type: router.Router, },
    ]; };
    return ZgwnuBonitaAuthenticationService;
}(ZgwnuBonitaRestApiService));

var ZgwnuBonitaCredentials = /** @class */ (function () {
    function ZgwnuBonitaCredentials(username, password, navigateTo, secret) {
        this.username = username;
        this.password = password;
        this.navigateTo = navigateTo;
        this.secret = secret;
    }
    return ZgwnuBonitaCredentials;
}());

var __extends$18 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZgwnuBonitaFileUploadResponse = /** @class */ (function (_super) {
    __extends$18(ZgwnuBonitaFileUploadResponse, _super);
    function ZgwnuBonitaFileUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ZgwnuBonitaFileUploadResponse;
}(ZgwnuBonitaResponse));

var __extends$17 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ZaakgerichtWerken.nu Bonita Rest Api File Upload Service
// --------------------------------------------------------------------------
//
// based on: http://documentation.bonitasoft.com/?page=manage-files-using-upload-servlet-and-rest-api
//         : http://stackoverflow.com/questions/36352405/file-upload-with-angular2-to-rest-api
//
//
// To-Do:
// (1) map uploadFile Success Response to BonitaContractInputFile
//     including File Content-Type etc...
//
var ZgwnuBonitaFileUploadService = /** @class */ (function (_super) {
    __extends$17(ZgwnuBonitaFileUploadService, _super);
    function ZgwnuBonitaFileUploadService(configService, http$$1) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.http = http$$1;
        return _this;
    }
    ZgwnuBonitaFileUploadService.prototype.uploadFile = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.fileUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadProcess = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.processUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadOrganization = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.organizationUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadActors = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.actorsUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.uploadImage = function (file, fileId) {
        return this.servletUploadFile(this.configService.bonitaUrls.imageUploadUrl, file, fileId);
    };
    ZgwnuBonitaFileUploadService.prototype.servletUploadFile = function (servletUrl, file, fileId) {
        var formData = new FormData();
        formData.append(fileId, file, file.name);
        var uploadHeaders = new http.Headers();
        var uploadOptions = new http.RequestOptions({ headers: uploadHeaders });
        this.configService.appendSessionOptions(uploadOptions);
        return this.http.post(servletUrl, formData, uploadOptions)
            .map(this.mapFileUploadResponse)
            .catch(this.handleResponseError);
    };
    ZgwnuBonitaFileUploadService.prototype.mapFileUploadResponse = function (res) {
        var fileUploadResponse = new ZgwnuBonitaFileUploadResponse();
        fileUploadResponse.status = res.status;
        fileUploadResponse.statusText = res.statusText;
        fileUploadResponse.tempPath = res._body;
        return fileUploadResponse;
    };
    ZgwnuBonitaFileUploadService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ZgwnuBonitaFileUploadService.ctorParameters = function () { return [
        { type: ZgwnuBonitaConfigService, },
        { type: http.Http, },
    ]; };
    return ZgwnuBonitaFileUploadService;
}(ZgwnuBonitaRestApiService));

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

var ZgwnuBonitaModule = /** @class */ (function () {
    function ZgwnuBonitaModule() {
    }
    ZgwnuBonitaModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [
                        ZgwnuBonitaConfigService,
                        ZgwnuBonitaAuthenticationService,
                        ZgwnuBonitaBpmProcessService,
                        ZgwnuBonitaBpmCaseService,
                        ZgwnuBonitaBpmCaseDocumentService,
                        ZgwnuBonitaBpmDataService,
                        ZgwnuBonitaBpmActivityService,
                        ZgwnuBonitaBpmActivityService,
                        ZgwnuBonitaBpmTaskService,
                        ZgwnuBonitaBpmHumanTaskService,
                        ZgwnuBonitaBpmUserTaskService,
                        ZgwnuBonitaBusinessDataService,
                        ZgwnuBonitaFileUploadService,
                    ]
                },] },
    ];
    /** @nocollapse */
    ZgwnuBonitaModule.ctorParameters = function () { return []; };
    return ZgwnuBonitaModule;
}());

exports.ZgwnuBonitaModule = ZgwnuBonitaModule;
exports.ZgwnuBonitaSession = ZgwnuBonitaSession;
exports.ZgwnuBonitaCredentials = ZgwnuBonitaCredentials;
exports.ZgwnuBonitaCreateCaseSuccessResponse = ZgwnuBonitaCreateCaseSuccessResponse;
exports.ZgwnuBonitaDeployProcessDefinitionSuccessResponse = ZgwnuBonitaDeployProcessDefinitionSuccessResponse;
exports.ZgwnuBonitaProcessDefinition = ZgwnuBonitaProcessDefinition;
exports.ZgwnuBonitaProcessUpdateInput = ZgwnuBonitaProcessUpdateInput;
exports.ZgwnuBonitaProcessUpdateSuccessResponse = ZgwnuBonitaProcessUpdateSuccessResponse;
exports.ZgwnuBonitaCase = ZgwnuBonitaCase;
exports.ZgwnuBonitaDocument = ZgwnuBonitaDocument;
exports.ZgwnuBonitaDocumentCreateInput = ZgwnuBonitaDocumentCreateInput;
exports.ZgwnuBonitaDocumentUpdateInput = ZgwnuBonitaDocumentUpdateInput;
exports.ZgwnuBonitaCaseVariable = ZgwnuBonitaCaseVariable;
exports.ZgwnuBonitaActivity = ZgwnuBonitaActivity;
exports.ZgwnuBonitaActivityDeployActor = ZgwnuBonitaActivityDeployActor;
exports.ZgwnuBonitaTask = ZgwnuBonitaTask;
exports.ZgwnuBonitaHumanTask = ZgwnuBonitaHumanTask;
exports.ZgwnuBonitaUserTask = ZgwnuBonitaUserTask;
exports.ZgwnuBonitaBusinessDataContext = ZgwnuBonitaBusinessDataContext;
exports.ZgwnuBonitaBusinessDataObject = ZgwnuBonitaBusinessDataObject;
exports.ZgwnuBonitaBusinessDataQueryParms = ZgwnuBonitaBusinessDataQueryParms;
exports.ZgwnuBonitaContractInputFile = ZgwnuBonitaContractInputFile;
exports.ZgwnuBonitaFileUploadResponse = ZgwnuBonitaFileUploadResponse;

Object.defineProperty(exports, '__esModule', { value: true });

})));
