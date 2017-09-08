import { Component, OnInit } from '@angular/core'
import { ZgwnuBonitaAuthenticationService } from '../../../zgwnu-ng-bonita/authentication/zgwnu-bonita-authentication.service'
import { ZgwnuBonitaCredentials }  from '../../../zgwnu-ng-bonita/authentication/zgwnu-bonita-credentials'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit { 

  public name = 'Angular'

  constructor(
    private authenticationService: ZgwnuBonitaAuthenticationService
  )
  {}

  ngOnInit() {
    this.authenticationService.login(new ZgwnuBonitaCredentials('onno.haldar', 'zgw'))

  }

}
