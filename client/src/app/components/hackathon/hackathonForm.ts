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

    constructor(private _hackathonService: HackathonService, private _router: Router) {
        this.hackathon = new HackathonModel();
    }

    onSubmit() {
        this._hackathonService.createHackathon(this.hackathon)
            .subscribe((res) => {
                if(res.status === 200) {
                    this._router.navigateByUrl('/dashboard');
                }
            });
    }
}
