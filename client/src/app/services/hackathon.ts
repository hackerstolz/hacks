import {Injectable} from '@angular/core';
import {HackathonModel} from '../models/hackathon';
import {Http} from '@angular/http';

const hackathonsMock: HackathonModel[] = [
	{ id: 0, name: 'First Hackathon' },
	{ id: 1, name: 'Woop Woop Awesome' },
	{ id: 2, name: 'ML Meetup HD' }
];

@Injectable()
export class HackathonService {
    constructor(private _http: Http) {

    }

	getHackathons() {
		return this._http.get('http://localhost:3000/hackathons');
	}
}

