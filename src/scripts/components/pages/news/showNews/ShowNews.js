"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _ = require("lodash");
var core_1 = require('@angular/core');
var Utils_1 = require('../../../../utils/Utils');
exports.SPLIT_VIDEO_CONTENT_BY = '$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%!';
var ShowNews = (function () {
    function ShowNews(newsService, lS, authService, userInformationService, sanitizer, elementRef, renderer) {
        this.newsService = newsService;
        this.lS = lS;
        this.authService = authService;
        this.userInformationService = userInformationService;
        this.sanitizer = sanitizer;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.SPLIT_VIDEO_CONTENT_BY = exports.SPLIT_VIDEO_CONTENT_BY;
        this.showVideo = false;
        this.activeVideoUrl = '';
        this.newsService.updateNews();
    }
    ShowNews.prototype.isContentHTML = function (content) {
        return !(/img/g.test(content));
    };
    ShowNews.prototype.isContentImg = function (content) {
        return /img/g.test(content);
    };
    ShowNews.prototype.getImageUrl = function (content) {
        var domParser = new DOMParser();
        var domFromContent = domParser.parseFromString(content, 'text/html');
        var img = domFromContent.getElementsByTagName('img')[0];
        return img.src;
    };
    // TODO: create news interface
    ShowNews.prototype.getNewsStyles = function (singleNews) {
        if (!singleNews.bgImage) {
            return;
        }
        return {
            'background-image': "url(./static/assets/img/maxresdefault.jpg)"
        };
    };
    ShowNews.prototype.handlePlayVideoClick = function (content) {
        var domParser = new DOMParser();
        var domFromContent = domParser.parseFromString(content, 'text/html');
        var img = domFromContent.getElementsByTagName('img')[0];
        var videoUrl = img.getAttribute('data-video');
        console.log(videoUrl);
        this.showVideo = true;
        this.activeVideoUrl = videoUrl;
    };
    ShowNews.prototype.newsVideoPopupClose = function () {
        this.showVideo = false;
        this.activeVideoUrl = '';
    };
    ShowNews.prototype.getTagAsArray = function (tag) {
        if (!tag) {
            return [];
        }
        return [tag.name || tag];
    };
    ShowNews.prototype.whoShared = function (id) {
        var singleNews = _.find(this.news, { id: id });
        if (singleNews && !singleNews.whoShared) {
            singleNews.whoShared = [];
            this.newsService.whoShared(id).subscribe(function (response) {
                var _a = response.json(), error = _a.error, shared = _a.shared;
                for (var _i = 0, shared_1 = shared; _i < shared_1.length; _i++) {
                    var item = shared_1[_i];
                    singleNews.whoShared.push(item.user);
                }
            });
        }
        return singleNews.whoShared;
    };
    // TODO: set in Utils
    ShowNews.prototype.getTime = function (time) {
        return Utils_1.getTime(time);
    };
    __decorate([
        core_1.Input()
    ], ShowNews.prototype, "news");
    ShowNews = __decorate([
        core_1.Component({
            selector: 'show-news',
            templateUrl: 'template.html'
        })
    ], ShowNews);
    return ShowNews;
}());
exports.ShowNews = ShowNews;
//# sourceMappingURL=ShowNews.js.map