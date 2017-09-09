import { NgModule }     from '@angular/core'
import { HttpModule }   from '@angular/http'

import { ZgwnuBonitaConfigService } from './rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaAuthenticationService } from './authentication/zgwnu-bonita-authentication.service'
import { ZgwnuBonitaBackendService } from './rest-api/zgwnu-bonita-backend.service'

@NgModule({
  imports: [
    HttpModule,  
   ],
  providers: [
    ZgwnuBonitaConfigService, 
    ZgwnuBonitaBackendService, 
    ZgwnuBonitaAuthenticationService, 
  ]
})
export class ZgwnuNgBonitaModule { }