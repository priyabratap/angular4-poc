import { Injectable } from '@angular/core';
import { PouchdbService }   from './pouchdb.service';
@Injectable()
export class ElearningService {
	constructor(private pouchdb: PouchdbService) { }

	ngOnInit(){
	}

	getElearnings(): any{
		let data:any = [];
		return this.pouchdb.fetch().then(function(doc){
			let i:number = 0;
			for (var key in doc.rows) {
				if (doc.rows.hasOwnProperty(key)) {
					data.push(doc.rows[key].doc);
				}
				i++;
			}
			return data;
		});

		/*return [
			{
				"name":"card1",
				"id":123
			},{
				"name":"card2",
				"id":245
			}
		];*/
	}
}
