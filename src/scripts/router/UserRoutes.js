"use strict";
var UserProfile_1 = require("../components/pages/user/profile/UserProfile");
var User_1 = require("../components/pages/user/User");
var UserTeam_1 = require("../components/pages/user/team/UserTeam");
var UserStats_1 = require("../components/pages/user/stats/UserStats");
var UserFriends_1 = require("../components/pages/user/friends/UserFriends");
var UserAbout_1 = require("../components/pages/user/about/UserAbout");
var UserSponsors_1 = require("../components/pages/user/sponsors/UserSponsors");
exports.router = [
    {
        path: 'user',
        component: User_1.User,
        children: [
            {
                path: '',
                component: UserProfile_1.UserProfile
            },
            {
                path: ':id',
                component: UserProfile_1.UserProfile
            },
            {
                path: ':id/team',
                component: UserTeam_1.UserTeam
            },
            {
                path: ':id/stats',
                component: UserStats_1.UserStats
            },
            {
                path: ':id/friends',
                component: UserFriends_1.UserFriends
            },
            {
                path: ':id/about',
                component: UserAbout_1.UserAbout
            },
            {
                path: ':id/sponsors',
                component: UserSponsors_1.UserSponsors
            }
        ]
    }
];
//# sourceMappingURL=UserRoutes.js.map