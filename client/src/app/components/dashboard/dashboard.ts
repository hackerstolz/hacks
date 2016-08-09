import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {HackathonModel} from '../../models/hackathon';
import {HackathonService} from '../../services/hackathon';
import {HackathonCardComponent} from '../hackathon/hackathonCardComponent';
import {LocationService, Location} from '../../services/location';

@Component({
    moduleId: __moduleName,
	selector: 'dashboard',
    directives: [ROUTER_DIRECTIVES, HackathonCardComponent],
	templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
	public hackathons: HackathonModel[] = [];

	constructor(
		private _router: Router,
		private _hackathonService: HackathonService,
        private _locationService: LocationService
	) {

	}

	ngOnInit() {
		this._hackathonService.getHackathons()
            .map(res => res.json())
            .toPromise()
            .then(data => this.hackathons = data);

        navigator.geolocation.getCurrentPosition((position) => {
            this._locationService.location = <Location>{ lat: position.coords.latitude, lon: position.coords.longitude };
        });
	}
}