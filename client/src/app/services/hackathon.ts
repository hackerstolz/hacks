import {Injectable} from '@angular/core';
import {HackathonModel} from '../models/hackathon';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class HackathonService {
    constructor(private _http: Http) {

    }

	getHackathons(): Observable<any> {
		return this._http.get('http://localhost:3000/hackathons');
	}

	createHackathon(hackathon: HackathonModel): Observable<any> {
	    return this._http.post('http://localhost:3000/hackathon', hackathon.serialize());
    }
}

