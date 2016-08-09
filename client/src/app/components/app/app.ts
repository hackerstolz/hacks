import {Component} from '@angular/core';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard';
import {HackathonService} from '../../services/hackathon';
import {SidebarComponent} from '../sidebar/sidebar';
import {LocationService} from '../../services/location';
import {TitlebarComponent} from '../titlebar/titlebar';

const routes: RouterConfig = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: 'dashboard',
    component: DashboardComponent
}];

@Component({
    moduleId: __moduleName,
    selector: 'app-root',
    directives: [ROUTER_DIRECTIVES, SidebarComponent, TitlebarComponent],
    providers: [HackathonService, LocationService],
    templateUrl: 'app.html'
})
export class AppComponent {
    constructor() {

    }
}
;

export const AppRoutes = [
    provideRouter(routes)
];

