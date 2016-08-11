import {Component} from '@angular/core';
import {HackathonModel} from '../../models/hackathon';

@Component({
    moduleId: __moduleName,
    selector: 'hackathon-form',
    templateUrl: 'hackathonForm.html'
})
export class HackathonFormComponent {
    private hackathon: HackathonModel;

    constructor() {
        this.hackathon = new HackathonModel(null, 'testathon');
    }
}
