const moment = require('moment');
//将unix时间转换为习惯的时间
exports.relativeTime = (time) => moment(new Date(1000 * time)).fromNow();