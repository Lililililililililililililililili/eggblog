module.exports = app => {
    app.get('/user/:name', 'user.info');
    app.post('/user', 'user.create');
}