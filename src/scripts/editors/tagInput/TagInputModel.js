"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/do');
var TagInputAutocompleteComponent_1 = require('./components/tag-input-autocomplete/TagInputAutocompleteComponent');
var TagInput_1 = require('./components/tag-input/TagInput');
var TagInputItemComponent_1 = require('./components/tag-input-item/TagInputItemComponent');
var RlTagInputModule = (function () {
    function RlTagInputModule() {
    }
    RlTagInputModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                TagInputAutocompleteComponent_1.TagInputAutocompleteComponent,
                TagInput_1.TagInputComponent,
                TagInputItemComponent_1.TagInputItemComponent
            ],
            exports: [
                TagInput_1.TagInputComponent
            ]
        })
    ], RlTagInputModule);
    return RlTagInputModule;
}());
exports.RlTagInputModule = RlTagInputModule;
//# sourceMappingURL=TagInputModel.js.map