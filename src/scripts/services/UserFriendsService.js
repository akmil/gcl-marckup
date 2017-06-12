"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var config_1 = require('../config');
var http_1 = require('@angular/http');
var UserFriendsService = (function () {
    function UserFriendsService(_http) {
        this._http = _http;
    }
    UserFriendsService.prototype.getFriendsByUserId = function (userId) {
        return this._http.get(config_1.config.restUrl + "/api/friends/user/" + userId, {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        });
    };
    UserFriendsService.prototype.friendRequest = function (values) {
        var body = JSON.stringify(values);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: headers,
            withCredentials: true,
            responseType: http_1.ResponseContentType.Json
        });
        return this._http.post(config_1.config.restUrl + "/api/friends/request", body, options).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    UserFriendsService.prototype.acceptRequest = function (requestId) {
        var body = JSON.stringify({ requestId: requestId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            withCredentials: true,
            headers: headers,
            responseType: http_1.ResponseContentType.Json
        });
        return this._http.post(config_1.config.restUrl + "/api/friends/confirm", body, options).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    UserFriendsService.prototype.removeFriend = function (friendId) {
        var body = JSON.stringify({ friendId: friendId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            withCredentials: true,
            headers: headers,
            responseType: http_1.ResponseContentType.Json
        });
        return this._http.post(config_1.config.restUrl + "/api/friends/remove", body, options).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    UserFriendsService = __decorate([
        core_1.Injectable()
    ], UserFriendsService);
    return UserFriendsService;
}());
exports.UserFriendsService = UserFriendsService;
//# sourceMappingURL=UserFriendsService.js.map