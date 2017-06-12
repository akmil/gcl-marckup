"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
/* Components imports */
var ModalAdapter_1 = require('./ModalAdapter');
var RegistrationModal_1 = require('./registrationModal/RegistrationModal');
var LoginModal_1 = require('./loginModal/LoginModal');
var ConfirmEmailModal_1 = require('./confirmEmailModal/ConfirmEmailModal');
var addNewsModal_1 = require("./addNewsModal/addNewsModal");
var ModalAdapterModule = (function () {
    function ModalAdapterModule() {
    }
    ModalAdapterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                ModalAdapter_1.ModalAdapter, RegistrationModal_1.RegistrationModal, LoginModal_1.LoginModal, ConfirmEmailModal_1.ConfirmEmailModal, addNewsModal_1.AddNewsModal
            ],
            exports: [
                ModalAdapter_1.ModalAdapter
            ]
        })
    ], ModalAdapterModule);
    return ModalAdapterModule;
}());
exports.ModalAdapterModule = ModalAdapterModule;
//# sourceMappingURL=ModalAdapterModule.js.map