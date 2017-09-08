import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'

import { ZgwnuBonitaConfigService } from './zgwnu-bonita-config.service'
 
@NgModule({
  imports: [ 
    CommonModule,
    HttpModule, 
    ZgwnuBonitaConfigService, 
    ZgwnuBonitaRestApiService, 
  ],
  providers: [
    ZgwnuBonitaConfigService, 
  ]
 })
export class ZgwnuBonitaRestApiModule { }