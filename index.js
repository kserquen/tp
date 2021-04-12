'use strict';

const fastify = require('fastify')({
  logger: {
    prettyPrint: true
  }
});

const autoload = require('fastify-autoload')
const path = require('path')

const port = process.env.PORT || 3000;

fastify.get('/', async (req, res) => {
  return { start: true };
});

const models = require('./models');

fastify.register(autoload, {
  dir: path.join(__dirname, 'routes'),
  options: {},
  dirNameRoutePrefix: false
});

models.sequelize.sync().then(function () {
  fastify.listen(port, '0.0.0.0', (err) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  })
});
