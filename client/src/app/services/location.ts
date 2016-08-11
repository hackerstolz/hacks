import {Injectable} from '@angular/core';

export interface Location {
    lat: string;
    lon: string;
}

@Injectable()
export class LocationService {
    private _location: Location;

    get location(): Location {
        return this._location;
    }

    set location(locationObj: Location) {
        this._location = locationObj;
    }

    public getGMapsString(address: string): string {
        if(!address) {
            return;
        }
        return 'http://maps.google.com/?daddr=' + address.replace(',', '').replace(' ', '+');
    }
}
