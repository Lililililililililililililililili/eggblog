'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1491308060962_5324';

  return config;
};

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.security = {
  csrf: false
};
// exports.security = {
//   cframe: {
//     enable: false,
//   },
// };
// module.exports = {
//   middleware: [ 'gzip' ],
//   gzip: {
//     threshold: 128,
//   },
// }
