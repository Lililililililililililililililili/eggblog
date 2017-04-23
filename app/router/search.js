module.exports = app => {
    app.get('/search2', app.middlewares.uppercase(), 'search2.query');
    app.get('/search', 'search');
}