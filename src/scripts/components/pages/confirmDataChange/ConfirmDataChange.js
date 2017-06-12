"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var config_1 = require('../../../config');
var http_1 = require('@angular/http');
var ConfirmDataChange = (function () {
    function ConfirmDataChange(_http, lS, userInformation, route) {
        this._http = _http;
        this.lS = lS;
        this.userInformation = userInformation;
        this.route = route;
        this._http.get(config_1.config.restUrl + "/api/user/data-change", {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            search: new http_1.URLSearchParams("key=" + this.route.parseUrl(route.url).queryParams["key"])
        }).subscribe(function (res) {
            /* TODO: notify if error */
            if (res.status == 200) {
                route.navigateByUrl('/');
            }
        });
    }
    ConfirmDataChange = __decorate([
        core_1.Component({
            selector: 'confirm-data-change',
            template: '<div></div>'
        })
    ], ConfirmDataChange);
    return ConfirmDataChange;
}());
exports.ConfirmDataChange = ConfirmDataChange;
//# sourceMappingURL=ConfirmDataChange.js.map