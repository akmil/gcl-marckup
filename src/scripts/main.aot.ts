import './polyfills';
import { platformBrowser } from '@angular/platform-browser'
import { enableProdMode } from '@angular/core'

//noinspection TypeScriptCheckImport
let ngFactory = require('./ApplicationModule.ngfactory');
let ApplicationModuleNgFactory = ngFactory.AppModuleNgFactory;

import 'rxjs/add/operator/toPromise';

enableProdMode();

platformBrowser().bootstrapModuleFactory(ApplicationModuleNgFactory);
