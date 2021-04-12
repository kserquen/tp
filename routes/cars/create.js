const models = require('../../models');
const carsSchema = require('../../schemas/car');

module.exports = {
  method: 'POST',
  url: '/cars',
  schema: {
    body: carsSchema,
    response: {
      201: carsSchema
    }
  },
  handler: async function (request, reply) {
    try {
      result = await models.Cars.create(request.body);
      reply.code(201);
      reply.send(result);
    } catch (error) {
      request.log.error(error);
      reply.code(503);
      reply.send(error);
    }
  }
};
