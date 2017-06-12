"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddNews = (function () {
    function AddNews(modalService, newsService) {
        this.modalService = modalService;
        this.newsService = newsService;
    }
    AddNews.prototype.hideConfirmEmailModal = function () {
        this.modalService.activeModal = null;
    };
    AddNews.prototype.setActiveGuideComponent = function () {
        // this.getActiveComponent.emit(ActiveAddComponent.GUIDE);
    };
    AddNews = __decorate([
        core_1.Component({
            selector: 'add-news-component',
            templateUrl: 'template.html'
        })
    ], AddNews);
    return AddNews;
}());
exports.AddNews = AddNews;
//# sourceMappingURL=addNews.js.map