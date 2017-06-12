"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Statistic = (function () {
    function Statistic(route, teamService, teamProvider) {
        var _this = this;
        this.route = route;
        this.teamService = teamService;
        this.teamProvider = teamProvider;
        this.team = null;
        if (this.route.firstChild)
            this.route.firstChild.params.subscribe(function (params) {
                _this.teamId = params.id;
                _this.loadTeam();
            });
    }
    Statistic.prototype.ngDoCheck = function () {
        this.team = this.teamProvider.data;
    };
    ;
    Statistic.prototype.loadTeam = function () {
        var _this = this;
        if (this.teamId)
            this.teamService.getTeamById(this.teamId).subscribe(function (response) {
                var _a = response.json(), error = _a.error, team = _a.team;
                // TODO: if error
                _this.team = team;
                _this.teamProvider.data = team;
            });
    };
    Statistic = __decorate([
        core_1.Component({
            selector: 'team',
            templateUrl: 'template.html'
        })
    ], Statistic);
    return Statistic;
}());
exports.Statistic = Statistic;
//# sourceMappingURL=Statistic.js.map