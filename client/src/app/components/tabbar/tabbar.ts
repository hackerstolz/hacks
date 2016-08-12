import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'tabbar',
    templateUrl: 'tabbar.html'
})
export class TabbarComponent {
    @Output('sidebarToggle') _sidebarToggleEmitter: EventEmitter = new EventEmitter();

    constructor() {
    }

    public toggleSidebar() {
        this._sidebarToggleEmitter.emit();
    }
}
