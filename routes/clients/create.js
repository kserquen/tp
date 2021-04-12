const models = require('../../models');
const clientSchema = require('../../schemas/client');

module.exports = {
  method: 'POST',
  url: '/clients',
  schema: {
    body: clientSchema,
    response: {
      201: clientSchema
    }
  },
  handler: async function (request, reply) {
    try {
      result = await models.Clients.create(request.body);
      reply.code(201);
      reply.send(result);
    } catch (error) {
      request.log.error(error);
      reply.code(503);
      reply.send(error);
    }
  }
};
