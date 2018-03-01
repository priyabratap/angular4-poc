import { Component } from '@angular/core';
//import { AppModule } from './app.module';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'LMS POC';
  constructor(){
	//console.log(this.AppModule.modulename);
  };


}
