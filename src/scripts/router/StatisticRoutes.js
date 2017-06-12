"use strict";
var StatisticUser_1 = require("../components/pages/statistic/user/StatisticUser");
var StatisticTeam_1 = require("../components/pages/statistic/team/StatisticTeam");
exports.router = [
    {
        path: 'stats',
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            },
            {
                path: 'users',
                component: StatisticUser_1.StatisticUser
            },
            {
                path: 'teams',
                component: StatisticTeam_1.StatisticTeam
            }
        ]
    }
];
//# sourceMappingURL=StatisticRoutes.js.map