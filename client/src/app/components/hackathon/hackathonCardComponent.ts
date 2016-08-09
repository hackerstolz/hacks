import {Component, Input} from '@angular/core';
import {LocationService} from '../../services/locationService';

@Component({
    selector: 'hackathon-card',
    templateUrl: 'app/components/hackathon/hackathonCard.html'
})
export class HackathonCardComponent {
    @Input('data') hackathon: any;

    constructor(private _locationService: LocationService) {

    }

    public getGMapsString(address: string): string {
        return this._locationService.getGMapsString(address);
    }

    public getDistance(address: string): string {
        return this._locationService.getDistance(address);
    }
}
