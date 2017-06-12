"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Modals_1 = require('../enums/Modals');
var Localization_1 = require('../enums/Localization');
(function (MatchesWidgets) {
    MatchesWidgets[MatchesWidgets["FUTURE"] = 0] = "FUTURE";
    MatchesWidgets[MatchesWidgets["CURRENT"] = 1] = "CURRENT";
})(exports.MatchesWidgets || (exports.MatchesWidgets = {}));
var MatchesWidgets = exports.MatchesWidgets;
var Application = (function () {
    function Application(_modalService, authService, userInformationService, lS, localStorageService, navigatorService, activeRouter, router) {
        var _this = this;
        this._modalService = _modalService;
        this.authService = authService;
        this.userInformationService = userInformationService;
        this.lS = lS;
        this.localStorageService = localStorageService;
        this.navigatorService = navigatorService;
        this.activeRouter = activeRouter;
        this.router = router;
        this.Localization = Localization_1.Localization;
        this.activeMatchesWidget = MatchesWidgets.FUTURE;
        this.router.events.subscribe(function (val) {
            if (val instanceof router_1.NavigationEnd) {
                _this.userInformationService.dropDown = false;
            }
        });
        this.activeRouter.queryParams.subscribe(function (params) {
            var ref = params.ref;
            if (ref) {
                localStorageService.setLocalStorageByKey('ref', ref);
            }
        });
    }
    Application.prototype.handleSetActiveFutureWidgetHandle = function () {
        if (this.activeMatchesWidget !== MatchesWidgets.FUTURE) {
            this.activeMatchesWidget = MatchesWidgets.FUTURE;
        }
    };
    Application.prototype.isActiveFutureWidget = function () {
        return this.activeMatchesWidget === MatchesWidgets.FUTURE;
    };
    Application.prototype.isActiveCurrentWidget = function () {
        return this.activeMatchesWidget === MatchesWidgets.CURRENT;
    };
    Application.prototype.handleSetActiveCurrentWidgetHandle = function () {
        if (this.activeMatchesWidget !== MatchesWidgets.CURRENT) {
            this.activeMatchesWidget = MatchesWidgets.CURRENT;
        }
    };
    Application.prototype.showRegistrationModal = function () {
        if (this.authService.isAuth) {
            this.authService.logout();
            this.lS.userLocalizationRequest();
            return;
        }
        this._modalService.activeModal = Modals_1.Modals.REGISTRATION;
    };
    Application.prototype.navigateToSettings = function () {
        this.navigatorService.navigateTo('/user/settings');
    };
    Application.prototype.navigateToHome = function () {
        this.navigatorService.navigateTo('/');
    };
    Application.prototype.navigateToProfile = function () {
        this.navigatorService.navigateTo('/user/' + this.userInformationService.userInformation.id);
    };
    Application.prototype.navigateToNotifications = function () {
        this.navigatorService.navigateTo('/user/notifications');
    };
    Application.prototype.logOut = function () {
        if (this.authService.isAuth)
            this.authService.logout();
    };
    Application.prototype.showLoginModal = function () {
        this._modalService.activeModal = Modals_1.Modals.LOGIN;
    };
    Application.prototype.toggleDropDown = function () {
        this.userInformationService.dropDown = !this.userInformationService.dropDown;
    };
    Application.prototype.setLanguage = function (languageKey) {
        this.localStorageService.setLocalStorageByKey('localization', languageKey);
        this.lS.userLocalizationRequest(languageKey);
    };
    Application = __decorate([
        core_1.Component({
            selector: 'application',
            templateUrl: './template-about-player.html'
        })
    ], Application);
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=Application.js.map