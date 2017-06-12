"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NewsVideoPopup = (function () {
    function NewsVideoPopup(changeDetectorRef, sanitizer) {
        this.changeDetectorRef = changeDetectorRef;
        this.sanitizer = sanitizer;
        this.hideVideoPopup = new core_1.EventEmitter();
    }
    NewsVideoPopup.prototype.ngAfterViewInit = function () {
        this.changeDetectorRef.detach();
    };
    NewsVideoPopup.prototype.closePopup = function () {
        this.hideVideoPopup.emit(true);
    };
    __decorate([
        core_1.Input()
    ], NewsVideoPopup.prototype, "activeVideoUrl");
    __decorate([
        core_1.Output()
    ], NewsVideoPopup.prototype, "hideVideoPopup");
    NewsVideoPopup = __decorate([
        core_1.Component({
            selector: 'news-video-popup',
            templateUrl: 'template.html'
        })
    ], NewsVideoPopup);
    return NewsVideoPopup;
}());
exports.NewsVideoPopup = NewsVideoPopup;
//# sourceMappingURL=NewsVideoPopup.js.map