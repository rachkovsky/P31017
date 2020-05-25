import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  frameworkList: Array<any> = [
    {id: 1, name: 'angular'},
    {id: 2, name: 'react'},
    {id: 3, name: 'vue'},
  ]
}
