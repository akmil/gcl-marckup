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
var ConfirmEmailModal = (function () {
    function ConfirmEmailModal(_http, _modalService, lS, userInformation) {
        this._http = _http;
        this._modalService = _modalService;
        this.lS = lS;
        this.userInformation = userInformation;
    }
    ConfirmEmailModal.prototype.hideConfirmEmailModal = function () {
        this._modalService.activeModal = null;
    };
    ConfirmEmailModal.prototype.onSubmit = function () {
        this._http.get(config_1.config.restUrl + "/api/user", {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        }).subscribe(function (response) {
            console.log('login', response);
        });
    };
    ConfirmEmailModal.prototype.setEmail = function (form) {
        var _this = this;
        if (form.valid) {
            this.userInformation.setEmail(form.value).then(function (email) {
                _this.userInformation.userInformation.email = email;
            });
        }
        else {
            console.log('Form not valid');
        }
    };
    ConfirmEmailModal = __decorate([
        core_1.Component({
            selector: 'confirm-email-modal',
            templateUrl: 'template.html'
        })
    ], ConfirmEmailModal);
    return ConfirmEmailModal;
}());
exports.ConfirmEmailModal = ConfirmEmailModal;
//# sourceMappingURL=ConfirmEmailModal.js.map