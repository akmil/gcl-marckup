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
var ConfirmEmail = (function () {
    function ConfirmEmail(_http, lS, _modalService, userInformation, route) {
        var _this = this;
        this._http = _http;
        this.lS = lS;
        this._modalService = _modalService;
        this.userInformation = userInformation;
        this.route = route;
        this._http.get(config_1.config.restUrl + "/api/user/email-confirm", {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            search: new http_1.URLSearchParams("key=" + this.route.parseUrl(route.url).queryParams["key"])
        }).subscribe(function (res) {
            var confirmed = res.json().confirmed;
            if (res.status == 200 && confirmed) {
                /*TODO: notification if hash inactive */
                _this.userInformation.userInformation.confirmed = confirmed;
                _this._modalService.activeModal = null;
            }
            route.navigateByUrl('/');
        });
    }
    ConfirmEmail = __decorate([
        core_1.Component({
            selector: 'confirm-email',
            template: '<div></div>'
        })
    ], ConfirmEmail);
    return ConfirmEmail;
}());
exports.ConfirmEmail = ConfirmEmail;
//# sourceMappingURL=ConfirmEmail.js.map