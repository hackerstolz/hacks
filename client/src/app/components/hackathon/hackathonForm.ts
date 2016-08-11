import {Component} from '@angular/core';
import {HackathonModel} from '../../models/hackathon';
import {HackathonService} from '../../services/hackathon';
import {Router} from '@angular/router';

@Component({
    moduleId: __moduleName,
    selector: 'hackathon-form',
    templateUrl: 'hackathonForm.html'
})
export class HackathonFormComponent {
    private hackathon: HackathonModel;
    private _submitted: boolean = false;

    constructor(private _hackathonService: HackathonService, private _router: Router) {
        this.hackathon = new HackathonModel();
    }

    onSubmit() {
        this._submitted = true;
        this._hackathonService.createHackathon(this.hackathon)
            .subscribe((res) => {
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
