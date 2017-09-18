import { NgModule }     from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

// Imports Generic Module Services
import { ZgwnuBonitaConfigService } from './rest-api/zgwnu-bonita-config.service'

// Imports HttpClient based Services
import { ZgwnuBonitaClientInterceptorService } from './rest-api/zgwnu-bonita-client-interceptor.service'
import { ZgwnuBonitaResponseMapService } from './rest-api/zgwnu-bonita-response-map.service'
import { ZgwnuBonitaSessionService } from './rest-api/zgwnu-bonita-session.service'
import { ZgwnuBonitaAuthenticationService } from './authentication/zgwnu-bonita-authentication.service'
import { ZgwnuBonitaBpmProcessService } from './bpm/process/zgwnu-bonita-bpm-process.service'
import { ZgwnuBonitaBpmCaseService } from './bpm/case/zgwnu-bonita-bpm-case.service'
import { ZgwnuBonitaBpmActivityService } from './bpm/activity/zgwnu-bonita-bpm-activity.service'

@NgModule({
  imports: [
    HttpClientModule,   
   ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZgwnuBonitaClientInterceptorService,
      multi: true,
    },  
    ZgwnuBonitaConfigService,  
    ZgwnuBonitaResponseMapService,  
    ZgwnuBonitaSessionService, 
    ZgwnuBonitaAuthenticationService,  
    ZgwnuBonitaBpmProcessService,  
    ZgwnuBonitaBpmCaseService,  
    ZgwnuBonitaBpmActivityService,  
  ]
})
export class ZgwnuNgBonitaModule { }