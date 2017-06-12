"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TagInputItemComponent = (function () {
    function TagInputItemComponent() {
        this.tagRemoved = new core_1.EventEmitter();
    }
    Object.defineProperty(TagInputItemComponent.prototype, "isSelected", {
        get: function () { return !!this.selected; },
        enumerable: true,
        configurable: true
    });
    TagInputItemComponent.prototype.removeTag = function () {
        this.tagRemoved.emit(this.index);
    };
    __decorate([
        core_1.Input()
    ], TagInputItemComponent.prototype, "selected");
    __decorate([
        core_1.Input()
    ], TagInputItemComponent.prototype, "text");
    __decorate([
        core_1.Input()
    ], TagInputItemComponent.prototype, "index");
    __decorate([
        core_1.Output()
    ], TagInputItemComponent.prototype, "tagRemoved");
    __decorate([
        core_1.HostBinding('class.ng2-tag-input-item-selected')
    ], TagInputItemComponent.prototype, "isSelected");
    TagInputItemComponent = __decorate([
        core_1.Component({
            selector: 'rl-tag-input-item',
            templateUrl: 'template.html'
        })
    ], TagInputItemComponent);
    return TagInputItemComponent;
}());
exports.TagInputItemComponent = TagInputItemComponent;
//# sourceMappingURL=TagInputItemComponent.js.map