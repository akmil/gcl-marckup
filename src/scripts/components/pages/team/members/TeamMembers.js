"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Modals_1 = require("../../../../enums/Modals");
var TeamMembers = (function () {
    function TeamMembers(route, teamService, teamProvider, modalService) {
        this.route = route;
        this.teamService = teamService;
        this.teamProvider = teamProvider;
        this.modalService = modalService;
    }
    TeamMembers.prototype.ngOnInit = function () {
        this.team = this.teamProvider.data;
    };
    TeamMembers.prototype.ngDoCheck = function () {
        this.team = this.teamProvider.data;
    };
    ;
    TeamMembers.prototype.showEdit = function (user) {
        this.modalService.activeModal = Modals_1.Modals.ADD_TEAM_USER;
        this.modalService.data = user;
    };
    TeamMembers = __decorate([
        core_1.Component({
            templateUrl: 'template.html'
        })
    ], TeamMembers);
    return TeamMembers;
}());
exports.TeamMembers = TeamMembers;
//# sourceMappingURL=TeamMembers.js.map