"use strict";
/// <reference path="../../typings/index.d.ts" />
require('./polyfills');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var ApplicationModule_ngfactory_1 = require('./components/ApplicationModule.ngfactory');
require('rxjs/add/operator/toPromise');
// Enable Prod mode
// if (config.production) {
core_1.enableProdMode();
// }
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModuleFactory(ApplicationModule_ngfactory_1.ApplicationModuleNgFactory);
//# sourceMappingURL=main.js.map