"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var TagInputKeys_1 = require('../../shared/TagInputKeys');
var TagInputAutocompleteComponent = (function () {
    function TagInputAutocompleteComponent(elementRef) {
        this.elementRef = elementRef;
        this.selectFirstItem = false;
        this.itemSelected = new core_1.EventEmitter();
        this.enterPressed = new core_1.EventEmitter();
        this.selectedItemIndex = null;
    }
    Object.defineProperty(TagInputAutocompleteComponent.prototype, "itemsCount", {
        get: function () {
            return this.items ? this.items.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    TagInputAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keySubscription = Observable_1.Observable.fromEvent(window, 'keydown')
            .filter(function (event) {
            return event.keyCode === TagInputKeys_1.KEYS.upArrow ||
                event.keyCode === TagInputKeys_1.KEYS.downArrow ||
                event.keyCode === TagInputKeys_1.KEYS.enter ||
                event.keyCode === TagInputKeys_1.KEYS.esc;
        })
            .do(function (event) {
            switch (event.keyCode) {
                case TagInputKeys_1.KEYS.downArrow:
                    _this.handleDownArrow();
                    break;
                case TagInputKeys_1.KEYS.upArrow:
                    _this.handleUpArrow();
                    break;
                case TagInputKeys_1.KEYS.enter:
                    _this.selectItem();
                    _this.enterPressed.emit();
                    break;
                case TagInputKeys_1.KEYS.esc:
                    break;
            }
            event.stopPropagation();
            event.preventDefault();
        })
            .subscribe();
    };
    TagInputAutocompleteComponent.prototype.ensureHighlightVisible = function () {
        var container = this.elementRef.nativeElement.querySelector('.sk-select-results__container');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.sk-select-results__item');
        if (choices.length < 1) {
            return;
        }
        if (this.selectedItemIndex < 0) {
            return;
        }
        var highlighted = choices[this.selectedItemIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    TagInputAutocompleteComponent.prototype.goToTop = function () {
        this.selectedItemIndex = 0;
        this.ensureHighlightVisible();
    };
    TagInputAutocompleteComponent.prototype.goToBottom = function (itemsCount) {
        this.selectedItemIndex = itemsCount - 1;
        this.ensureHighlightVisible();
    };
    TagInputAutocompleteComponent.prototype.goToNext = function () {
        if (this.selectedItemIndex + 1 < this.itemsCount) {
            this.selectedItemIndex++;
        }
        else {
            this.goToTop();
        }
        this.ensureHighlightVisible();
    };
    TagInputAutocompleteComponent.prototype.goToPrevious = function () {
        if (this.selectedItemIndex - 1 >= 0) {
            this.selectedItemIndex--;
        }
        else {
            this.goToBottom(this.itemsCount);
        }
        this.ensureHighlightVisible();
    };
    TagInputAutocompleteComponent.prototype.handleUpArrow = function () {
        if (this.selectedItemIndex === null) {
            this.goToBottom(this.itemsCount);
            return false;
        }
        this.goToPrevious();
    };
    TagInputAutocompleteComponent.prototype.handleDownArrow = function () {
        // Initialize to zero if first time results are shown
        if (this.selectedItemIndex === null) {
            this.goToTop();
            return false;
        }
        this.goToNext();
    };
    TagInputAutocompleteComponent.prototype.selectItem = function (itemIndex) {
        var itemToEmit = itemIndex ? this.items[itemIndex] : this.items[this.selectedItemIndex];
        if (itemToEmit) {
            this.itemSelected.emit(itemToEmit);
        }
    };
    TagInputAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        if (this.selectFirstItem && this.itemsCount > 0) {
            this.goToTop();
        }
    };
    TagInputAutocompleteComponent.prototype.ngOnDestroy = function () {
        this.keySubscription.unsubscribe();
    };
    __decorate([
        core_1.Input()
    ], TagInputAutocompleteComponent.prototype, "items");
    __decorate([
        core_1.Input()
    ], TagInputAutocompleteComponent.prototype, "selectFirstItem");
    __decorate([
        core_1.Output()
    ], TagInputAutocompleteComponent.prototype, "itemSelected");
    __decorate([
        core_1.Output()
    ], TagInputAutocompleteComponent.prototype, "enterPressed");
    TagInputAutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'rl-tag-input-autocomplete',
            templateUrl: 'template.html'
        })
    ], TagInputAutocompleteComponent);
    return TagInputAutocompleteComponent;
}());
exports.TagInputAutocompleteComponent = TagInputAutocompleteComponent;
//# sourceMappingURL=TagInputAutocompleteComponent.js.map