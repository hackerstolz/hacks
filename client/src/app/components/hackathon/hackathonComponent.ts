import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {HackathonModel} from '../../models/hackathonModel';
import {HackathonService} from '../../services/hackathonService';

@Component({
	selector: 'hackathon',
	templateUrl: 'app/components/hackathon.html'
})
export class HackathonComponent implements OnInit {

	@Input() hackathon: HackathonModel;

	constructor(private _router: Router, private _service: HackathonService, private _route: ActivatedRoute) {

	}

    ngOnInit() {
		let id = +this._route.params['id'];
		this._service.getHackathon(id).then(data => this.hackathon = data);
	}

	onDashboard() {
		this._router.navigate(['dashboard']);
	}

};

