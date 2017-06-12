"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var TagInputKeys_1 = require('../../shared/TagInputKeys');
/**
 * Taken from @angular/common/src/facade/lang
 */
function isBlank(obj) {
    return obj === undefined || obj === null;
}
var TagInputComponent = (function () {
    function TagInputComponent(fb, elementRef) {
        this.fb = fb;
        this.elementRef = elementRef;
        this.addOnBlur = true;
        this.addOnComma = true;
        this.addOnEnter = true;
        this.addOnPaste = true;
        this.addOnSpace = false;
        this.allowDuplicates = false;
        this.allowedTagsPattern = /.+/;
        this.autocomplete = false;
        this.autocompleteItems = [];
        this.autocompleteMustMatch = true;
        this.autocompleteSelectFirstItem = true;
        this.pasteSplitPattern = ',';
        this.placeholder = 'Add a tag';
        this.addTag = new core_1.EventEmitter();
        this.removeTag = new core_1.EventEmitter();
        this.canShowAutoComplete = false;
        this.autocompleteResults = [];
        this.tagsList = [];
        /** Implemented as part of ControlValueAccessor. */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(TagInputComponent.prototype, "tagInputField", {
        get: function () {
            return this.tagInputForm.get('tagInputField');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "inputValue", {
        get: function () {
            return this.tagInputField.value;
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.onDocumentClick = function (event, target) {
        if (!target) {
            return;
        }
        if (!this.elementRef.nativeElement.contains(target)) {
            this.canShowAutoComplete = false;
        }
    };
    TagInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.splitRegExp = new RegExp(this.pasteSplitPattern);
        this.tagInputForm = this.fb.group({
            tagInputField: ''
        });
        this.tagInputSubscription = this.tagInputField.valueChanges
            .do(function (value) {
            _this.autocompleteResults = _this.autocompleteItems.filter(function (item) {
                /**
                 * _isTagUnique makes sure to remove items from the autocompelte dropdown if they have
                 * already been added to the model, and allowDuplicates is false
                 */
                return item.toLowerCase().indexOf(value.toLowerCase()) > -1 && _this._isTagUnique(item);
            });
        })
            .subscribe();
    };
    TagInputComponent.prototype.onKeydown = function (event) {
        var key = event.keyCode;
        switch (key) {
            case TagInputKeys_1.KEYS.backspace:
                this._handleBackspace();
                break;
            case TagInputKeys_1.KEYS.enter:
                if (this.addOnEnter && !this.showAutocomplete()) {
                    this._addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            case TagInputKeys_1.KEYS.comma:
                if (this.addOnComma) {
                    this._addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            case TagInputKeys_1.KEYS.space:
                if (this.addOnSpace) {
                    this._addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            default:
                break;
        }
    };
    TagInputComponent.prototype.onInputBlurred = function (event) {
        if (this.addOnBlur) {
            this._addTags([this.inputValue]);
        }
        this.isFocused = false;
    };
    TagInputComponent.prototype.onInputFocused = function () {
        var _this = this;
        this.isFocused = true;
        setTimeout(function () { return _this.canShowAutoComplete = true; });
    };
    TagInputComponent.prototype.onInputPaste = function (event) {
        var _this = this;
        var clipboardData = event.clipboardData || (event.originalEvent && event.originalEvent.clipboardData);
        var pastedString = clipboardData.getData('text/plain');
        var tags = this._splitString(pastedString);
        this._addTags(tags);
        setTimeout(function () { return _this._resetInput(); });
    };
    TagInputComponent.prototype.onAutocompleteSelect = function (selectedItem) {
        this._addTags([selectedItem]);
        this.tagInputElement.nativeElement.focus();
    };
    TagInputComponent.prototype.onAutocompleteEnter = function () {
        if (this.addOnEnter && this.showAutocomplete() && !this.autocompleteMustMatch) {
            this._addTags([this.inputValue]);
        }
    };
    TagInputComponent.prototype.showAutocomplete = function () {
        return (this.autocomplete &&
            this.autocompleteItems &&
            this.autocompleteItems.length > 0 &&
            this.canShowAutoComplete &&
            this.inputValue.length > 0);
    };
    TagInputComponent.prototype._splitString = function (tagString) {
        tagString = tagString.trim();
        var tags = tagString.split(this.splitRegExp);
        return tags.filter(function (tag) { return !!tag; });
    };
    TagInputComponent.prototype._isTagValid = function (tagString) {
        return this.allowedTagsPattern.test(tagString) &&
            this._isTagUnique(tagString);
    };
    TagInputComponent.prototype._isTagUnique = function (tagString) {
        return this.allowDuplicates ? true : this.tagsList.indexOf(tagString) === -1;
    };
    TagInputComponent.prototype._isTagAutocompleteItem = function (tagString) {
        return this.autocompleteItems.indexOf(tagString) > -1;
    };
    TagInputComponent.prototype._emitTagAdded = function (addedTags) {
        var _this = this;
        addedTags.forEach(function (tag) { return _this.addTag.emit(tag); });
    };
    TagInputComponent.prototype._emitTagRemoved = function (removedTag) {
        this.removeTag.emit(removedTag);
    };
    TagInputComponent.prototype._addTags = function (tags) {
        var _this = this;
        var validTags = tags.map(function (tag) { return tag.trim(); })
            .filter(function (tag) { return _this._isTagValid(tag); })
            .filter(function (tag, index, tagArray) { return tagArray.indexOf(tag) === index; })
            .filter(function (tag) { return (_this.showAutocomplete() && _this.autocompleteMustMatch) ? _this._isTagAutocompleteItem(tag) : true; });
        this.tagsList = this.tagsList.concat(validTags);
        this._resetSelected();
        this._resetInput();
        this.onChange(this.tagsList);
        this._emitTagAdded(validTags);
    };
    TagInputComponent.prototype._removeTag = function (tagIndexToRemove) {
        var removedTag = this.tagsList[tagIndexToRemove];
        this.tagsList.splice(tagIndexToRemove, 1);
        this._resetSelected();
        this.onChange(this.tagsList);
        this._emitTagRemoved(removedTag);
    };
    TagInputComponent.prototype._handleBackspace = function () {
        if (!this.inputValue.length && this.tagsList.length) {
            if (!isBlank(this.selectedTag)) {
                this._removeTag(this.selectedTag);
            }
            else {
                this.selectedTag = this.tagsList.length - 1;
            }
        }
    };
    TagInputComponent.prototype._resetSelected = function () {
        this.selectedTag = null;
    };
    TagInputComponent.prototype._resetInput = function () {
        this.tagInputField.setValue('');
    };
    TagInputComponent.prototype.writeValue = function (value) {
        this.tagsList = value;
    };
    TagInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TagInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TagInputComponent.prototype.ngOnDestroy = function () {
        this.tagInputSubscription.unsubscribe();
    };
    __decorate([
        core_1.HostBinding('class.ng2-tag-input-focus')
    ], TagInputComponent.prototype, "isFocused");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "addOnBlur");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "addOnComma");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "addOnEnter");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "addOnPaste");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "addOnSpace");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "allowDuplicates");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "allowedTagsPattern");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "autocomplete");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "autocompleteItems");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "autocompleteMustMatch");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "autocompleteSelectFirstItem");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "pasteSplitPattern");
    __decorate([
        core_1.Input()
    ], TagInputComponent.prototype, "placeholder");
    __decorate([
        core_1.Output('addTag')
    ], TagInputComponent.prototype, "addTag");
    __decorate([
        core_1.Output('removeTag')
    ], TagInputComponent.prototype, "removeTag");
    __decorate([
        core_1.ViewChild('tagInputElement')
    ], TagInputComponent.prototype, "tagInputElement");
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target'])
    ], TagInputComponent.prototype, "onDocumentClick");
    TagInputComponent = __decorate([
        core_1.Component({
            selector: 'rl-tag-input',
            templateUrl: 'template.html',
            providers: [
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return TagInputComponent; }), multi: true },
            ]
        })
    ], TagInputComponent);
    return TagInputComponent;
}());
exports.TagInputComponent = TagInputComponent;
//# sourceMappingURL=TagInput.js.map