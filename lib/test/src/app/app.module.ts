import { NgModule }             from '@angular/core'
import { BrowserModule }        from '@angular/platform-browser'

// test classes from dist module
import { ZgwnuNgBonitaModule } from '../../../../dist'

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
