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
        this.hackathon = new HackathonModel(this._hackathon.id,
            this._hackathon.title,
            this._hackathon.host,
            this._hackathon.location,
            this._hackathon.description,
            this._hackathon.unixStartTime,
            this._hackathon.unixEndTime);
    }

    public getGMapsString(address: string): string {
        return this._locationService.getGMapsString(address);
    }
}
