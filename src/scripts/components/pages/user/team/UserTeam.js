"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserTeam = (function () {
    function UserTeam(lS, route, userInformationService, teamService, notify) {
        var _this = this;
        this.lS = lS;
        this.route = route;
        this.userInformationService = userInformationService;
        this.teamService = teamService;
        this.notify = notify;
        this.teamService.getTeamById(this.userInformationService.userInformation.team.team_id).subscribe(function (response) {
            var _a = response.json(), error = _a.error, team = _a.team;
            // TODO: if error
            _this.team = team;
        });
    }
    UserTeam.prototype.ngOnInit = function () {
    };
    UserTeam = __decorate([
        core_1.Component({
            templateUrl: 'template.html'
        })
    ], UserTeam);
    return UserTeam;
}());
exports.UserTeam = UserTeam;
//# sourceMappingURL=UserTeam.js.map