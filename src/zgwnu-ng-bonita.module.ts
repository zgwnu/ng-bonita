import { NgModule }     from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule }   from '@angular/http'

import { ZgwnuBonitaAuthenticationService } from './authentication/zgwnu-bonita-authentication.service'

@NgModule({
  imports: [
    CommonModule, 
    HttpModule,  
   ],
  providers: [
    ZgwnuBonitaAuthenticationService, 
  ]
})
export class ZgwnuNgBonitaModule { }