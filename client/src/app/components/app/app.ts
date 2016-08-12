import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
    moduleId: __moduleName,
    selector: 'app-root',
    templateUrl: 'app.html'
})
export class AppComponent {
    private _isSidebarVisible: boolean = false;

    constructor(private _router: Router) {
        _router.events.subscribe((event) => {
            if(event instanceof NavigationEnd && this._isSidebarVisible) {
                this.sidebarToggle();
            }
        });
    }

    sidebarToggle() {
        this._isSidebarVisible = !this._isSidebarVisible;
    }

    get sidebarToggleState(): boolean {
        return this._isSidebarVisible;
    }
}
