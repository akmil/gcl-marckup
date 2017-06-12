"use strict";
require('./polyfills');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var ApplicationModule_1 = require('./components/ApplicationModule');
require('rxjs/add/operator/toPromise');
require('../styles/main.scss');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(ApplicationModule_1.ApplicationModule);
//# sourceMappingURL=main.jit.js.map