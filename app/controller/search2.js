'use strict';

exports.query = function* (ctx) {
    ctx.body = `search2: ${this.query.name}`;
};