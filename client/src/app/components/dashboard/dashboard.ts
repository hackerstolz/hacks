import {Component, OnInit} from '@angular/core';
import {HackathonModel} from '../../models/hackathon';
import {HackathonService} from '../../services/hackathon';
import {LocationService, Location} from '../../services/location';
import {HackathonCardComponent} from '../hackathon/hackathonCard';

@Component({
    moduleId: __moduleName,
	selector: 'dashboard',
	templateUrl: 'dashboard.html',
    directives: [HackathonCardComponent]
})
export class DashboardComponent implements OnInit {
	public hackathons: HackathonModel[] = [];

	constructor(
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
