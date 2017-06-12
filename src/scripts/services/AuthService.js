"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var config_1 = require('../config');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this._isAuthRequest();
    }
    AuthService.prototype.logout = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/user/logout", {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        }).subscribe(function (response) {
            console.log('logout', response);
            _this.isAuth = false;
        });
    };
    Object.defineProperty(AuthService.prototype, "isAuth", {
        get: function () {
            return this._isAuth;
        },
        set: function (isAuth) {
            this._isAuth = isAuth;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype._isAuthRequest = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/user/isAuth", {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        }).subscribe(function (response) {
            console.log('isAuth1', response);
            _this.isAuth = response._body.isAuth;
        });
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map