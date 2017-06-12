"use strict";
var ConfirmEmail_1 = require('../components/pages/confirmEmail/ConfirmEmail');
var UserSettings_1 = require('../components/pages/userSettings/UserSettings');
var ConfirmDataChange_1 = require('../components/pages/confirmDataChange/ConfirmDataChange');
var News_1 = require('../components/pages/news/News');
var SingleNews_1 = require('../components/pages/singleNews/SingleNews');
var UserPage_1 = require('../components/pages/user/UserPage');
var UserNotifications_1 = require('../components/pages/userNotifications/UserNotifications');
var Search_1 = require("../components/pages/search/Search");
exports.router = [
    {
        path: '',
        component: News_1.News,
        pathMatch: 'full'
    },
    {
        path: ':id',
        outlet: 'search',
        component: Search_1.Search
    },
    {
        path: 'news/:id',
        component: SingleNews_1.SingleNews
    },
    {
        path: 'user/settings',
        component: UserSettings_1.UserSettings
    },
    {
        path: 'email-confirm',
        component: ConfirmEmail_1.ConfirmEmail
    },
    {
        path: 'data-confirm',
        component: ConfirmDataChange_1.ConfirmDataChange
    },
    {
        path: 'user/notifications',
        component: UserNotifications_1.UserNotifications
    },
    {
        path: 'user/:id',
        component: UserPage_1.UserPage
    }
];
//# sourceMappingURL=index.js.map