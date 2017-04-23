'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  // app.get('/hello', 'home.hello');
  app.get('/list', 'home.list');
  // const gzip = app.middlewares.gzip({threshold: 128});
  // app.get('/needgzip', gzip, app.controller.handler);
  // app.get('/:data', 'home.data');
  // app.get('/search', 'search.query');
  app.post('/form', 'form.test');
  app.redirect('/index', '/', 302);

  require('./router/user')(app);
  require('./router/search')(app);
};
