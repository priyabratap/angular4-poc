import { Injectable, EventEmitter } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()
export class PouchdbService {
	private isInstantiated: boolean;
	private db:any;
	private listener: EventEmitter<any> = new EventEmitter();
	constructor() {
		if(!this.isInstantiated) {
	            this.db = new PouchDB('http://localhost:5984/aaki');
	            this.isInstantiated = true;
	        }
		
		console.log("23434324",this.db);
		this.db.info().then(function (result) {
			console.log(result);
		}).catch(function (err) {
			console.log(err);
		});
	}
	public fetch() {
		return this.db.allDocs({include_docs: true});
	}

	public get(id: string) {
		return this.db.get(id);
	}
	public sync(remote: string) {
		let remoteDatabase = new PouchDB(remote);
		this.db.sync(remoteDatabase, {
		    live: true
		}).on('change', change => {
		    this.listener.emit(change);
		}).on('error', error => {
		    console.error(JSON.stringify(error));
		});
	}

	public getChangeListener() {
		return this.listener;
	}
}
