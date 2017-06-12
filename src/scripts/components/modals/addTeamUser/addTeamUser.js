"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var config_1 = require('../../../config');
var AddTeamUser = (function () {
    function AddTeamUser(_http, _modalService, _authService) {
        this._http = _http;
        this._modalService = _modalService;
        this._authService = _authService;
    }
    AddTeamUser.prototype.hideModal = function () {
        this._modalService.activeModal = null;
    };
    AddTeamUser.prototype.ngOnInit = function () {
        this.restUrl = config_1.config.restUrl;
    };
    AddTeamUser.prototype.onSubmit = function () {
    };
    AddTeamUser = __decorate([
        core_1.Component({
            selector: 'add-team-user-modal',
            templateUrl: 'template.html'
        })
    ], AddTeamUser);
    return AddTeamUser;
}());
exports.AddTeamUser = AddTeamUser;
//# sourceMappingURL=addTeamUser.js.map