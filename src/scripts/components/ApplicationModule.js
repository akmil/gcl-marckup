"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
/* Components imports */
var Application_1 = require('./Application');
var Matches_1 = require('./pages/matches/Matches');
/* Services imports */
var ModeService_1 = require('../services/ModeService');
var SettingsService_1 = require('../services/SettingsService');
var ModalService_1 = require('../services/ModalService');
var ModalAdapterModule_1 = require('./modals/ModalAdapterModule');
var PagesModule_1 = require('./pages/PagesModule');
var AuthService_1 = require('../services/AuthService');
var UserInformationService_1 = require('../services/UserInformationService');
var LocalizationService_1 = require('../services/LocalizationService');
var LocalStorageService_1 = require('../services/LocalStorageService');
var NavigatorService_1 = require('../services/NavigatorService');
var SocketService_1 = require('../services/SocketService');
var UserFriendsService_1 = require('../services/UserFriendsService');
var UserNotificationsService_1 = require("../services/UserNotificationsService");
var TeamService_1 = require('../services/TeamService');
var FileUploadService_1 = require("../services/FileUploadService");
var ApplicationModule = (function () {
    function ApplicationModule(_userInformationService) {
        this._userInformationService = _userInformationService;
    }
    ApplicationModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                ModalAdapterModule_1.ModalAdapterModule,
                PagesModule_1.PagesModule,
                ng2_toastr_1.ToastModule,
                router_1.RouterModule,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [
                Application_1.Application, Matches_1.Matches
            ],
            providers: [
                ModeService_1.ModeService, SettingsService_1.SettingsService, ModalService_1.ModalService, AuthService_1.AuthService, LocalizationService_1.LocalizationService,
                TeamService_1.TeamService,
                UserFriendsService_1.UserFriendsService, UserNotificationsService_1.UserNotificationsService, UserInformationService_1.UserInformationService,
                LocalStorageService_1.LocalStorageService, NavigatorService_1.NavigatorService, SocketService_1.SocketService, FileUploadService_1.FileUploadService, ng2_toastr_1.ToastsManager
            ],
            bootstrap: [Application_1.Application]
        })
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=ApplicationModule.js.map