import { NgModule }     from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule }   from '@angular/http'

export { ZgwnuBonitaAuthenticationService } from './authentication/zgwnu-bonita-authentication.service'

@NgModule({
  imports: [
    CommonModule, 
    HttpModule, 
    ZgwnuBonitaAuthenticationService, 
   ],
  providers: [
    ZgwnuBonitaAuthenticationService, 
  ]
})
export class ZgwnuNgBonitaModule { }