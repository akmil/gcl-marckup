"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LocalStorageService = (function () {
    function LocalStorageService() {
        // TODO: Create localStorage interface
        // TODO: Set default local storage
        this._localStorage = {};
        this._localStorageKey = 'gcl.com.';
    }
    Object.defineProperty(LocalStorageService.prototype, "localStorage", {
        get: function () {
            for (var index = 0; index < localStorage.length; index++) {
                var key = localStorage.key(index);
                var value = void 0;
                try {
                    value = JSON.parse(localStorage.getItem(key));
                }
                catch (e) {
                    value = localStorage.getItem(key);
                }
                key = key.replace(this._localStorageKey, '');
                this._localStorage[key] = value;
                console.log(this._localStorage);
            }
            return this._localStorage;
        },
        set: function (localStorage) {
            this._localStorage = this.localStorage;
        },
        enumerable: true,
        configurable: true
    });
    LocalStorageService.prototype.setLocalStorageByKey = function (key, value) {
        localStorage.setItem(this._localStorageKey + key, value);
    };
    LocalStorageService = __decorate([
        core_1.Injectable()
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=LocalStorageService.js.map