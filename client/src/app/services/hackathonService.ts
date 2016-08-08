import {Injectable} from '@angular/core';
import {HackathonModel} from '../models/hackathonModel';

const HACKATHONS: HackathonModel[] = [
	{ id: 0, name: 'First Hackathon' },
	{ id: 1, name: 'Woop Woop Awesome' },
	{ id: 2, name: 'ML Meetup HD' }
];

@Injectable()
export class HackathonService {

	getHackathons() {
		return Promise.resolve(HACKATHONS);
	}

	getHackathon(id: number) {
		return Promise.resolve(HACKATHONS).then(data => data.filter(hackathon => hackathon.id === id)[0]);
	}

};

