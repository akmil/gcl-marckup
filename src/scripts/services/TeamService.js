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
var TeamService = (function () {
    function TeamService(_http, toastr, userInformationService, lS) {
        this._http = _http;
        this.toastr = toastr;
        this.userInformationService = userInformationService;
        this.lS = lS;
    }
    TeamService.prototype.getTeamById = function (teamId) {
        return this._http.get(config_1.config.restUrl + "/api/team/" + teamId, {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        });
    };
    TeamService.prototype.createTeam = function (team) {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/team/add", {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: team
        }).subscribe(function (response) {
            var _a = response.json(), error = _a.error, team = _a.team;
            _this.userInformationService.userInformation.team = { team_id: team.id, created_at: team.created_at };
            _this.toastr.success(_this.lS.userLocalization.notification.success);
            if (error) {
                _this.toastr.error(error);
                return;
            }
        });
    };
    TeamService.prototype.removeUser = function (teamUserId) {
        var body = JSON.stringify({ teamUserId: teamUserId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            withCredentials: true,
            headers: headers,
            responseType: http_1.ResponseContentType.Json
        });
        return this._http.post(config_1.config.restUrl + "/api/team/remove-user", body, options).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    TeamService.prototype.addUserToTeam = function (invite) {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/team/invite", {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: invite
        }).subscribe(function (response) {
            var _a = response.json(), error = _a.error, success = _a.success;
            if (success) {
                _this.toastr.success(_this.lS.userLocalization.notification.success);
            }
            else if (error) {
                _this.toastr.error(error);
            }
        });
    };
    TeamService.prototype.acceptRequest = function (requestId) {
        var body = JSON.stringify({ requestId: requestId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            withCredentials: true,
            headers: headers,
            responseType: http_1.ResponseContentType.Json
        });
        return this._http.post(config_1.config.restUrl + "/api/team/confirm", body, options).toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    TeamService = __decorate([
        core_1.Injectable()
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=TeamService.js.map