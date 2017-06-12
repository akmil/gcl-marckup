"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var config_1 = require("../config");
var LeagueKeys_1 = require("../enums/LeagueKeys");
var LeaguesService = (function () {
    function LeaguesService(_http) {
        this._http = _http;
        this.leaguesOptions = [];
        this.prevLeagueValues = new Map();
        this.tournamentInfo = null;
        this.activeLeagueKey = LeagueKeys_1.LeagueKeys.ONGOING;
        this._leagueId = null;
        this.getLeagues();
    }
    Object.defineProperty(LeaguesService.prototype, "leagueId", {
        get: function () {
            return this._leagueId;
        },
        set: function (leagueId) {
            this._leagueId = leagueId;
        },
        enumerable: true,
        configurable: true
    });
    LeaguesService.prototype.isActiveOngoing = function () {
        return this.activeLeagueKey === LeagueKeys_1.LeagueKeys.ONGOING;
    };
    LeaguesService.prototype.isActiveUpcoming = function () {
        return this.activeLeagueKey === LeagueKeys_1.LeagueKeys.UPCOMING;
    };
    LeaguesService.prototype.isActivePast = function () {
        return this.activeLeagueKey === LeagueKeys_1.LeagueKeys.PAST;
    };
    LeaguesService.prototype.setActiveOngoing = function () {
        if (this.isActiveOngoing()) {
            return;
        }
        this.activeLeagueKey = LeagueKeys_1.LeagueKeys.ONGOING;
        this.getCashedLeagues();
    };
    LeaguesService.prototype.setActiveUpcoming = function () {
        if (this.isActiveUpcoming()) {
            return;
        }
        this.activeLeagueKey = LeagueKeys_1.LeagueKeys.UPCOMING;
        this.getCashedLeagues();
    };
    LeaguesService.prototype.setActivePast = function () {
        if (this.isActivePast()) {
            return;
        }
        this.activeLeagueKey = LeagueKeys_1.LeagueKeys.PAST;
        this.getCashedLeagues();
    };
    LeaguesService.prototype.getCashedLeagues = function () {
        var prevLeagueOptions = this.prevLeagueValues.get(this.activeLeagueKey);
        if (prevLeagueOptions) {
            this.leaguesOptions = prevLeagueOptions;
        }
        else {
            this.getLeagues();
        }
    };
    LeaguesService.prototype.getTournamentInformationById = function (id) {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/matches/tournaments/information/" + id, {
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true
        }).subscribe(function (response) {
            if (!response.ok) {
                // TODO: notification
                return;
            }
            _this.tournamentInfo = JSON.parse(response.json().tournamentInfo);
            console.log(_this.tournamentInfo);
        });
    };
    LeaguesService.prototype.getLeagues = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/matches/tournaments/" + this.activeLeagueKey, {
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true
        }).subscribe(function (response) {
            if (!response.ok) {
                // TODO: notification
                return;
            }
            _this.leaguesOptions = response.json().list;
            if (!_this.prevLeagueValues.get(_this.activeLeagueKey)) {
                _this.prevLeagueValues.set(_this.activeLeagueKey, _this.leaguesOptions);
            }
        });
    };
    LeaguesService = __decorate([
        core_1.Injectable()
    ], LeaguesService);
    return LeaguesService;
}());
exports.LeaguesService = LeaguesService;
//# sourceMappingURL=LeaguesService.js.map