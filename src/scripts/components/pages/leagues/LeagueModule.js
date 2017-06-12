"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
/* Components imports */
var LeagueRoutes_1 = require('../../../router/LeagueRoutes');
var Leagues_1 = require("./Leagues");
var LeagueAbout_1 = require("./about/LeagueAbout");
var LeagueParticipators_1 = require("./participators/LeagueParticipators");
var LeaguesList_1 = require("./list/LeaguesList");
var LeagueTable_1 = require("./table/LeagueTable");
var LeagueMatches_1 = require("./matches/LeagueMatches");
var LeaguePrize_1 = require("./prize/LeaguePrize");
/* Services */
var LeagueModule = (function () {
    function LeagueModule() {
    }
    LeagueModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(LeagueRoutes_1.router),
                ng_bootstrap_1.NgbModule
            ],
            providers: [],
            declarations: [
                Leagues_1.Leagues, LeagueAbout_1.LeagueAbout, LeagueParticipators_1.LeagueParticipators, LeaguesList_1.LeaguesList, LeagueTable_1.LeagueTable, LeagueMatches_1.LeagueMatches, LeaguePrize_1.LeaguePrize
            ],
            exports: [
                Leagues_1.Leagues
            ]
        })
    ], LeagueModule);
    return LeagueModule;
}());
exports.LeagueModule = LeagueModule;
//# sourceMappingURL=LeagueModule.js.map