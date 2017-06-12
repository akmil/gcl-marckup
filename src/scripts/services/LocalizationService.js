"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _ = require('lodash');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Localization_1 = require('../enums/Localization');
var config_1 = require("../config");
var LocalizationService = (function () {
    function LocalizationService(_http, _localStorageService) {
        this._http = _http;
        this._localStorageService = _localStorageService;
        this.localizationPreference = Localization_1.Localization.English;
        this._loadedLocalizations = {};
        this.userLocalizationRequest();
    }
    Object.defineProperty(LocalizationService.prototype, "userLocalization", {
        get: function () {
            return this._userLocalization;
        },
        set: function (userLocalization) {
            this._userLocalization = userLocalization;
        },
        enumerable: true,
        configurable: true
    });
    LocalizationService.prototype.translateByKey = function (key) {
        return _.get(this.userLocalization, key);
    };
    LocalizationService.prototype.userLocalizationRequest = function (localization) {
        var _this = this;
        localization = localization || this._localStorageService.localStorage.localization || Localization_1.Localization.English;
        this.localizationPreference = localization;
        this._http.get(config_1.config.restUrl + "/api/localization/" + localization, {
            method: http_1.RequestMethod.Get,
            withCredentials: true,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            responseType: http_1.ResponseContentType.Json
        }).subscribe(function (response) {
            _this.userLocalization = response._body.localization;
        });
    };
    LocalizationService = __decorate([
        core_1.Injectable()
    ], LocalizationService);
    return LocalizationService;
}());
exports.LocalizationService = LocalizationService;
//# sourceMappingURL=LocalizationService.js.map