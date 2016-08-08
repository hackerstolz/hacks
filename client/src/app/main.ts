import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent, AppRoutes} from './appComponent';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(AppComponent, [
    AppRoutes,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    HTTP_PROVIDERS
]);

