import {Component} from '@angular/core';
import {HackathonModel} from '../../models/hackathon';
import {HackathonService} from '../../services/hackathon';
import {Router, ActivatedRoute} from '@angular/router';
import {OnInit} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'hackathon-form',
    templateUrl: 'hackathonForm.html'
})
export class HackathonFormComponent implements OnInit {
    private hackathon: HackathonModel;
    private _submitted: boolean = false;

    constructor(private _hackathonService: HackathonService, private _router: Router, private _route: ActivatedRoute) {
        this.hackathon = new HackathonModel();
    }

    ngOnInit() {
        this._route.params.subscribe((params) => {
            let id = +params['id'];
            this._hackathonService.getHackathon(id)
                .map(res => res.json())
                .subscribe(data => {
                    let hackathon = data[0];
                    this.hackathon = new HackathonModel(hackathon.id,
                        hackathon.title,
                        hackathon.host,
                        hackathon.location,
                        hackathon.description,
                        hackathon.unixStartTime,
                        hackathon.unixEndTime,
                        hackathon.published);
                });
        });
    }

    onSubmit() {
        this._submitted = true;

        let action;

        if (!!this.hackathon.id) {
            action = this._hackathonService.updateHackathon(this.hackathon);
        } else {
            action = this._hackathonService.createHackathon(this.hackathon);
        }

        action.subscribe((res) => {
            if (res.status === 200) {
                this._router.navigateByUrl('/dashboard');
            }
        }, (err) => {
            console.log(err);
            this._submitted = false;
        });

    }

    get submitted(): boolean {
        return this._submitted;
    }
}
