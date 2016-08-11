import {Injectable} from '@angular/core';
import {HackathonModel} from '../models/hackathon';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class HackathonService {
    constructor(private _http: Http) {

    }

	getHackathons(): Observable<any> {
		return this._http.get(`http://${window.location.hostname}:3000/hackathons`);
	}

	getHackathon(id: number): Observable<any> {
        return this._http.get(`http://${window.location.hostname}:3000/hackathon/${id}`);
    }

	createHackathon(hackathon: HackathonModel): Observable<any> {
	    return this._http.post(`http://${window.location.hostname}:3000/hackathon`, hackathon.serialize());
    }

	updateHackathon(hackathon: HackathonModel): Observable<any> {
	    return this._http.put(`http://${window.location.hostname}:3000/hackathon/${hackathon.id}`, hackathon.serialize());
    }
}

