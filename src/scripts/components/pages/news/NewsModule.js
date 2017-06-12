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
var TagInputModel_1 = require("../../../editors/tagInput/TagInputModel");
var NewsService_1 = require("../../../services/NewsService");
var News_1 = require("./News");
var SingleNews_1 = require("./singleNews/SingleNews");
var HtmlEditor_1 = require("../../../editors/htmlEditor/HtmlEditor");
var NewsVideoChanger_1 = require("../../../pipes/NewsVideoChanger");
var NewsVideoPopup_1 = require("./newsVideoPopup/NewsVideoPopup");
var ShowNews_1 = require("./showNews/ShowNews");
var AddNews_1 = require("./addNews/AddNews");
var Matches_1 = require("../matches/Matches");
var AuthService_1 = require("../../../services/AuthService");
/* Components imports */
var NewsModule = (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                TagInputModel_1.RlTagInputModule,
                router_1.RouterModule,
                ng_bootstrap_1.NgbModule
            ],
            providers: [
                NewsService_1.NewsService, AuthService_1.AuthService
            ],
            declarations: [
                News_1.News, SingleNews_1.SingleNews, HtmlEditor_1.HtmlEditor, NewsVideoChanger_1.NewsVideoChanger, NewsVideoPopup_1.NewsVideoPopup, ShowNews_1.ShowNews, AddNews_1.AddNews, Matches_1.Matches
            ],
            exports: [
                News_1.News, SingleNews_1.SingleNews, HtmlEditor_1.HtmlEditor, NewsVideoChanger_1.NewsVideoChanger, NewsVideoPopup_1.NewsVideoPopup, ShowNews_1.ShowNews, AddNews_1.AddNews, Matches_1.Matches
            ]
        })
    ], NewsModule);
    return NewsModule;
}());
exports.NewsModule = NewsModule;
//# sourceMappingURL=NewsModule.js.map