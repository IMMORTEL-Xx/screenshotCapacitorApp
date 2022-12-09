import { Component } from '@angular/core';
import { Screenshot } from 'capacitor-screenshot';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    
  }
  screenshot(){
    Screenshot.take().then((ret: { base64: string }) => {
      console.log(ret.base64); // or `data:image/png;base64,${ret.base64}`
  });
  }
}
