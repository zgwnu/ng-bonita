import { NgModule }     from '@angular/core'
import { HttpModule }   from '@angular/http'

import { ZgwnuBonitaConfigService } from './rest-api/zgwnu-bonita-config.service'
import { ZgwnuBonitaAuthenticationService } from './authentication/zgwnu-bonita-authentication.service'

@NgModule({
  imports: [
    HttpModule,  
   ],
  providers: [
    ZgwnuBonitaConfigService, 
    ZgwnuBonitaAuthenticationService, 
  ]
})
export class ZgwnuNgBonitaModule { }