"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Modals_1 = require('../enums/Modals');
var config_1 = require('../config');
var moment = require('moment');
var UserInformationService = (function () {
    function UserInformationService(_http, _modalService) {
        this._http = _http;
        this._modalService = _modalService;
        this.dropDown = false;
        this._userInformationRequest();
    }
    Object.defineProperty(UserInformationService.prototype, "userInformation", {
        get: function () {
            return this._userInformation;
        },
        set: function (userInformation) {
            this._userInformation = userInformation;
        },
        enumerable: true,
        configurable: true
    });
    UserInformationService.prototype.showUserProfileAvatar = function () {
        return this.userInformation && this.userInformation.avatar ?
            this.userInformation.avatar :
            'http://placehold.it/120x120';
    };
    Object.defineProperty(UserInformationService.prototype, "isManualUpdate", {
        get: function () {
            var result = false;
            if (this._userInformation) {
                var timePoint = moment(this._userInformation.manual_stats_update);
                var timeDiff = moment().diff(timePoint, 'seconds');
                if (timeDiff >= 0)
                    result = true;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    UserInformationService.prototype.setEmail = function (values) {
        var body = JSON.stringify(values);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: headers,
            withCredentials: true,
            responseType: http_1.ResponseContentType.Json
        });
        return this._http.post(config_1.config.restUrl + "/api/user/set-email", body, options).toPromise()
            .then(function (res) { return res.text(); })
            .catch(function (error) { return console.log(error); });
    };
    UserInformationService.prototype.saveUserInformation = function (values) {
        var body = JSON.stringify(values);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            withCredentials: true,
            headers: headers,
            responseType: http_1.ResponseContentType.Json
        });
        return this._http.post(config_1.config.restUrl + "/api/user", body, options).toPromise()
            .then(function (res) { return JSON.parse(res.text()); })
            .catch(function (error) { return console.log(error); });
    };
    UserInformationService.prototype.updateGameStats = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            withCredentials: true,
            headers: headers,
            responseType: http_1.ResponseContentType.Json
        });
        return this._http.get(config_1.config.restUrl + "/api/user/update-stats", options).toPromise()
            .then(function (res) {
            var data = res.json();
            console.log(data);
            _this._userInformation = data.user;
        })
            .catch(function (error) { return console.log(error); });
    };
    UserInformationService.prototype.getUserInformationByUserId = function (userId) {
        return this._http.get(config_1.config.restUrl + "/api/user/" + userId, {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        });
    };
    UserInformationService.prototype._userInformationRequest = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/user", {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        }).subscribe(function (response) {
            console.log('user', response);
            _this._userInformation = response._body.user;
            if (_this._userInformation && !_this._userInformation.confirmed) {
                _this._modalService.activeModal = Modals_1.Modals.CONFIRM_EMAIL;
            }
        });
    };
    UserInformationService = __decorate([
        core_1.Injectable()
    ], UserInformationService);
    return UserInformationService;
}());
exports.UserInformationService = UserInformationService;
//# sourceMappingURL=UserInformationService.js.map