import { NgModule }     from '@angular/core'
import { HttpModule }   from '@angular/http'

import { ZgwnuBonitaConfigService } from './rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaBackendService } from './rest-api/zgwnu-bonita-backend.service'
import { ZgwnuBonitaAuthenticationService } from './authentication/zgwnu-bonita-authentication.service'
import { ZgwnuBonitaBpmProcessService } from './bpm/process/zgwnu-bonita-bpm-process.service'

@NgModule({
  imports: [
    HttpModule,  
   ],
  providers: [
    ZgwnuBonitaConfigService, 
    ZgwnuBonitaBackendService, 
    ZgwnuBonitaAuthenticationService, 
    ZgwnuBonitaBpmProcessService, 
  ]
})
export class ZgwnuNgBonitaModule { }