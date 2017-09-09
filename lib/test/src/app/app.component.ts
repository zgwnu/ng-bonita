import { Component, OnInit } from '@angular/core'

import { ZgwnuBonitaConfigService }  from './zgwnu-ng-bonita'


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit { 

  public name = 'Angular'

  constructor(
    private config: ZgwnuBonitaConfigService,
  )
  {}

  ngOnInit() {
    console.log(this.config)

  }

}
