import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './modules/app/app';
import 'rxjs/Rx';

platformBrowserDynamic().bootstrapModule(AppModule);
