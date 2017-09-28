# @zgwnu/ng-bonita
Angular Bonita Rest Api Services developed ZGW NU to create BPM application examples. 

# New
All Services are Refactored to Angular HttpClient Module (@angular/common/http).

# Requirements
* Angular 4.3.6 or 4.4.x
* Bonita BPM Community 7.4.2 (or higher, not tested on Commercial Licensed versions)

# Install
## NPM
__npm install @zgwnu/ng-bonita --save__

__Minimum Required Angular Packages__
* @angular/core
* @angular/common
* _and all packages you use for you're devevelopment config (JIT, AOT, CLI, ..etc.)_

__To use with JIT (Just In Time) Development you have to add the following definitions to "system.config.js"__ 
* '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
* '@zgwnu/ng-bonita': 'npm:@zgwnu/ng-bonita/bundles/zgwnu-ng-bonita.umd.js'

# Content
All the Angular Services are based on the bonita Rest Api Documentation. See for additional info how to use the Rest Api https://documentation.bonitasoft.com/?page=_rest-api

## rest-api
All basic Bonita Rest Api classes and settings that will be (re)used.
## authentication
Basic Bonita BPM Rest Api login and session functionality.  
  
## bpm
Bonita BPM Services
### bpm / activity
Bonita BPM Activity functionality.
### bpm / case
Bonita BPM Case (process instance info, context) functionality.
### bpm / data
Bonita BPM Data level functionality.
### bpm / document
Bonita BPM Case Document (document create, search, get) functionality.
### bpm / human-task
Bonita BPM Human Task functionality.
### bpm / user-task
Bonita BPM User Task functionality.
_assignTask_ and _executeTask_ gives an error due to Angular Bug (HttpClient POST 'Http failure during parsing' error for valid json https://github.com/angular/angular/issues/19266)
### bpm / process
Bonita BPM Process (info and instantiation) functionality.
## bdm
Functionality to retrieve Business Data.
## file-upload
Functionality to upload files to the Bonita server.
_added progress indicator functionality_
