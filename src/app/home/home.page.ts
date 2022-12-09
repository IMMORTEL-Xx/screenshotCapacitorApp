import { Component } from '@angular/core';
import { Screenshot } from 'capacitor-screenshot';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageCode: string =  "ooooooooooooooo"
  constructor() {}

  takeScreenshot(){
    Screenshot.take().then((ret: { base64: string }) => {
      console.log("daccoordd")
      this.imageCode = ret.base64;
      console.log(ret.base64); // or `data:image/png;base64,${ret.base64}`
  });
  }
}
