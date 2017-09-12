import { NgModule }     from '@angular/core'
import { HttpModule }   from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

import { ZgwnuBonitaConfigService } from './rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaBackendService } from './rest-api/zgwnu-bonita-backend.service'
import { ZgwnuBonitaAuthenticationService } from './authentication/zgwnu-bonita-authentication.service'
import { ZgwnuBonitaBpmProcessService } from './bpm/process/zgwnu-bonita-bpm-process.service'

@NgModule({
  imports: [
    HttpModule, 
    HttpClientModule,   
   ],
  providers: [
    ZgwnuBonitaConfigService, 
    ZgwnuBonitaBackendService, 
    ZgwnuBonitaAuthenticationService, 
    ZgwnuBonitaBpmProcessService, 
  ]
})
export class ZgwnuNgBonitaModule { }