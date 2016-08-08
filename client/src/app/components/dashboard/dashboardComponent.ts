import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {HackathonModel} from '../../models/hackathonModel';
import {HackathonService} from '../../services/hackathonService';
import {HackathonCardComponent} from '../hackathon/hackathonCardComponent';

@Component({
	selector: 'dashboard',
    directives: [ROUTER_DIRECTIVES, HackathonCardComponent],
	templateUrl: 'app/components/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit {

	hackathons: HackathonModel[] = [];

	constructor(
		private _router: Router,
		private _service: HackathonService
	) {

	}

	ngOnInit() {
		this._service.getHackathons()
            .map(res => res.json())
            .toPromise()
            .then(data => this.hackathons = data);
	}

	onHackathon(hackathon: HackathonModel) {
		this._router.navigate(['hackathons', hackathon.id]);
	}

}
