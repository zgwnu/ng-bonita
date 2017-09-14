import { NgModule }     from '@angular/core'
import { HttpModule }   from '@angular/http' // Refactoring => HttpClientModule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

// Refactoring => HttpClientModule
import { ZgwnuBonitaBackendService } from './rest-api/zgwnu-bonita-backend.service'
import { ZgwnuBonitaBpmProcessService } from './bpm/process/zgwnu-bonita-bpm-process.service'

// Imports Generic Module Services
import { ZgwnuBonitaConfigService } from './rest-api/zgwnu-bonita-config.service'

// Imports HttpClient based Services
import { ZgwnuBonitaClientInterceptorService } from './rest-api/zgwnu-bonita-client-interceptor.service'
import { ZgwnuBonitaResponseMapService } from './rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaSessionService } from './rest-api/zgwnu-bonita-session.service'
import { ZgwnuBonitaClientAuthenticationService } from './authentication/zgwnu-bonita-client-authentication.service'

@NgModule({
  imports: [
    HttpModule, // Refactoring => HttpClientModule
    HttpClientModule,   
   ],
  providers: [
    // Provide Generic Module Services
    ZgwnuBonitaConfigService, 

    // Refactoring => HttpClientModule
    ZgwnuBonitaBpmProcessService, 
    ZgwnuBonitaBackendService,
    
    // Provide HttpClient based Services
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZgwnuBonitaClientInterceptorService,
      multi: true,
    },  
    ZgwnuBonitaResponseMapService,  
    ZgwnuBonitaSessionService, 
    ZgwnuBonitaClientAuthenticationService,  
  ]
})
export class ZgwnuNgBonitaModule { }