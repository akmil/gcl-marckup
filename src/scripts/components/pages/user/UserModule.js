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
var UserRoutes_1 = require('../../../router/UserRoutes');
var UserProfile_1 = require('./profile/UserProfile');
var User_1 = require("./User");
var NewsModule_1 = require("../news/NewsModule");
var UserTeam_1 = require("./team/UserTeam");
var UserFriends_1 = require("./friends/UserFriends");
var UserStats_1 = require("./stats/UserStats");
var UserAbout_1 = require("./about/UserAbout");
var UserSponsors_1 = require("./sponsors/UserSponsors");
var UserProvider_1 = require("../../../providers/UserProvider");
/* Services */
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(UserRoutes_1.router),
                ng_bootstrap_1.NgbModule,
                NewsModule_1.NewsModule
            ],
            providers: [UserProvider_1.UserProvider],
            declarations: [
                User_1.User, UserProfile_1.UserProfile, UserTeam_1.UserTeam, UserFriends_1.UserFriends, UserStats_1.UserStats, UserAbout_1.UserAbout, UserSponsors_1.UserSponsors
            ],
            exports: [
                User_1.User
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=UserModule.js.map