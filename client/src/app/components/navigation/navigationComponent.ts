import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

type User = {
    name: string,
    title: string,
    location: string
}

@Component({
    selector: 'navigation',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/navigation/navigation.html',
    styleUrls: [ 'app/components/navigation/navigation.css' ]
})
export class NavigationComponent {

    private _user;

    constructor() {
        this.user = {
            name: 'Manuel Rauber',
            title: 'Chief Hacker in Command',
            location: 'Karlsruhe, DE'
        }
    }

    get user() {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

}
