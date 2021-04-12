const models = require('../../models');
const repairSchema = require('../../schemas/repair');

module.exports = {
  method: 'POST',
  url: '/repairs',
  schema: {
    body: repairSchema,
    response: {
      201: repairSchema
    }
  },
  handler: async function (request, reply) {
    try {
      result = await models.Repairs.create(request.body);
      reply.code(201);
      reply.send(result);
    } catch (error) {
      request.log.error(error);
      reply.code(503);
      reply.send(error);
    }
  }
};
