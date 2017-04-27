const moment = require('moment');
exports.relativeTime = (time) => moment(new Date(1000 * time)).fromNow();