import { NgModule }             from '@angular/core'
import { BrowserModule }        from '@angular/platform-browser'
import { ZgwnuNgBonitaModule }  from '../../../zgwnu-ng-bonita/zgwnu-ng-bonita.module'

import { AppComponent }  from './app.component'

@NgModule({
  imports: [ 
    BrowserModule,
    ZgwnuNgBonitaModule,
   ],
  declarations: [ AppComponent ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
