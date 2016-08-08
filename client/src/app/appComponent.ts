import {Component} from '@angular/core';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboardComponent';
import {HackathonComponent} from './components/hackathon/hackathonComponent';
import {NavigationComponent} from './components/navigation/navigationComponent';
import {HackathonService} from './services/hackathonService';

const routes: RouterConfig = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'hackathons/:id',
    component: HackathonComponent
}];

// XXX: Hier rendert er die navi nicht mehr bei /dashboard und bei /hackathons

@Component({
    selector: 'app-root',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    providers: [HackathonService],
    template: `<navigation></navigation>
               <router-outlet></router-outlet>`,
    styles: [`:host { display: flex; font: normal 16px "Source Sans Pro"; min-height: 100vh; }`]
})
export class AppComponent {
    constructor() {

    }
};

export const AppRoutes = [
    provideRouter(routes)
];

