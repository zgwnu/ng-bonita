import { Component, OnInit } from '@angular/core'

import { ZgwnuBonitaConfigService, ZgwnuBonitaAuthenticationService, 
  ZgwnuBonitaCredentials }  from './zgwnu-ng-bonita'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit { 

  public name = 'Angular'

  constructor(
    private configService: ZgwnuBonitaConfigService,
    private authenticationService: ZgwnuBonitaAuthenticationService,
  )
  {}

  ngOnInit() {
    console.log(this.configService)
    console.log(this.authenticationService)
    this.authenticationService.login(new ZgwnuBonitaCredentials('onno.haldar', 'zgw'))
      .subscribe(
        response => {
          console.log(response)
          this.authenticationService.getSession()
            .subscribe(
              session => console.log(session),
              errorResponse => console.log(errorResponse)
            )
        },
        errorResponse => console.log(errorResponse)
      )
  }

}
