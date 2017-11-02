# @zgwnu/ng-bonita
Angular Bonita Rest Api Services developed ZGW NU to create BPM application examples.  
  
See example at https://github.com/zgwnu/test-ng-bonita how to use this module.

# Release Notes
## 1.0.4-alpha-1
* All Services are Refactored to Angular HttpClient Module (@angular/common/http).
## 1.0.4-beta-2
* Fix Issue1: https://github.com/zgwnu/ng-bonita/issues/1
## 1.0.4-beta-2
* Minor change default Bonita Api Urls are now based current Host

# Requirements
* Angular 4.2.4 or higher
* Bonita BPM Community 7.4.2 (or higher, not tested on Commercial Licensed versions)

# Install
## NPM
__npm install @zgwnu/ng-bonita --save__

__Minimum Required Angular Packages__
* @angular/core
* @angular/common
* _and all packages you use for you're devevelopment config (JIT, AOT, CLI, ..etc.)_

## Angular JIT Development
__To use with JIT (Just In Time) Development you have to add the following definitions to "system.config.js"__ 
* '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
* '@zgwnu/ng-bonita': 'npm:@zgwnu/ng-bonita/bundles/zgwnu-ng-bonita.umd.js'

# Contents
Angular Services based on the bonita Rest Api Documentation. See for additional info how to use the Rest Api https://documentation.bonitasoft.com/?page=_rest-api

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
### bpm / process
Bonita BPM Process (info and instantiation) functionality.
## bdm
Functionality to retrieve Business Data.
## file-upload
Functionality to upload files to the Bonita server.
_added progress indicator functionality_
