import {Component, Input} from '@angular/core';

@Component({
    selector: 'hackathon-card',
    templateUrl: 'app/components/hackathon/hackathonCard.html'
})
export class HackathonCardComponent {
    @Input('data') hackathon: any;

    constructor() {

    }

    public getGMapsString(address: string): string {
        return 'http://maps.google.com/?daddr=' + address.replace(',', '').replace(' ', '+');
    }
}
