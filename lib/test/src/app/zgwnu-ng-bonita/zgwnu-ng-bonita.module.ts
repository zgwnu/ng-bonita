import { NgModule }     from '@angular/core'
import { HttpModule }   from '@angular/http'

import { ZgwnuBonitaConfigService } from './rest-api/zgwnu-bonita-config.service'

@NgModule({
  imports: [
    HttpModule,  
   ],
  providers: [
    ZgwnuBonitaConfigService, 
  ]
})
export class ZgwnuNgBonitaModule { }