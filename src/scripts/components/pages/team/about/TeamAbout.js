"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TeamAbout = (function () {
    function TeamAbout(route, teamService, teamProvider) {
        this.route = route;
        this.teamService = teamService;
        this.teamProvider = teamProvider;
    }
    TeamAbout.prototype.ngOnInit = function () {
        this.team = this.teamProvider.data;
    };
    TeamAbout.prototype.ngDoCheck = function () {
        this.team = this.teamProvider.data;
    };
    ;
    TeamAbout = __decorate([
        core_1.Component({
            templateUrl: 'template.html'
        })
    ], TeamAbout);
    return TeamAbout;
}());
exports.TeamAbout = TeamAbout;
//# sourceMappingURL=TeamAbout.js.map