'use strict';

exports.test = function* (ctx) {
    ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
};