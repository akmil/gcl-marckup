"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var core_1 = require('@angular/core');
var TeamEdit = (function () {
    function TeamEdit(route, teamService, toastr, teamProvider) {
        this.route = route;
        this.teamService = teamService;
        this.toastr = toastr;
        this.teamProvider = teamProvider;
    }
    TeamEdit.prototype.ngOnInit = function () {
        this.team = this.teamProvider.data;
    };
    TeamEdit.prototype.ngDoCheck = function () {
        this.team = this.teamProvider.data;
    };
    ;
    TeamEdit.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, Promise, function* () {
            var _this = this;
            if (form.valid) {
                (_a = this.teamService).updateTeam.apply(_a, [{}].concat(this.team, form.value));
            }
            then.apply(void 0, [function (res) {
                if (res) {
                    _this.team = _this.teamProvider.data = {};
                }
            }].concat(this.teamProvider.data, res.team));
            var _a;
        });
    };
    ;
    TeamEdit = __decorate([
        core_1.Component({
            templateUrl: 'template.html'
        })
    ], TeamEdit);
    return TeamEdit;
}());
exports.TeamEdit = TeamEdit;
this.toastr.success('Information updated');
;
//# sourceMappingURL=TeamEdit.js.map