import {Injectable} from '@angular/core';
import {HackathonModel} from '../models/hackathon';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {UrlService} from './url';

@Injectable()
export class HackathonService {
    constructor(private _http: Http, private _url: UrlService) {

    }

	getHackathons(): Observable<any> {
		return this._http.get(this._url.getEndpoint('hackathons'));
	}

	getHackathon(id: number): Observable<any> {
        return this._http.get(this._url.getEndpoint(`hackathon/${id}`));
    }

	createHackathon(hackathon: HackathonModel): Observable<any> {
	    return this._http.post(this._url.getEndpoint('hackathon'), hackathon.serialize());
    }

	updateHackathon(hackathon: HackathonModel): Observable<any> {
	    return this._http.put(this._url.getEndpoint(`hackathon/${hackathon.id}`), hackathon.serialize());
    }
}

