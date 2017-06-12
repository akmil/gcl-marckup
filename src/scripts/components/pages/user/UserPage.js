"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var _ = require("lodash");
var moment = require('moment');
var ProfileTabs;
(function (ProfileTabs) {
    ProfileTabs[ProfileTabs["PROFILE"] = 0] = "PROFILE";
    ProfileTabs[ProfileTabs["FRIENDS"] = 1] = "FRIENDS";
    ProfileTabs[ProfileTabs["TEAM"] = 2] = "TEAM";
    ProfileTabs[ProfileTabs["ACHIEVEMENTS"] = 3] = "ACHIEVEMENTS";
    ProfileTabs[ProfileTabs["SPONSORS"] = 4] = "SPONSORS";
})(ProfileTabs || (ProfileTabs = {}));
var UserPage = (function () {
    function UserPage(lS, route, userInformationService, userFriendsService, newsService, teamService, notify) {
        this.lS = lS;
        this.route = route;
        this.userInformationService = userInformationService;
        this.userFriendsService = userFriendsService;
        this.newsService = newsService;
        this.teamService = teamService;
        this.notify = notify;
        this.ProfileTabs = ProfileTabs;
        this.activeProfileTab = ProfileTabs.FRIENDS;
        this.userNews = [];
        this.userFriends = [];
        this._userSubject = new rxjs_1.Subject();
    }
    UserPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params.id;
            if (id >= 0) {
                _this.updateUserInfo(id);
            }
        });
        this._userSubject.subscribe(function (user) {
            _this.user = user;
            _this.setActiveProfileTab(ProfileTabs.PROFILE);
        });
    };
    UserPage.prototype.getTime = function (time) {
        return moment(time, moment.ISO_8601).fromNow();
    };
    UserPage.prototype.setActiveProfileTab = function (profileTab) {
        switch (profileTab) {
            case ProfileTabs.FRIENDS:
                this.updateUserFriends();
                break;
            case ProfileTabs.PROFILE:
                this.updateUserNews();
                break;
            case ProfileTabs.TEAM:
                this.updateUserTeam();
                break;
        }
        this.activeProfileTab = profileTab;
    };
    UserPage.prototype.updateUserInfo = function (userId) {
        var _this = this;
        this.userInformationService.getUserInformationByUserId(userId).subscribe(function (response) {
            var _a = response.json(), error = _a.error, user = _a.user;
            // TODO: if error
            _this._userSubject.next(user);
        });
    };
    UserPage.prototype.updateUserNews = function () {
        var _this = this;
        this.newsService.getNewsByUserId(this.user.id).subscribe(function (response) {
            var _a = response.json(), error = _a.error, news = _a.news;
            // TODO: if error
            _this.userNews = news;
        });
    };
    UserPage.prototype.updateUserTeam = function () {
        var _this = this;
        if (this.user.team)
            this.teamService.getTeamById(this.user.team.team_id).subscribe(function (response) {
                var _a = response.json(), error = _a.error, team = _a.team;
                // TODO: if error
                _this.userTeam = team;
            });
    };
    UserPage.prototype.updateUserFriends = function () {
        var _this = this;
        this.userFriendsService.getFriendsByUserId(this.user.id).subscribe(function (response) {
            var _a = response.json(), error = _a.error, friends = _a.friends;
            // TODO: if error
            _this.userFriends = friends;
        });
    };
    UserPage.prototype.createTeam = function (form) {
        if (form.valid) {
            this.teamService.createTeam(form.value);
            form.reset();
        }
    };
    UserPage.prototype.sendTeamInvite = function (form) {
        if (form.valid) {
            var value = form.value;
            value.teamId = this.user.team.team_id;
            this.teamService.addUserToTeam(value);
            form.reset();
        }
    };
    UserPage.prototype.removeTeamMate = function (id) {
        var _this = this;
        this.teamService.removeUser(id).then(function (res) {
            if (res.success) {
                _.remove(_this.userTeam.users, { id: id });
                _this.notify.success(res.success);
            }
            else {
                _this.notify.error(res.error);
            }
        });
    };
    UserPage.prototype.addFriend = function (form) {
        var _this = this;
        if (form.valid) {
            this.userFriendsService.friendRequest(form.value).then(function (res) {
                if (res.success) {
                    _this.notify.success(res.success);
                }
                else {
                    _this.notify.error(res.error);
                }
            });
            form.reset();
        }
    };
    UserPage.prototype.removeFriend = function (id) {
        var _this = this;
        this.userFriendsService.removeFriend(id).then(function (res) {
            if (res.success) {
                _.remove(_this.userFriends, { friend: { id: id } });
                _this.notify.success(res.success);
            }
            else {
                _this.notify.error(res.error);
            }
        });
    };
    UserPage = __decorate([
        core_1.Component({
            selector: 'UserComponent',
            templateUrl: 'template.html'
        })
    ], UserPage);
    return UserPage;
}());
exports.UserPage = UserPage;
//# sourceMappingURL=UserPage.js.map