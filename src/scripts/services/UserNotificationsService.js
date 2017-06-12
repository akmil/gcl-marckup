"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var config_1 = require("../config");
var _ = require('lodash');
var UserNotificationsService = (function () {
    function UserNotificationsService(_http) {
        this._http = _http;
        this._notifications = [];
    }
    Object.defineProperty(UserNotificationsService.prototype, "notifications", {
        get: function () {
            return this._notifications;
        },
        set: function (notifications) {
            this._notifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    UserNotificationsService.prototype.findNotification = function (id) {
        return _.find(this._notifications, { id: id });
    };
    UserNotificationsService.prototype.updateNotifications = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + '/api/user/notifications', {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        }).subscribe(function (response) {
            var notifications = response.json();
            if (notifications) {
                _this.notifications = notifications;
            }
        });
    };
    UserNotificationsService = __decorate([
        core_1.Injectable()
    ], UserNotificationsService);
    return UserNotificationsService;
}());
exports.UserNotificationsService = UserNotificationsService;
//# sourceMappingURL=UserNotificationsService.js.map