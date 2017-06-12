"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var config_1 = require('../../../config');
var LoginModal = (function () {
    function LoginModal(_http, _modalService, _authService) {
        this._http = _http;
        this._modalService = _modalService;
        this._authService = _authService;
    }
    LoginModal.prototype.hideRegistrationModal = function () {
        this._modalService.activeModal = null;
    };
    LoginModal.prototype.ngOnInit = function () {
        this.restUrl = config_1.config.restUrl;
    };
    LoginModal.prototype.onSubmit = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/login", {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            body: { email: this.email, password: this.password }
        }).subscribe(function (response) {
            _this._authService.isAuth = true;
            _this.hideRegistrationModal();
        });
    };
    LoginModal = __decorate([
        core_1.Component({
            selector: 'login-modal',
            templateUrl: 'template.html'
        })
    ], LoginModal);
    return LoginModal;
}());
exports.LoginModal = LoginModal;
//# sourceMappingURL=LoginModal.js.map