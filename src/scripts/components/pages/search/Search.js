"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Search = (function () {
    function Search(route, newsService, toastr, location) {
        this.route = route;
        this.newsService = newsService;
        this.toastr = toastr;
        this.location = location;
        this.filteredNews = [];
        this.tags = [];
        this._setQueryParamsFilter();
    }
    Search.prototype.filterNews = function (tags) {
        var _this = this;
        this.newsService.filterNews(tags).subscribe(function (response) {
            var _a = response.json(), error = _a.error, news = _a.news;
            if (error) {
                _this.toastr.error(error);
                return;
            }
            if (news) {
                _this.filteredNews = news;
            }
        });
    };
    Search.prototype._setQueryParamsFilter = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var tags = params.tags;
            if (tags) {
                tags = tags.split(',');
                _this.tags = tags;
                _this.filterNews(tags);
            }
        });
    };
    Search = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'template.html'
        })
    ], Search);
    return Search;
}());
exports.Search = Search;
//# sourceMappingURL=Search.js.map