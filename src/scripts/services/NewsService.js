"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var config_1 = require('../config');
var IFRAME_REG_EXP = /<iframe.+<\/iframe>/g;
var NewsService = (function () {
    function NewsService(toastr, _http, _socketService) {
        this.toastr = toastr;
        this._http = _http;
        this._socketService = _socketService;
        this._news = [];
        this._newsComments = [];
        this._addNewsSocketSubscriber();
        this._likeNewsSocketSubscriber();
        this._shareNewsSocketSubscriber();
        this._newsCommentsSocketSubscriber();
    }
    Object.defineProperty(NewsService.prototype, "news", {
        get: function () {
            return this._news;
        },
        set: function (news) {
            this._news = news;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsService.prototype, "newsComments", {
        get: function () {
            return this._newsComments;
        },
        set: function (newsComments) {
            this._newsComments = newsComments;
        },
        enumerable: true,
        configurable: true
    });
    NewsService.prototype.addCommentToSingleNewsBy = function (newsId, comment) {
        return this._http.get(config_1.config.restUrl + '/api/news/comment', {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: { newsId: newsId, comment: comment }
        });
    };
    NewsService.prototype.updateNewsComments = function (newsId) {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/news/" + newsId + "/comment", {
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true
        }).subscribe(function (response) {
            if (!response.ok) {
                // TODO: notification
                return;
            }
            var _a = response.json(), comments = _a.comments, error = _a.error;
            if (error) {
                // TODO: notification
                return;
            }
            _this.newsComments = comments || [];
        });
    };
    NewsService.prototype.likeNews = function (newsId) {
        this._http.get(config_1.config.restUrl + '/api/news/like', {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: { newsId: newsId }
        }).subscribe(function (response) {
            // In Socket
            // const { news_id, likeNews }: { news_id: number, likeNews: boolean } = response.json();
            // this.increaseOrDecreaseNewLikeCount(news_id, likeNews);
        });
    };
    /** Increasing or decreasing like count in news
     * @param newsId {number} - id of news for decrease/increase like count
     * @param increase {boolean} - if true method will increase, else decrease
     * @return void
     */
    NewsService.prototype.increaseOrDecreaseNewLikeCount = function (newsId, increase) {
        if (newsId >= 0) {
            var newsById = this.news.find(function (singleNews) { return (singleNews.id === newsId); });
            newsById.like_count = increase ?
                newsById.like_count + 1 :
                newsById.like_count > 0 ? newsById.like_count - 1 : 0;
        }
    };
    NewsService.prototype.increaseNewsShareCount = function (newsId) {
        if (newsId >= 0) {
            var newsById = this.news.find(function (singleNews) { return (singleNews.id === newsId); });
            newsById.share_count++;
        }
    };
    NewsService.prototype.updateNews = function () {
        var _this = this;
        this._http.get(config_1.config.restUrl + '/api/news', {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        }).subscribe(function (response) {
            var news = response.json().news;
            if (news) {
                _this.news = news;
            }
        });
    };
    NewsService.prototype.getNewsById = function (id) {
        return this._http.get(config_1.config.restUrl + "/api/news/" + id, {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        });
    };
    NewsService.prototype.getNewsByUserId = function (userId) {
        return this._http.get(config_1.config.restUrl + "/api/news/user/" + userId, {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        });
    };
    // public changeNewsVideo(news: string): Array<{text: string, isVideo: boolean}> {
    //   // const domModel = new DOMParser();
    //   // const domElements: Document = domModel.parseFromString(news, 'text/html');
    //   // const iframes: Array<HTMLElement> = domElements.getElementsByTagName('iframe');
    //   // for (let i: number = 0; i < iframes.length; i++) {
    //   //   iframes[i].src = this.domSanitizer.bypassSecurityTrustResourceUrl(iframes[i].src);
    //   // }
    //   // return <HTMLBodyElement> domElements.getElementsByTagName('body')[0].innerHTML;
    //
    // }
    NewsService.prototype.addNewsToClient = function (news) {
        this.news.unshift(news);
    };
    NewsService.prototype.addNewsToServer = function (news, callback) {
        var _this = this;
        this._http.get(config_1.config.restUrl + "/api/news/add", {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: news
        }).subscribe(function (response) {
            var _a = response.json(), error = _a.error, news = _a.news;
            if (error) {
                _this.toastr.error(error);
                return;
            }
            if (callback) {
                callback();
            }
        });
    };
    NewsService.prototype.filterNews = function (tags) {
        return this._http.get(config_1.config.restUrl + "/api/news/filter", {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: { tags: tags }
        });
        //   .subscribe((response: Response): void => {
        //   const { error, news }: { error: string, news: News} = response.json();
        //   if (error) {
        //     this.toastr.error(error);
        //     return;
        //   }
        //   if (news) {
        //     this.news = news;
        //   }
        // });
    };
    NewsService.prototype.shareNews = function (newsId) {
        var _this = this;
        this._http.post(config_1.config.restUrl + "/api/news/share", {
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: { newsId: newsId }
        }).subscribe(function (response) {
            var _a = response.json(), error = _a.error, news = _a.news;
            if (error) {
                _this.toastr.error(error);
                return;
            }
        });
    };
    NewsService.prototype.whoShared = function (newsId) {
        return this._http.get(config_1.config.restUrl + "/api/news/" + newsId + "/shared", {
            method: http_1.RequestMethod.Get,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json,
            withCredentials: true,
            body: { newsId: newsId }
        });
    };
    NewsService.prototype._addNewsSocketSubscriber = function () {
        var _this = this;
        this._socketService.socket.on('addNews', function (newsData) {
            if (newsData.news && newsData.news.published) {
                _this.addNewsToClient(newsData.news);
            }
        });
    };
    NewsService.prototype._likeNewsSocketSubscriber = function () {
        var _this = this;
        this._socketService.socket.on('likeNews', function (_a) {
            var news_id = _a.news_id, likeNews = _a.likeNews;
            _this.increaseOrDecreaseNewLikeCount(news_id, likeNews);
        });
    };
    NewsService.prototype._shareNewsSocketSubscriber = function () {
        var _this = this;
        this._socketService.socket.on('shareNews', function (_a) {
            var news_id = _a.news_id;
            _this.increaseNewsShareCount(news_id);
        });
    };
    NewsService.prototype._newsCommentsSocketSubscriber = function () {
        var _this = this;
        this._socketService.socket.on('newsComments', function (response) {
            _this.newsComments.unshift(response.newsComment);
        });
    };
    NewsService = __decorate([
        core_1.Injectable()
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=NewsService.js.map