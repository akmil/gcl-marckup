"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Modals_1 = require("../../../../enums/Modals");
var AddNews = (function () {
    function AddNews(newsService, lS, authService, userInformationService, modalService) {
        this.newsService = newsService;
        this.lS = lS;
        this.authService = authService;
        this.userInformationService = userInformationService;
        this.modalService = modalService;
        this.tags = [];
        this.newsService.updateNews();
    }
    AddNews.prototype.showAddNewsModal = function () {
        this.modalService.activeModal = Modals_1.Modals.ADD_NEWS_MODAL;
    };
    AddNews.prototype.addNews = function (form) {
        var _this = this;
        form.value.tags = this.tags;
        this.newsService.addNewsToServer(form.value, function () { form.reset(); _this.tags = []; });
    };
    AddNews = __decorate([
        core_1.Component({
            selector: 'add-news',
            templateUrl: 'template.html'
        })
    ], AddNews);
    return AddNews;
}());
exports.AddNews = AddNews;
//# sourceMappingURL=AddNews.js.map