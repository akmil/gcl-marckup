"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Modals_1 = require('../../../enums/Modals');
var config_1 = require('../../../config');
var RegistrationModal = (function () {
    function RegistrationModal(_http, _modalService, _userInformation, _authService, _localStorageService, toastr) {
        this._http = _http;
        this._modalService = _modalService;
        this._userInformation = _userInformation;
        this._authService = _authService;
        this._localStorageService = _localStorageService;
        this.toastr = toastr;
    }
    RegistrationModal.prototype.hideRegistrationModal = function () {
        this._modalService.activeModal = null;
    };
    RegistrationModal.prototype.ngOnInit = function () {
        this.restUrl = config_1.config.restUrl;
    };
    RegistrationModal.prototype.onSubmit = function () {
        var _this = this;
        var ref = this._localStorageService.localStorage.ref;
        this._http.get(config_1.config.restUrl + "/api/user/registration", {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            body: {
                name: this.name,
                nickname: this.nickname,
                email: this.email,
                password: this.password,
                ref: ref
            }
        }).subscribe(function (response) {
            var _a = response.json(), error = _a.error, user = _a.user;
            if (error) {
                _this.toastr.error(error);
                return;
            }
            console.log(response);
            _this._authService.isAuth = true;
            _this.hideRegistrationModal();
            _this._userInformation.userInformation = user;
            if (_this._userInformation.userInformation && !_this._userInformation.userInformation.confirmed) {
                _this._modalService.activeModal = Modals_1.Modals.CONFIRM_EMAIL;
            }
        });
    };
    RegistrationModal = __decorate([
        core_1.Component({
            selector: 'registration-modal',
            templateUrl: 'template.html'
        })
    ], RegistrationModal);
    return RegistrationModal;
}());
exports.RegistrationModal = RegistrationModal;
//# sourceMappingURL=RegistrationModal.js.map