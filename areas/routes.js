const routes = require('koa-route');
const homeController = require('./home/HomeController');

module.exports = (app) => {
    app.use(routes.get('/', homeController.get.index));
};