import { NgModule }     from '@angular/core'
import { HttpModule }   from '@angular/http'

import { ZgwnuBonitaAuthenticationService } from './authentication/zgwnu-bonita-authentication.service'

@NgModule({
  imports: [
    HttpModule,  
   ],
  providers: [
    ZgwnuBonitaAuthenticationService, 
  ]
})
export class ZgwnuNgBonitaModule { }