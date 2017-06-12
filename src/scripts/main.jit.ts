import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationModule } from './components/ApplicationModule';
import 'rxjs/add/operator/toPromise';
import '../styles/main.scss'

platformBrowserDynamic().bootstrapModule(ApplicationModule);
