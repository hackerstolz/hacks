import {Component, Input} from '@angular/core';
import {LocationService} from '../../services/location';

@Component({
    moduleId: __moduleName,
    selector: 'hackathon-card',
    templateUrl: 'hackathonCard.html'
})
export class HackathonCardComponent {
    @Input('data') hackathon: any;

    constructor(private _locationService: LocationService) {

    }

    ngOnInit() {
        this.hackathon.distance = `${Math.floor(Math.random()*1000)/10}km`;
        this.hackathon.date = new Date(+this.hackathon.unixStartTime);
        this.hackathon.type = this.getTypeFromTime(+this.hackathon.unixStartTime, +this.hackathon.unixEndTime);
    }

    public getTypeFromTime(start: number, end: number): string {
        return `${parseInt((end - start) / 86400000)}-day hackathon`;
    }

    public getGMapsString(address: string): string {
        return this._locationService.getGMapsString(address);
    }
}
