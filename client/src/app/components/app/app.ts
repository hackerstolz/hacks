import {Component} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'app-root',
    templateUrl: 'app.html'
})
export class AppComponent {
    private _isSidebarVisible: boolean = false;

    constructor() {

    }

    sidebarToggle() {
        this._isSidebarVisible = !this._isSidebarVisible;
    }

    get sidebarToggleState(): boolean {
        return this._isSidebarVisible;
    }
}
