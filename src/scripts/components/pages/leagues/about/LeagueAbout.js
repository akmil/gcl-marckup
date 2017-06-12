"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LeagueAbout = (function () {
    function LeagueAbout(route, leaguesService) {
        this.route = route;
        this.leaguesService = leaguesService;
    }
    LeagueAbout.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params.id;
            if (id >= 0) {
                _this.leaguesService.getTournamentInformationById(id);
            }
        });
    };
    LeagueAbout = __decorate([
        core_1.Component({
            selector: 'leagues',
            templateUrl: 'template.html'
        })
    ], LeagueAbout);
    return LeagueAbout;
}());
exports.LeagueAbout = LeagueAbout;
//# sourceMappingURL=LeagueAbout.js.map