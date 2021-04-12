const models = require('../../models');
const clientSchema = require('../../schemas/client');

module.exports = {
  method: 'GET',
  url: '/clients',
  schema: {
    response: {
      200: {
        type: 'array',
        items: clientSchema
      }
    }
  },
  handler: async function (request, reply) {
    try {
      result = await models.Clients.findAll();
      reply.send(result);
    } catch (error) {
      request.log.error(error);
      reply.code(503);
      reply.send(error);
    }
  }
};
