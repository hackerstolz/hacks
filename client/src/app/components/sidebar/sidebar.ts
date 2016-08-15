import {Component, Input} from '@angular/core';

type User = {
    name: string,
    title: string,
    location: string
}

@Component({
    moduleId: __moduleName,
    selector: 'sidebar',
    templateUrl: 'sidebar.html'
})
export class SidebarComponent {
    private _user;

    constructor() {
        this.user = {
            name: 'Brendan G. Lim',
            title: 'Product Manager',
            location: 'San Mateo, CA'
        }
    }

    get user() {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

}
