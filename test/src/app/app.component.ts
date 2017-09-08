import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit { 

  public name = 'Angular'

  constructor(
  )
  {}

  ngOnInit() {
  //  let creds: ZgwnuBonitaCredentials = new ZgwnuBonitaCredentials('onno.haldar', 'zgw')

  }

}
