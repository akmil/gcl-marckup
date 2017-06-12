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
var index_1 = require('../../router/index');
var Pages_1 = require('./Pages');
var ConfirmEmail_1 = require('./confirmEmail/ConfirmEmail');
var UserSettings_1 = require('./userSettings/UserSettings');
var UserNotifications_1 = require('./userNotifications/UserNotifications');
var ConfirmDataChange_1 = require('./confirmDataChange/ConfirmDataChange');
var SingleNews_1 = require('./singleNews/SingleNews');
var News_1 = require('./news/News');
var NewsVideoPopup_1 = require('./news/newsVideoPopup/NewsVideoPopup');
var UserPage_1 = require('./user/UserPage');
var AddNews_1 = require('./news/addNews/AddNews');
var ShowNews_1 = require('./news/showNews/ShowNews');
var Search_1 = require('./search/Search');
/* Services */
var NewsService_1 = require('../../services/NewsService');
var TeamService_1 = require('../../services/TeamService');
/* Editor */
var HtmlEditor_1 = require('../../editors/htmlEditor/HtmlEditor');
var index_2 = require('../../editors/tagInput/index');
/* Pipe imports */
var NewsVideoChanger_1 = require('../../pipes/NewsVideoChanger');
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                index_2.RlTagInputModule,
                router_1.RouterModule.forRoot(index_1.router),
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            providers: [
                NewsService_1.NewsService,
                TeamService_1.TeamService
            ],
            declarations: [
                Pages_1.Pages, ConfirmEmail_1.ConfirmEmail, UserSettings_1.UserSettings, ConfirmDataChange_1.ConfirmDataChange, News_1.News, SingleNews_1.SingleNews, HtmlEditor_1.HtmlEditor,
                UserPage_1.UserPage, NewsVideoChanger_1.NewsVideoChanger, NewsVideoPopup_1.NewsVideoPopup, UserNotifications_1.UserNotifications, ShowNews_1.ShowNews, AddNews_1.AddNews, Search_1.Search
            ],
            exports: [
                Pages_1.Pages
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=PagesModule.js.map