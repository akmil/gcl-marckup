"use strict";
var moment = require('moment');
exports.getTime = function (time) { return moment(time, moment.ISO_8601).fromNow(); };
exports.getTimeFromTimestamp = function (time) { return moment(time).fromNow(); };
//# sourceMappingURL=Utils.js.map