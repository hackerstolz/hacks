import {Component, Input} from '@angular/core';
import {LocationService} from '../../services/location';
import {HackathonModel} from '../../models/hackathon';

@Component({
    moduleId: __moduleName,
    selector: 'hackathon-card',
    templateUrl: 'hackathonCard.html'
})
export class HackathonCardComponent {
    @Input('data') _hackathon: any;

    public hackathon: HackathonModel;

    constructor(private _locationService: LocationService) {
    }

    ngOnInit() {
        if(this._hackathon instanceof HackathonModel) {
            this.hackathon = this._hackathon;
        } else {
            this.hackathon = new HackathonModel(this._hackathon.id,
                this._hackathon.title,
                this._hackathon.host,
                this._hackathon.location,
                this._hackathon.description,
                this._hackathon.unixStartTime,
                this._hackathon.unixEndTime,
                this._hackathon.published);
        }
    }

    public getGMapsString(address: string): string {
        return this._locationService.getGMapsString(address);
    }
}
