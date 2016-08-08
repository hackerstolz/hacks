import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent, AppRoutes} from './appComponent';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
    AppRoutes,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]);

