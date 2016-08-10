import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard';
import {HackathonFormComponent} from '../hackathon/hackathonForm';

const appRoutes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'hackathon/create',
    component: HackathonFormComponent
}];

export const appRoutingProviders: any[] = [];

export const AppRoutes = RouterModule.forRoot(appRoutes);
