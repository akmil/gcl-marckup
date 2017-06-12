"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var config_1 = require("../../../config");
var TournamentKeys;
(function (TournamentKeys) {
    TournamentKeys[TournamentKeys["ONGOING"] = 'ongoing'] = "ONGOING";
    TournamentKeys[TournamentKeys["UPCOMING"] = 'upcoming'] = "UPCOMING";
    TournamentKeys[TournamentKeys["PAST"] = 'past'] = "PAST";
})(TournamentKeys || (TournamentKeys = {}));
var Tournament = (function () {
    function Tournament(_http) {
        this._http = _http;
        this.prevTournamentValues = new Map();
        this.tournamentsOptions = [];
        this.activeTournamentKey = TournamentKeys.ONGOING;
        this.getTournaments();
    }
    Tournament.prototype.isActiveOngoing = function () {
        return this.activeTournamentKey === TournamentKeys.ONGOING;
    };
    Tournament.prototype.isActiveUpcoming = function () {
        return this.activeTournamentKey === TournamentKeys.UPCOMING;
    };
    Tournament.prototype.isActivePast = function () {
        return this.activeTournamentKey === TournamentKeys.PAST;
    };
    Tournament.prototype.setActiveOngoing = function () {
        if (this.isActiveOngoing()) {
            return;
        }
        this.activeTournamentKey = TournamentKeys.ONGOING;
        this.getCashedTournaments();
    };
    Tournament.prototype.setActiveUpcoming = function () {
        if (this.isActiveUpcoming()) {
            return;
        }
        this.activeTournamentKey = TournamentKeys.UPCOMING;
        this.getCashedTournaments();
    };
    Tournament.prototype.setActivePast = function () {
        if (this.isActivePast()) {
            return;
        }
        this.activeTournamentKey = TournamentKeys.PAST;
        this.getCashedTournaments();
    };
    Tournament.prototype.getCashedTournaments = function () {
        var prevTournamentOptions = this.prevTournamentValues.get(this.activeTournamentKey);
        if (prevTournamentOptions) {
            this.tournamentsOptions = prevTournamentOptions;
        }
        else {
            this.getTournaments();
        }
    };
    Tournament.prototype.getTournaments = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/matches/tournaments/" + this.activeTournamentKey, {
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true
        }).subscribe(function (response) {
            if (!response.ok) {
                // TODO: notification
                return;
            }
            _this.tournamentsOptions = response.json().list;
            if (!_this.prevTournamentValues.get(_this.activeTournamentKey)) {
                _this.prevTournamentValues.set(_this.activeTournamentKey, _this.tournamentsOptions);
            }
        });
    };
    Tournament = __decorate([
        core_1.Component({
            selector: 'tournament',
            templateUrl: 'template.html'
        })
    ], Tournament);
    return Tournament;
}());
exports.Tournament = Tournament;
//# sourceMappingURL=Tournaments.js.map