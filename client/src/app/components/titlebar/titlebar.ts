import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'titlebar',
    templateUrl: 'titlebar.html'
})
export class TitlebarComponent {
    @Output('sidebarToggle') _sidebarToggleEmitter: EventEmitter = new EventEmitter();

    constructor() {
    }

    public toggleSidebar() {
        this._sidebarToggleEmitter.emit();
    }
}
