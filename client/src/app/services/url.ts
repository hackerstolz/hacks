import {Injectable} from '@angular/core';
import {Configuration} from '../modules/app/configuration';

@Injectable()
export class UrlService {
    constructor(private _configuration: Configuration) {

    }

    public getEndpoint(action: string): string {
        if (!action) {
            throw new Error('Parameter action is invalid.');
        }

        return this._configuration.apiUrl + (action[0] !== '/' && '/' || '') + action;
    }
}
