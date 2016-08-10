import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './modules/app/app';

/*bootstrap(AppComponent, [
    AppRoutes,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    HTTP_PROVIDERS
]);*/

platformBrowserDynamic().bootstrapModule(AppModule);
