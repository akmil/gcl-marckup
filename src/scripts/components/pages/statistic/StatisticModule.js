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
var StatisticRoutes_1 = require('../../../router/StatisticRoutes');
var StatisticUser_1 = require("./user/StatisticUser");
var Statistic_1 = require("./Statistic");
var StatisticTeam_1 = require("./team/StatisticTeam");
/* Services */
var StatisticModule = (function () {
    function StatisticModule() {
    }
    StatisticModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(StatisticRoutes_1.router),
                ng_bootstrap_1.NgbModule,
                NewsModule_1.NewsModule
            ],
            providers: [],
            declarations: [
                Statistic_1.Statistic, StatisticUser_1.StatisticUser, StatisticTeam_1.StatisticTeam
            ],
            exports: [
                Statistic_1.Statistic
            ]
        })
    ], StatisticModule);
    return StatisticModule;
}());
exports.StatisticModule = StatisticModule;
//# sourceMappingURL=StatisticModule.js.map