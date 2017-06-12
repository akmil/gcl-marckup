"use strict";
var Leagues_1 = require("../components/pages/leagues/Leagues");
var LeagueAbout_1 = require("../components/pages/leagues/about/LeagueAbout");
var LeagueParticipators_1 = require("../components/pages/leagues/participators/LeagueParticipators");
var LeaguesList_1 = require("../components/pages/leagues/list/LeaguesList");
var LeagueTable_1 = require("../components/pages/leagues/table/LeagueTable");
var LeagueMatches_1 = require("../components/pages/leagues/matches/LeagueMatches");
var LeaguePrize_1 = require("../components/pages/leagues/prize/LeaguePrize");
exports.router = [
    {
        path: 'leagues',
        component: LeaguesList_1.LeaguesList
    },
    {
        path: 'league',
        component: Leagues_1.Leagues,
        children: [
            {
                path: ':id',
                component: LeagueAbout_1.LeagueAbout
            },
            {
                path: ':id/participators',
                component: LeagueParticipators_1.LeagueParticipators
            },
            {
                path: ':id/table',
                component: LeagueTable_1.LeagueTable
            },
            {
                path: ':id/matches',
                component: LeagueMatches_1.LeagueMatches
            },
            {
                path: ':id/prize',
                component: LeaguePrize_1.LeaguePrize
            },
        ]
    },
];
//# sourceMappingURL=LeagueRoutes.js.map