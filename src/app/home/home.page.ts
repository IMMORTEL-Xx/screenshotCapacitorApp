import { Component } from '@angular/core';
import { Screenshot } from 'capacitor-screenshot';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  screenshot(){
    Screenshot.take().then((ret: { base64: string }) => {
      console.log(ret.base64); // or `data:image/png;base64,${ret.base64}`
  });
  }
}
