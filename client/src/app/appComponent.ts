import {Component} from '@angular/core';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboardComponent';
import {HackathonService} from './services/hackathonService';
import {SidebarComponent} from './components/sidebar/sidebarComponent';

const routes: RouterConfig = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: 'dashboard',
    component: DashboardComponent
}];

@Component({
    selector: 'app-root',
    directives: [ROUTER_DIRECTIVES, SidebarComponent],
    providers: [HackathonService],
    template: `<sidebar></sidebar>
               <router-outlet></router-outlet>`
})
export class AppComponent {
    constructor() {

    }
};

export const AppRoutes = [
    provideRouter(routes)
];

