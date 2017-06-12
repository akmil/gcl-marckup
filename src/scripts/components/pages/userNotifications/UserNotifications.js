"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserNotifications = (function () {
    function UserNotifications(lS, userInformation, userNotificationsService, userFriendService, teamService, toastr) {
        this.lS = lS;
        this.userInformation = userInformation;
        this.userNotificationsService = userNotificationsService;
        this.userFriendService = userFriendService;
        this.teamService = teamService;
        this.toastr = toastr;
    }
    UserNotifications.prototype.ngOnInit = function () {
        this.userNotificationsService.updateNotifications();
    };
    UserNotifications.prototype.acceptRequest = function (notificationId) {
        var _this = this;
        var notification = this.userNotificationsService.findNotification(notificationId);
        if (notification.friendInvite) {
            this.userFriendService.acceptRequest(notification.friendInvite.id).then(function (res) {
                if (res.success) {
                    _this.toastr.success(_this.lS.userLocalization.notification.success);
                    notification.friendInvite.confirmed = true;
                }
                else {
                    _this.toastr.error(res.error);
                }
            });
        }
        else if (notification.teamInvite) {
            this.teamService.acceptRequest(notification.teamInvite.id).then(function (res) {
                if (res.success) {
                    _this.toastr.success(_this.lS.userLocalization.notification.success);
                    notification.teamInvite.confirmed = true;
                }
                else {
                    _this.toastr.error(res.error);
                }
            });
        }
    };
    UserNotifications = __decorate([
        core_1.Component({
            selector: 'user-notifications',
            templateUrl: 'template.html'
        })
    ], UserNotifications);
    return UserNotifications;
}());
exports.UserNotifications = UserNotifications;
//# sourceMappingURL=UserNotifications.js.map