"use strict";
var Team_1 = require("../components/pages/team/Team");
var TeamProfile_1 = require("../components/pages/team/profile/TeamProfile");
var TeamMembers_1 = require("../components/pages/team/members/TeamMembers");
var TeamAbout_1 = require("../components/pages/team/about/TeamAbout");
var TeamSponsors_1 = require("../components/pages/team/sponsors/TeamSponsors");
var TeamStats_1 = require("../components/pages/team/stats/TeamStats");
var TeamEdit_1 = require("../components/pages/team/edit/TeamEdit");
exports.router = [
    {
        path: 'team',
        component: Team_1.Team,
        children: [
            {
                path: '',
                component: TeamProfile_1.TeamProfile
            },
            {
                path: ':id',
                component: TeamProfile_1.TeamProfile
            },
            {
                path: ':id/about',
                component: TeamAbout_1.TeamAbout
            },
            {
                path: ':id/members',
                component: TeamMembers_1.TeamMembers
            },
            {
                path: ':id/sponsors',
                component: TeamSponsors_1.TeamSponsors
            },
            {
                path: ':id/stats',
                component: TeamStats_1.TeamStats
            },
            {
                path: ':id/edit',
                component: TeamEdit_1.TeamEdit
            }
        ]
    }
];
//# sourceMappingURL=TeamRoutes.js.map