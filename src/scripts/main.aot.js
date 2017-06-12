"use strict";
require('./polyfills');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
//noinspection TypeScriptCheckImport
var ngFactory = require('./ApplicationModule.ngfactory');
var ApplicationModuleNgFactory = ngFactory.AppModuleNgFactory;
require('rxjs/add/operator/toPromise');
core_1.enableProdMode();
platform_browser_1.platformBrowser().bootstrapModuleFactory(ApplicationModuleNgFactory);
//# sourceMappingURL=main.aot.js.map