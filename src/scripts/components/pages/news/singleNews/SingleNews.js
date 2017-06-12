"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _ = require("lodash");
var SingleNews = (function () {
    function SingleNews(route, newsService, authService, lS, sanitizer) {
        var _this = this;
        this.route = route;
        this.newsService = newsService;
        this.authService = authService;
        this.lS = lS;
        this.sanitizer = sanitizer;
        this.newsService.newsComments = [];
        this.route.params.subscribe(function (params) {
            var id = params.id;
            if (id >= 0) {
                _this.newsId = Number(_.clone(id));
                _this._getSingleNews(id);
                _this.newsService.updateNewsComments(_this.newsId);
            }
        });
    }
    SingleNews.prototype._getSingleNews = function (id) {
        var _this = this;
        this.newsService.getNewsById(id).subscribe(function (response) {
            if (response._body && response._body.news) {
                _this.title = response._body.news.title;
                _this.content = response._body.news.content;
                _this.contentHTML = _this.sanitizer.bypassSecurityTrustHtml(_this.content);
            }
        });
    };
    SingleNews.prototype.addComment = function (form) {
        if (!_.isNumber(this.newsId) || _.isNaN(this.newsId) || this.newsId < 0 || !form.value.comment) {
            // TODO: notification
            return;
        }
        this.newsService.addCommentToSingleNewsBy(this.newsId, form.value.comment).subscribe(function (response) {
            if (response.ok) {
                form.reset();
            }
        });
    };
    SingleNews = __decorate([
        core_1.Component({
            selector: 'single-news',
            templateUrl: 'template.html'
        })
    ], SingleNews);
    return SingleNews;
}());
exports.SingleNews = SingleNews;
//# sourceMappingURL=SingleNews.js.map