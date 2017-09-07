import { Component, OnInit } from '@angular/core'
import { ZgwnuBonitaAuthenticationService, ZgwnuBonitaCredentials } from '../ng-bonita/src'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  providers: [ ZgwnuBonitaAuthenticationService ],
})
export class AppComponent implements OnInit { 

  public name = 'Angular'

  constructor(
    private authenticationService: ZgwnuBonitaAuthenticationService,
  )
  {}

  ngOnInit() {
  //  let creds: ZgwnuBonitaCredentials = new ZgwnuBonitaCredentials('onno.haldar', 'zgw')

    
  }

}
