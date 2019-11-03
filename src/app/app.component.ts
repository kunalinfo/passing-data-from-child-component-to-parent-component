import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message(value){
     document.write("<p>Parent Component: "+value+"</p>");
  }
}
