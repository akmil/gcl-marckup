"use strict";
/// <reference path="../../typings/index.d.ts" />
require('./polyfills');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var ApplicationModule_1 = require('./components/ApplicationModule');
require('rxjs/add/operator/toPromise');
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(ApplicationModule_1.ApplicationModule);
//# sourceMappingURL=main.dev.js.map