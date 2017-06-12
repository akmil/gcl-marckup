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
var Utils_1 = require('../../../utils/Utils');
var Matches = (function () {
    function Matches(_http) {
        this._http = _http;
        this._matches = [];
    }
    Object.defineProperty(Matches.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (matches) {
            this._matches = matches;
        },
        enumerable: true,
        configurable: true
    });
    Matches.prototype.ngOnChanges = function () {
        this.getMatches();
    };
    Matches.prototype.getTime = function (time) {
        return Utils_1.getTimeFromTimestamp(time * 1000);
    };
    Matches.prototype.getMatches = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/matches/" + (this.isFuture ? 'future' : 'current'), {
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: { takes: this.matchesCount }
        }).subscribe(function (response) {
            if (!response.ok) {
                // TODO: notification
                return;
            }
            _this.matches = response.json();
        });
    };
    __decorate([
        core_1.Input()
    ], Matches.prototype, "matchesCount");
    __decorate([
        core_1.Input()
    ], Matches.prototype, "isFuture");
    Matches = __decorate([
        core_1.Component({
            selector: 'matches',
            templateUrl: 'template.html'
        })
    ], Matches);
    return Matches;
}());
exports.Matches = Matches;
//# sourceMappingURL=Matches.js.map