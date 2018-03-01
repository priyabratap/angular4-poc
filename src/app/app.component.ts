import { Component } from '@angular/core';
//import { AppModule } from './app.module';

import { PouchdbService }   from './services/pouchdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMS POC';
  constructor(private pouchdb: PouchdbService){
	//console.log(this.AppModule.modulename);
  };

public ngOnInit() {
	/* put the code here for couchdb syncing*/
	this.pouchdb.sync("http://localhost:5984/aaki");
}


}
