import { NgModule }           from '@angular/core'
import { BrowserModule }      from '@angular/platform-browser'
import { ZgwnuNgBonitaModule } from '../ng-bonita/src'

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
