# @zgwnu/ng-bonita
Angular Bonita Rest Api Services developed ZGW NU to create BPM application examples. 

# Requirements
* Angular 4.3.6 or 4.4.x
* Bonita BPM Community 7.4.2 (or higher, not tested on Commercial Licensed versions)

# Install
## NPM
__npm install @zgwnu/ng-bonita --save__

# Content
All the Angular Services are based on the bonita Rest Api Documentation. See for additional info how to use the Rest Api https://documentation.bonitasoft.com/?page=_rest-api

## rest-api
All basic Bonita Rest Api classes and settings that will be (re)used.
## authentication
Basic Bonita BPM Rest Api login and session functionality.  
  
_the following services are refactored to Angular HttpClient (1st alpha release) _
  
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
_assignTask and executeTask gives an error due to Angular Bug (HttpClient POST 'Http failure during parsing' error for valid json https://github.com/angular/angular/issues/19266)
### bpm / process (NOT WORKING AT THIS MOMENT)
Bonita BPM Process (info and instantiation) functionality.
## bdm (NOT WORKING AT THIS MOMENT)
Functionality to retrieve Business Data.
## file-upload (NOT WORKING AT THIS MOMENT)
Functionality to upload files to the Bonita server.
