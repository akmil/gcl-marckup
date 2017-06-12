"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _ = require('lodash');
var core_1 = require('@angular/core');
var YOUTUBE = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
var YOUTUBE_TIME_RELS = /[\?|\#].+/;
var TWITCH = /(?:https?:\/{2})?(?:w{3}\.)?twitch.tv\/videos\/[1-9]+/;
var NewsVideoChanger = (function () {
    function NewsVideoChanger() {
    }
    // @Override
    NewsVideoChanger.prototype.transform = function (content) {
        var domParser = new DOMParser();
        var domFromNews = domParser.parseFromString(content, 'text/html');
        var iframes = domFromNews.querySelectorAll('iframe');
        for (var i = 0; i < iframes.length; i++) {
            this.createYoutubeThumbnail(iframes[i]);
            this.createTwitchThubnail(iframes[i]);
        }
        return domFromNews.body.innerHTML;
    };
    NewsVideoChanger.prototype.createTwitchThubnail = function (iframeWithTwitch) {
        if (!iframeWithTwitch || !iframeWithTwitch.getAttribute('src')) {
            return;
        }
        var videoMatch = iframeWithTwitch.getAttribute('src').match(TWITCH);
        if (videoMatch !== null) {
            var twitchThumbnailElement = document.createElement('img');
            var container = document.createElement('span');
            twitchThumbnailElement.setAttribute('src', "http://3g28wn33sno63ljjq514qr87.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-19-at-11.23.09-AM.png");
            twitchThumbnailElement.setAttribute('data-video', videoMatch[0]);
            container.appendChild(twitchThumbnailElement);
            iframeWithTwitch.parentElement.replaceChild(container, iframeWithTwitch);
        }
        //https://www.twitch.tv/videos/117523394
    };
    NewsVideoChanger.prototype.createYoutubeThumbnail = function (iframeWithYoutube) {
        if (!iframeWithYoutube || !iframeWithYoutube.getAttribute('src')) {
            return;
        }
        var videoMatch = iframeWithYoutube.getAttribute('src').match(YOUTUBE);
        if (videoMatch !== null) {
            var videoId = _.last(videoMatch[1].split('/')).replace(YOUTUBE_TIME_RELS, '');
            if (videoId) {
                var youtubeThumbnailElement = document.createElement('img');
                var container = document.createElement('span');
                youtubeThumbnailElement.setAttribute('src', "http://img.youtube.com/vi/" + videoId + "/0.jpg");
                youtubeThumbnailElement.setAttribute('data-video', "https://www.youtube.com/embed/" + videoId);
                container.appendChild(youtubeThumbnailElement);
                iframeWithYoutube.parentElement.replaceChild(container, iframeWithYoutube);
            }
            console.log("video id = ", videoId);
        }
    };
    NewsVideoChanger = __decorate([
        core_1.Pipe({
            name: 'newsVideoChanger',
            pure: true
        })
    ], NewsVideoChanger);
    return NewsVideoChanger;
}());
exports.NewsVideoChanger = NewsVideoChanger;
//# sourceMappingURL=NewsVideoChanger.js.map