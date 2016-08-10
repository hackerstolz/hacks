import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard';

const appRoutes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}];

export const AppRoutes = RouterModule.forRoot(appRoutes);
