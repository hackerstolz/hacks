import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {HackathonModel} from '../../models/hackathonModel';
import {HackathonService} from '../../services/hackathonService';

@Component({
	selector: 'dashboard',
    directives: [ROUTER_DIRECTIVES],
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
		this._service.getHackathons().then(data => this.hackathons = data);
	}

	onHackathon(hackathon: HackathonModel) {
		this._router.navigate(['hackathons', hackathon.id]);
	}

}
