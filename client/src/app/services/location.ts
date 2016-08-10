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

    public getDistance(address: string): string {
        // TODO: implement Google Maps Distance Matrix API here
    }

    public getGMapsString(address: string): string {
        return 'http://maps.google.com/?daddr=' + address.replace(',', '').replace(' ', '+');
    }
}
