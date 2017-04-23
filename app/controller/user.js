'use strict';

exports.info = function* (ctx) {
  ctx.body = `hello,${ctx.params.name}`;
};

const createRule = {
    username: {
        type: 'email',
    },
    password: {
        type: 'password',
        compare: 're-password',
    },
};
exports.create = function* (ctx) {
    cxt.validate(createRule);
    ctx.body = ctx.request.body;
};
