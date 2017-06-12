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
var NewsModule_1 = require("../news/NewsModule");
var TeamRoutes_1 = require('../../../router/TeamRoutes');
var Team_1 = require("./Team");
var TeamProfile_1 = require("./profile/TeamProfile");
var TeamAbout_1 = require("./about/TeamAbout");
var TeamMembers_1 = require("./members/TeamMembers");
var TeamStats_1 = require("./stats/TeamStats");
var TeamSponsors_1 = require("./sponsors/TeamSponsors");
var TeamProvider_1 = require("../../../providers/TeamProvider");
var TeamEdit_1 = require("./edit/TeamEdit");
/* Services */
var TeamModule = (function () {
    function TeamModule() {
    }
    TeamModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(TeamRoutes_1.router),
                ng_bootstrap_1.NgbModule,
                NewsModule_1.NewsModule
            ],
            providers: [TeamProvider_1.TeamProvider],
            declarations: [
                Team_1.Team, TeamProfile_1.TeamProfile, TeamAbout_1.TeamAbout, TeamMembers_1.TeamMembers, TeamStats_1.TeamStats, TeamSponsors_1.TeamSponsors, TeamEdit_1.TeamEdit
            ],
            exports: [
                Team_1.Team
            ]
        })
    ], TeamModule);
    return TeamModule;
}());
exports.TeamModule = TeamModule;
//# sourceMappingURL=TeamModule.js.map