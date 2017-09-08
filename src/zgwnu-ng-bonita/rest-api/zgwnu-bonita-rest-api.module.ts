import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'

import { ZgwnuBonitaConfigService } from './zgwnu-bonita-config.service'
import { ZgwnuBonitaRestApiService } from './zgwnu-bonita-rest-api.service'
 
@NgModule({
  imports: [ 
    CommonModule,
    HttpModule, 
    ZgwnuBonitaConfigService, 
  ],
  providers: [
    ZgwnuBonitaConfigService, 
  ]
 })
export class ZgwnuBonitaRestApiModule { }