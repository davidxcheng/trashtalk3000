"use strict";

const koa = require('koa'),
      serve = require('koa-static'),
      config = require('./config'),
      app = koa();

console.dir(config);

require('./areas/routes')(app);

app.use(serve(`${__dirname}/public`));
app.listen(config.port);

console.log(`listening on port ${config.port}`);