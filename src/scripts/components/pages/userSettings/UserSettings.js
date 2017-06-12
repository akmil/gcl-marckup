"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var config_1 = require('../../../config');
var UserSettings = (function () {
    function UserSettings(lS, userInformation, fileUpload) {
        this.lS = lS;
        this.userInformation = userInformation;
        this.fileUpload = fileUpload;
    }
    UserSettings.prototype.saveSettings = function (form) {
        if (form.valid) {
            var data = form.value;
            this.userInformation.saveUserInformation(data).then(function (res) {
                console.log(res);
                /*TODO: notification component*/
            });
        }
        else {
            console.log('Form not valid');
        }
    };
    UserSettings.prototype.updateStats = function () {
        if (this.userInformation.isManualUpdate) {
            this.userInformation.updateGameStats().then(function (res) {
                /*TODO: notification component*/
            });
        }
    };
    UserSettings.prototype.uploadAvatar = function (event) {
        var avatar = event.srcElement.files[0];
        var restUrl = config_1.config.restUrl + "/api/user/upload-avatar";
        this.fileUpload.upload(restUrl, avatar).then(function (res) {
            console.log(res);
        });
    };
    UserSettings = __decorate([
        core_1.Component({
            selector: 'user-settings',
            templateUrl: 'template.html'
        })
    ], UserSettings);
    return UserSettings;
}());
exports.UserSettings = UserSettings;
//# sourceMappingURL=UserSettings.js.map